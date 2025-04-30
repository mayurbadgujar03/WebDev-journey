import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

//import database
import db from './utils/db.js'
//import all routes
import userRoutes from './router/user.router.js';

dotenv.config();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
    cors({
        origin: process.env.BASE_URL,
        credentials: true,
        methods: ['GET', 'POST', 'DELETE', 'PATCH'],
        allowedHeaders: ['Content-Type', 'Authorization'],
    }),
);

const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.send("Listening");
});

app.use('/api/v1/users', userRoutes);

db();

const server = app.listen(port, () => {
    console.log(`Listening ${port}, ${process.env.BASE_URL}`);
})

server.on('err', (err) => {
    console.log(`error occured ${err.message}`);
})