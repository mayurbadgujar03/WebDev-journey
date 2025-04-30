import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const db = (() => {
    mongoose
    .connect(process.env.Mongodb_URL)
    .then(() => {
        console.log("Connected to database");
    })
    .catch((err) => {
        console.log(`not connecting to database ${err}`);
    })
    .finally(() => {
        console.log("Database connection proccess Done!");
        
    });
});

export default db;