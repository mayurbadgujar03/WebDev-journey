import express from 'express';
import { registerUser, verify, login, getMe, logout, forgotPassword, resetpassword } from '../controllers/user.controller.js';
import isLoggedIn from '../middleware/auth.middleware.js'

const router = express.Router();

router.post('/register', registerUser);
router.get('/verify/:token', verify);
router.get('/login', login);
router.get('/profile', isLoggedIn, getMe);
router.get('/logout', isLoggedIn, logout);
router.get('/ForgotPassword', isLoggedIn, forgotPassword);
router.get('/reset-password/:token', isLoggedIn, resetpassword);

export default router;