import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

import {redisClient} from '../utils/redis.js';

dotenv.config();

const isLoggedIn = async (req, res, next) => {

    const token = req.cookies?.token;

    try {
        
        if(!token) {
            return res.status(401).json({
                success: false,
                message: "Cookie not found",
            });
        };

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const session = await redisClient.get(`user:${decoded.id}`);
        console.log(session);
        

        if(!session) {
            return res.status(400).json({
                message: "Session expired",
            });
        };

        req.user = decoded;

        next();

    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Internal server error",
        })
    }
}

export default isLoggedIn;