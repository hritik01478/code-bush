import express from 'express';
import { getLeaderboard, updateLeaderboard } from '../controllers/leaderboard.js';
import { verifyUser } from '../utils/verifyToken.js';

const router = express.Router();

//UPDATE LEADERBOARD
router.put('/:id', updateLeaderboard);

//GET Leaderboard
router.get('/', getLeaderboard);


export default router;
