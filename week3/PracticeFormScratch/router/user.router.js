import express from 'express';
import { registerUser, verify, login, getMe, logout, forgotPassword, resetpassword } from '../controllers/user.controller.js';
import isLoggedIn from '../middleware/auth.middleware.js'

const router = express.Router();

router.post('/register', registerUser);
router.get('/verify/:token', verify);
router.get('/login', login);
router.get('/profile', isLoggedIn, getMe);
router.post('/logout', isLoggedIn, logout);
router.get('/ForgotPassword', forgotPassword);
router.post('/reset-password/:token', resetpassword);

export default router;
