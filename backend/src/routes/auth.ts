import express from 'express';
import { registerUser, loginUser } from '../controllers/authController';

const router = express.Router();

// Register endpoint
router.post('/register', registerUser);

// Login endpoint
router.post('/login', loginUser);

export default router;