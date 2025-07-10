import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';
import { validateEmail, validatePassword } from '../utils/validation';

const prisma = new PrismaClient();

// Generate JWT token
const generateToken = (userId: number): string => {
  return jwt.sign({ userId }, process.env.JWT_SECRET!, {
    expiresIn: '7d', // Token expires in 7 days
  });
};

// Register new user
export const registerUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, email, password, gender, avatar } = req.body;

    // Validate input
    if (!name || !email || !password || !gender) {
      res.status(400).json({
        success: false,
        message: 'All fields are required'
      });
      return;
    }

    // Validate email format
    if (!validateEmail(email)) {
      res.status(400).json({
        success: false,
        message: 'Please enter a valid email address'
      });
      return;
    }

    // Validate password strength
    const passwordValidation = validatePassword(password);
    if (!passwordValidation.isValid) {
      res.status(400).json({
        success: false,
        message: passwordValidation.message
      });
      return;
    }

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email: email.toLowerCase() }
    });

    if (existingUser) {
      res.status(409).json({
        success: false,
        message: 'User with this email already exists'
      });
      return;
    }

    // Hash password
    const saltRounds = 12;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Convert gender to enum format
    const genderEnum = gender.toUpperCase() as 'MAN' | 'WOMAN';

    // Create user
    const user = await prisma.user.create({
      data: {
        name: name.trim(),
        email: email.toLowerCase(),
        password: hashedPassword,
        gender: genderEnum,
        avatar: avatar || `/src/assets/avatars/${gender}/avatar1.svg`
      }
    });

    // Generate token
    const token = generateToken(user.id);

    // Return user data without password
    const { password: _, ...userWithoutPassword } = user;

    res.status(201).json({
      success: true,
      message: 'User registered successfully',
      token,
      user: userWithoutPassword
    });

  } catch (error) {
    console.error('Registration error:', error);
    
    // Handle Prisma errors
    if (error instanceof Error && 'code' in error) {
      if (error.code === 'P2002') {
        res.status(409).json({
          success: false,
          message: 'User with this email already exists'
        });
        return;
      }
    }

    res.status(500).json({
      success: false,
      message: 'Registration failed. Please try again.'
    });
  }
};

// Login user
export const loginUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
      res.status(400).json({
        success: false,
        message: 'Email and password are required'
      });
      return;
    }

    // Find user
    const user = await prisma.user.findUnique({
      where: { email: email.toLowerCase() }
    });

    if (!user) {
      res.status(401).json({
        success: false,
        message: 'Invalid email or password'
      });
      return;
    }

    // Check password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      res.status(401).json({
        success: false,
        message: 'Invalid email or password'
      });
      return;
    }

    // Generate token
    const token = generateToken(user.id);

    // Return user data without password
    const { password: _, ...userWithoutPassword } = user;

    res.json({
      success: true,
      message: 'Login successful',
      token,
      user: userWithoutPassword
    });

  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({
      success: false,
      message: 'Login failed. Please try again.'
    });
  }
};