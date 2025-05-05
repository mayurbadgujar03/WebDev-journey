import jwt from "jsonwebtoken";
import dotenv from 'dotenv';

dotenv.config();

const isLoggedIn = async (req, res, next) => {

    let token = req.cookies?.token;
    try {
        
        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Authentication failed",
            });
        };
        
        const decoded = await jwt.verify(token, process.env.JWT_SECRET);
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
