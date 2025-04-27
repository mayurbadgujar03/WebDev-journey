import express from "express";
import { userRegister } from "../controllers/user.controller.js";

const router = express();

router.get("/register", userRegister);

export default router;