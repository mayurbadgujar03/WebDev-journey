import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';

//import database connection
import db from './utils/db.js';

//import all routers
import userRouter from './router/user.router.js';

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(
    cors({
        origin: process.env.BASE_URL,
        credentials: true,
        methods: [ 'GET', 'POST', 'PATCH', 'DELETE' ],
        allowedHeaders: [ 'Content-Type', 'Authorization' ],
    }),
);

app.get('/', (req, res) => {
    res.send("Yup! listening")
});

app.use( '/api/v1/users/', userRouter );

//DB connect
db();

app.listen(port, () => {
    console.log(`Server running on : ${ port }, ${ process.env.BASE_URL }`);
});