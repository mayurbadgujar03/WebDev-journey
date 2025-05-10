import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const db = () => {
    mongoose.connect(process.env.MongoDB_URL)
    .then(()=>{
        console.log("Connected to DB!!");
    })
    .catch(()=>{
        console.log("Not connected to DB!!");
    })
    .finally(()=>{
        console.log("connection to DB process done!!");
    })
}

export default db;