import User from '../model/User.model.js';
import sendMail from '../utils/mail.js';
import {redisClient} from '../utils/redis.js';

import crypto from 'crypto';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const userRegister = async (req, res) => {

    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({
            message: 'All fields are required',
            succuss: false,
        });
    };

    try {

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                message: 'User already exist',
                succuss: false,
            });
        }

        const user = await User.create({
            name,
            email,
            password,
        })

        if (!user) {
            return res.status(400).json({
                message: 'User not created exist',
                succuss: false,
            });
        }

        await user.save();

        const token = crypto.randomBytes(32).toString("hex");

        if (!token) {
            return res.status(400).json({
                message: 'Token not created exist',
                succuss: false,
            });
        };

        user.verificationToken = token;
        await user.save();

        const mailOptions = ({
            from: process.env.MAILTRAP_SENDERMAIL,
            to: user.email,
            subject: "Verify email",
            text: `Use this url to verify
            ${process.env.BASE_URL}/api/v1/users/verify/${token}`,
        });

        sendMail(mailOptions);

        res.status(200).json({
            message: 'User registered',
            succuss: true,
        });

    } catch (error) {
        res.status(400).json({
            message: 'User not registered',
            succuss: false,
        });
    }
}

const userLogin = async (req, res) => {

    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({
            message: 'All fields are required',
            succuss: false,
        });
    }

    try {

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({
                message: 'User not found',
                succuss: false,
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({
                message: 'Wrong password',
                succuss: false,
            });
        };

        const token = jwt.sign(
            {
                id: user._id,
                role: user.role,
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "24h",
            }
        );

        const cookieOptions = {
            httpOnly: true,
            secure: true,
            maxAge: 24 * 60 * 60 * 1000,
        }

        await redisClient.set(`user:${user._id}`, JSON.stringify(user), {
            EX: 60 * 60 * 24,
        });

        res.cookie("token", token, cookieOptions);

        res.status(200).json({
            message: "User logged in",
            success: true,
            token,
        });

    } catch (error) {

        res.status(400).json({
            message: 'User not logged in',
            succuss: false,
        });

    }
}

const userProfile = async (req, res) => {

    try {

        const user = await User.findById(req.user.id).select("-password");

        if (!user) {
            return res.status(400).json({
                message: 'cookie not found',
                succuss: false,
            });
        }

        res.status(200).json({
            message: "User found",
            success: true,
            user,
        })

    } catch (error) {
        res.status(400).json({
            message: "User not found",
            success: false,
        });
    };
}

const userLogout = async (req, res) => {

    try {

        await redisClient.del(`user:${req.user}`);

        res.cookie("token", "", {
            httpOnly: true,
            expires: new Date(0),
        });
    
        res.status(200).json({
            message: "LoggedOut",
            success: true,
        });
        
    } catch (error) {
        console.log(error);
        
        res.status(400).json({
            message: "Not LoggedOut",
            success: false,
        });
    }
};

export { userRegister, userLogin, userProfile, userLogout };