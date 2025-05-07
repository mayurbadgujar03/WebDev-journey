import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import router from './routers/user.router.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
    cors({
        origin: process.env.BASE_URL,
    }),
);

app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Test checked",
    });
});

app.use('/api/v1/users', router);

app.listen(port, () => {
    console.log("Running", port);
});