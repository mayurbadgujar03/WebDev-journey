import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const db = () => {
    mongoose
        .connect(process.env.MongoDB_URL)
        .then(() => {
            console.log("connected");
        })
        .catch(() => {
            console.log("issue connecting");
        })
}   

export default db;