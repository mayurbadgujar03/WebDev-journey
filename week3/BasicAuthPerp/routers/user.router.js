import express from 'express';
import { registerUser } from '../controller/user.controller.js';

const routers = express.Router();

routers.post('/register', registerUser);

export default routers;