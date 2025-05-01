import mongoose from 'mongoose';
import dotenv from 'dotenv'

dotenv.config();

const db = () => {
    mongoose
    .connect(process.env.MongoDB_URL)
    .then( () => {
        console.log( "Connected to Database" );
    })
    .catch( () => {
        console.log( "failed to connect" );
    })
    .finally( () => {
        console.log( "THe process of connection is done!" );
    })
}

export default db;