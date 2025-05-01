import User from '../model/User.model.js'
import crypto from 'crypto';
import nodemailer from 'nodemailer'
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const userRegister = async (req, res) => {

    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({
            message: "All fields are required",
        });
    }
    if (password.length < 8) {
        return res.status(400).json({
            meassage: "Password length should be 8 characters minimum",
        });
    }

    try {
        const exitingUser = await User.findOne({ email });

        if (exitingUser) {
            return res.status(400).json({
                message: "User already exists",
            });
        }

        const user = await User.create({
            name,
            email,
            password,
        });
        console.log(user);

        if (!user) {
            return res.status(400).json({
                message: "User not registered",
            });
        }

        const token = crypto.randomBytes(32).toString("hex");
        console.log(token);
        user.verificationToken = token;

        await user.save();

        //Send email

        const transporter = nodemailer.createTransport({
            host: process.env.MAILTRAP_HOST,
            port: process.env.MAILTRAP_PORT,
            secure: false,
            auth: {
                user: process.env.MAILTRAP_USERNAME,
                pass: process.env.MAILTRAP_PASSWORD,
            },
        });

        const mailOption = {
            from: process.env.MAILTRAP_SENDERMAIL,
            to: user.email,
            subject: "Verify your email",
            text: `Please click on the following link:
            ${process.env.BASE_URl}/api/v1/users/verfiy/${token}`,
        };

        await transporter.sendMail(mailOption);

        res.status(201).json({
            message: "User registered successfully",
            sucess: true,
        });

    } catch (error) {
        res.status(400).json({
            message: "User not registered",
            error,
            sucess: false,
        });
    }
};

const verifyUser = async (req, res) => {
    const { token } = req.params;
    console.log(token);

    if (!token) {
        return res.status(400).json({
            message: "Invalid token",
        });
    }

    try {
        console.log("Verfication started");

        const user = await User.findOne({ verificationToken: token });

        if (!user) {
            return res.status(400).json({
                message: "Invalid token",
            });
        }

        user.isVerified = true;
        user.verificationToken = undefined;
        await user.save();

        res.status(200).json({
            message: "User verified successfully",
            success: true,
        });

    } catch (error) {

        res.status(400).json({
            message: "User not verified",
            error,
            success: false,
        });
    }
};

const login = async (req, res) => {

    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({
            message: "All fields are required",
        });
    }

    try {

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({
                message: "Invalid email or password",
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        console.log(isMatch);

        if (!isMatch) {
            return res.status(400).json({
                message: "Invalid email or password",
            });
        }

        const token = jwt.sign(
            { id: user._id, role: user.role },
            process.env.JWT_SECRET,
            {
                expiresIn: "24th",
            }
        );
        const cookieOptions = {
            httpOnly: true,
            secure: true,
            maxAge: 24 * 60 * 60 * 1000,
        };
        res.cookie("token", token, cookieOptions);

        res.status(200).json({
            success: true,
            message: "Login successful",
            token,
            user: {
                id: user._id,
                name: user.name,
                role: user.role,
            },
        });


    } catch (error) {

        res.status(400).json({
            message: "Something happend wrong",
            error,
        });
    }
};

const getMe = async (req, res) => {
    try {
        const user = await User.findById(user.req.id).select("-password");
        console.log(user);

        if (!user) {
            return res.status(400).json({
                success: false,
                message: "User not found",
            });
        }

        res.status(200).json({
            success: true,
            user,
        });
    }
    catch (error) {
        res.status(400).json({
            message: "Something went worng",
            success: false,
        });
    };
};

const logoutUser = async (req, res) => {
    res.cookie("token", "", {
        httpOnly: true,
        expires: new Date(0), // expire immediatly
    });
    res.status(200).json({
        sucess: true,
        message: "Logged out success",
    });
}

const forgotPassword = async (req, res) => {
    // get email
    // find user based on email
    // reset token + reset expiry => Date.now() + 10 * 60 * 1000 => user.save()
    // send mail => design url

    const { email } = req.body;

    if (!email) {
        return res.status(400).json({
            message: "Please valid email",
            success: false,
        });
    };

    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({
                message: "User dosen't exist",
                success: false,
            });
        };

        const token = crypto.randomBytes(32).toString("hex");

        console.log(token);

        user.resetPasswordToken = token;
        user.resetPasswordExpires = Date.now() + 10 * 60 * 1000;

        await user.save();

        //send email

        const transporter = nodemailer.createTransport({
            host: process.env.MAILTRAP_HOST,
            port: process.env.MAILTRAP_PORT,
            secure: false,
            auth: {
                user: process.env.MAILTRAP_USERNAME,
                pass: process.env.MAILTRAP_PASSWORD,
            },
        });

        const mailOption = {
            from: process.env.MAILTRAP_SENDEREMAIL,
            to: user.email,
            subject: "Reset your password", // Subject line
            text: `Please click on the following link:
                   ${process.env.BASE_URL}/api/v1/users/resetPassword/${token}`,
        }

        await transporter.sendMail(mailOption);

    } catch (error) {

        res.status(400).json({
            message: "Something went wrong",
            error,
            success: false,
        });

    }
}

const resetPassword = async (req, res) => {
    try {
        const { token } = req.params;
        const { password } = req.body;

        if( !token ) {
            return res.status(400).json({
                message: "Token is not aviable",
                success: false,
            });
        };

        const user = await User.findOne({ 
            resetPasswordToken: token,
            resetPasswordExpires: { $gt: Date.now() },
        });

        if ( !user ) {
            return res.status(400).json({
                message: "User doesn't exits",
                success: false,
            });
        };

        user.password = password;

        user.resetPasswordToken = undefined;
        user.resetPasswordExpires = undefined;

        await user.save();

        res.status(200).json({
            message: "Password seted",
            success: true,
        })


    } catch (error) {
        
        res.status(400).json({
            message: "Password not seted",
            success: true,
        })

    }
}

export { userRegister, verifyUser, login, getMe, logoutUser, forgotPassword, resetPassword };