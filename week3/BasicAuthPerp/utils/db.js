import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const db = () => {
    mongoose
        .connect(process.env.Mongodb_URL)
        .then(() => {
            console.log("DataBase Connected")
        })
        .catch(() => {
            console.log("Not connected")            
        })
        .finally(() => {
            console.log("Connection proccess done!");
        })
};

export default db;