import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';

//db
import db from './utils/db.js';

//router
import userRouter from './router/user.router.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
    cors({
        origin: process.env.BASE_URL,
        allowedHeaders: ['Content-Type', 'Authorization'],
        methods: ['GET', 'PUT', 'PATCH', 'DELETE'],
        credentials: true,
    }),
);


app.get('/', (req, res) => {
    console.log("yup");
    res.send('Running');
});

app.use('/api/v1/users', userRouter);

db();

app.listen(port, (error) => {
    console.log(`server running on: ${port}, ${process.env.BASE_URL}`);
})