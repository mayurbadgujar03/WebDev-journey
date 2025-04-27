import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import db from './utils/db.js';

dotenv.config();
//import all routes
import userRoutes from './routes/user.routes.js';


const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true })); //middleWare - to handle HTML form data
app.use(express.json()); ////middleWare - to handle JSON from JS clients (fetch, axios, etc.)
// app.use(cors()); // default: allows all origins
app.use(  // allow only your frontend
    cors({ 
        origin: process.env.BASE_URL,
        credentials: true,
        methods: ["GET", "POST", "DELETE", "PATCH"],
        allowedHeaders: ["Content-Type", "Authorization"],
}));

app.get('/max', (req, res) => {
    // console.log(res);
    console.log(req.method);
    console.log(req.url);
    console.log(req.query);
    console.log(req.headers);
    res.send("running");
})

app.get('/check-res', (req, res) => {
    // console.log(Object.keys(res));
    // console.log(res.status);
    console.log(res.locals);
    
    res.send("check terminal");
})

app.get('/experiment', (req, res) => {
    res.status(201).json({ massage: "lol!" })
})

app.get('/msg', (req, res) => {
    res.json({ massage: "yo!" })
})

app.use("/api/v1/user/", userRoutes);

db();

app.listen(port, () => {
    console.log(`running ${port}, ${process.env.BASE_URL}`);
})