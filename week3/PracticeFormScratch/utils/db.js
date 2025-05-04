import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const db = () => {
    mongoose
    .connect(process.env.Mongodb_URL)
    .then(() => {
        console.log("Connected to Database");
    })
    .catch((error) => {
        console.log("It's error while connecting to Database", error);
    })
    .finally(() => {
        console.log("Proccess of connecting to Database is DONE!");
    })
}

export default db