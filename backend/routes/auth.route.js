import express from 'express'
import { loginUser, logout, signUp } from '../conrollers/auth.contoller.js';

const router = express.Router();

router.post('/signup', signUp);

router.post('/login', loginUser );

router.post('/logout', logout);
export default router;