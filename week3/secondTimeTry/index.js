import express from 'express';
import dotenv from "dotenv";
import cors from "cors";
import db from "./utils/db.js"

// controller
import router from "./routers/user.router.js"

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
    cors({
    origin: process.env.BASE_URL,
    credentials: true,
    methods: ["GET", "POST", "DETELE", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"],
}));

app.get("/", (req, res) => {
    res.send("yup back")
})
app.get('/user', (req, res) => {
    res.send("user");
})

app.use("/api/v1/user/", router)

db();

app.listen((port), () => {
    console.log("it's running", port, process.env.BASE_URL);
})