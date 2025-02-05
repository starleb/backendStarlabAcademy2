import express from 'express';
import register from '../controller/userController.js';
import upload from '../middleware/upload.js';
export const router = express.Router();

router.post('/starlab-academy2/register', upload.single('image'), register);
