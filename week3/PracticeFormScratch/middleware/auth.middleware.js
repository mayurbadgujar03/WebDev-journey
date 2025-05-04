import bcrypt from "bcryptjs";
import dotenv from 'dotenv';

dotenv.config();

const isLoggedIn = async (req, res, next) => {

    try {
        let token = req.cookie?.token;

    if(!token) {
        console.log("No token");
        

        return res.status(401).json({
            success: false,
            message: "Authentication failed",
        });
    };

    const decoded = await jwt.verify(token, process.env.JWT_SCRECT);
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