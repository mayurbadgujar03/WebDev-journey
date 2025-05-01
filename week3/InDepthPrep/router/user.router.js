import express from 'express';
import { userRegister, verifyUser, login, getMe, logoutUser, forgotPassword, resetPassword } from '../controller/user.controller.js';

const router = express.Router();

router.post( '/register', userRegister );
router.get( '/verify/:token', verifyUser );
router.post( '/login', login );
router.get( '/profile', isLoggedIn, getMe );
router.get( '/logoutUser', isLoggedIn, logoutUser );
router.post( '/forgotPassword', forgotPassword );
router.post( '/resetPassword/:token', resetPassword );

export default router;