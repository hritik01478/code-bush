import express from 'express';
import { updateUser, deleteUser, getUser, getUsers } from '../controllers/user.js';
import { verifyUser, verifyAdmin } from '../utils/verifyToken.js'


const router = express.Router();

// UPDATE USER
router.post('/:id', verifyUser, updateUser);

// DELETE USER
router.delete('/', verifyUser, deleteUser);

// GET USER
router.get('/:id', verifyUser, getUser);

// GET ALL USER
router.get('/', verifyAdmin, getUsers);

export default router;