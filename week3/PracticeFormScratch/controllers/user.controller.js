import User from '../model/User.model.js'

import crypto from 'crypto';
import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import sendMail from '../utils/mail.js';
import { error } from 'console';

dotenv.config();

const registerUser = async (req, res) => {

    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({
            message: "Al fields are required",
            success: false,
        });
    };

    try {
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                message: "User already exist",
                success: false,
            });
        };

        const user = await User.create({
            name,
            email,
            password
        });

        if (!user) {
            return res.status(400).json({
                message: "Network error user not created",
                success: false,
            })
        };

        const token = crypto.randomBytes(32).toString("hex");
        user.verificationToken = token;
        
        await user.save();

        const mailOptions = {
            from: process.env.MAILTRAP_SENDERMAIL,
            to: user.email,
            subject: "Verify email",
            text: `Use the token given below
                    ${process.env.BASE_URL}/api/v1/users/verify/${token}`,
        }

        sendMail(mailOptions);

        res.status(200).json({
            message: "User stored successfully",
            success: true,
        });

    } catch (error) {
        return res.status(500).json({
            message: "User not stored successfully",
            error,
            success: false,
        });
    };
}

const verify = async (req, res) => {
    const { token } = req.params;

    if (!token) {
        return res.status(400).json({
            message: "Token is not valid",
            error,
            success: false,
        });
    }

    try {
        const user = await User.findOne({ verificationToken: token });

        if (!user) {
            return res.status(400).json({
                message: "user not found",
                error,
                success: false,
            });
        };

        user.isVerified = true;
        user.verificationToken = undefined;
        await user.save();

        res.status(200).json({
            message: "User verified",
            success: true,
        });

    } catch (error) {
        return res.status(400).json({
            error,
            message: "User not verified",
            success: false,
        })
    }
}

const login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({
            message: "Both fields are required",
            success: false,
        })
    };

    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({
                message: "User not verified",
                success: false,
            });
        };

        if (user.lockUntil && user.lockUntil > Date.now()) {
            return res.status(400).json({
                message: "Your account is locked, wait for a while",
                success: false,
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            user.loginAttempts += 1;

            if (user.loginAttempts >= 3) {
                user.lockUntil = Date.now() + 20 * 60 * 1000;
            }

            await user.save();

            if (user.lockUntil) {
                return res.status(400).json({
                    message: "Too many failed attempts. Account locked for 20 minutes",
                    success: false,
                });
            }

            return res.status(400).json({
                message: "Password not matched",
                success: false,
            });
        }

        user.loginAttempts = 0;
        user.lockUntil = undefined;
        await user.save();

        const token = jwt.sign(
            {
                id: user._id,
                role: user.role,
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "24hr",
            }
        );

        const cookieOptions = {
            httpOnly: true,
            secure: true,
            maxAge: 24 * 60 * 60 * 1000,
        }

        res.cookie("token", token, cookieOptions);

        res.status(200).json({
            message: "User logged in",
            success: true,
            token,
        })


    } catch (error) {

        res.status(400).json({
            message: "User not logged in",
            success: false,
            error,
        })

    }
}

const getMe = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select("-password");

        if (!user) {
            res.status(400).json({
                message: "Cookie expried",
                success: false,
            })
        }

        res.status(200).json({
            message: "profile",
            success: true,
            user,
        })

    } catch (error) {
        res.status(400).json({
            message: "Something error",
            success: false,
        });
    };
}

const logout = async (req, res) => {
    res.cookie("token", "", {
        httpOnly: true,
        expires: new Date(0),
    });

    res.status(200).json({
        message: "LoggedOut",
        success: true,
    });
}

const forgotPassword = async (req, res) => {

    const { email } = req.body;

    if (!email) {
        return res.status(400).json({
            message: "Email required",
            success: false,
        });
    };

    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({
                message: "User doesn't exist",
                success: false,
            });
        };

        const token = await crypto.randomBytes(32).toString("hex");

        user.resetPasswordToken = token;
        user.resetPasswordExpires = Date.now() + 10 * 60 * 1000;
        user.save();

        const mailOptions = {
            from: process.env.MAILTRAP_SENDERMAIL,
            to: user.email,
            subject: "reset password",
            text: `Use the token given below
                ${process.env.BASE_URL}/api/v1/users/reset-password/${token}`,
        }

        sendMail(mailOptions);

        res.status(200).json({
            message: "Email sent",
            success: true,
        });

    } catch (error) {
        return res.status(400).json({
            message: "Something went wrong",
            success: false,
        });
    };
}

const resetpassword = async (req, res) => {
    const { token } = req.params;
    const { password } = req.body;

    if (!token) {
        return res.status(400).json({
            message: "Token is not available",
            success: false,
        });
    };
    if (!password) {
        return res.status(400).json({
            message: "Password is not available",
            success: false,
        });
    };

    try {
        const user = await User.findOne({
            resetPasswordToken: token,
            resetPasswordExpires: { $gt: Date.now() }
        });

        if (!user) {
            return res.status(400).json({
                message: "Token Expired try again",
                success: false,
            });
        };

        user.password = password;

        user.resetPasswordToken = undefined;
        user.resetPasswordExpires = undefined;

        await user.save();

        res.status(200).json({
            message: "success in verification",
            success: true
        });

    } catch (error) {
        return res.status(400).json({
            message: "Not succesed in verification",
            success: false
        });
    }
}

export { registerUser, verify, login, getMe, logout, forgotPassword, resetpassword };
