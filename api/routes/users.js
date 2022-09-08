import express from 'express';
import { deleteUser, getUser, getUsers, updateUser } from '../controllers/user.js';
import { verifyAdmin, verifyToken, verifyUser } from '../utils/verifyToken.js';

const router = express.Router();

// Update
router.put('/:id',verifyUser, updateUser);

// Delete
router.delete('/:id', verifyUser, deleteUser);

// Get
router.get('/:id', verifyUser, getUser);

// Get All
router.get('/', verifyAdmin, getUsers);



export default router;