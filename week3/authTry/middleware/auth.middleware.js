import jwt from "jsonwebtoken";

export const isLoggedIn = async (req, res, next) => {
    try {
        console.log(req.cookies);
        let token = req.cookies?.token;

        console.log("Token Found: ", token ? "YES" : "NO");

        if(!token) {
            console.log("NO token");
            return res.status(401).json({
                message: "Authentication failed",
                success: false,
            });
        }
        
        const decoded = await jwt.verify(token, process.env.JWT_SECRET);
        console.log("Decoded data: ", decoded);
        req.user = decoded;
        next(); 
        
    } catch (error) {
        console.log("Auth middleware failure");
        return res.status(500).json({
            sucess: false,
            message: "Internal server error",
        });
    }
};