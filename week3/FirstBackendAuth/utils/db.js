import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const db = () => {
    mongoose
        .connect(process.env.Mongodb_URL)
        .then(() => {
            console.log("DB connected");
        })
        .catch((err) => {
            console.log("Not connected");
        });
}

export default db;