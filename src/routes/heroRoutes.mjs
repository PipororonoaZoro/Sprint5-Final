import express from 'express';
import { getAllHeroes } from '../controllers/heroController.mjs';

const router = express.Router();

// Ruta principal
router.get('/heroes', getAllHeroes);

export default router;