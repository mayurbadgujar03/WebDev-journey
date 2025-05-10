import express from 'express';

import isLoggedIn from '../middleware/auth.middleware.js';
import { userRegister, userLogin, userProfile, userLogout } from '../controllers/user.controller.js';

const router = express.Router();

router.post('/register', userRegister);
router.post('/login', userLogin);
router.get('/profile', isLoggedIn, userProfile);
router.post('/logout', userLogout);

export default router;