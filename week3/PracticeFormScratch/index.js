import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';

//import DB
import db from './utils/db.js';

//import all routers
import userRoutes from './router/user.router.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(
    cors({
        origin: process.env.BASE_URL,
        credentials: true,
        methods: [ 'GET', 'POST', 'PATCH', 'DELETE' ],
        allowedHeaders: [ 'Content-Type', 'Authorization' ],
    }),
);

app.get('/', (req, res) => {
    res.send("yup we're back! in Hood");
});

app.use( '/api/v1/users', userRoutes );

db();

app.listen(port, () => {
    console.log(`App running on port: ${port}, ${process.env.BASE_URL}`);
})