import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import db from './utils/db.js'
import routers from './routers/user.router.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
    cors({
        origin: process.env.BASE_URL,
        credentials: true,
        allowedHeaders: ['Content-Type', 'Authorization'],
        methods: ['GET', 'POST', 'DELETE', 'PATCH'],
    }),
);

app.get('/', (req, res) => {
    res.send("Running");
});

app.get('/landing', (req, res) => {
    res.send("landing page")
})

app.use('/api/v1/user/', routers);
// app.use('/api/v1/user', (req, res) => {
//     res.send("user")
// });

db();

const server = app.listen(port, () => {
    console.log(`Server runnning on ${port}, ${process.env.BASE_URL}`);
})

server.on('error', (err) => {
    console.log(`error while running the server ${err.message}`);
})