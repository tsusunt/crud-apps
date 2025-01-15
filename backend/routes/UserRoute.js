import express from 'express';
import { getUsers, getUsersById, createUser, UpdateUser, DeleteUser } from '../controller/UserController.js';

const router = express.Router();
router.get('/users', getUsers);
router.get('/users/:id', getUsersById);
router.post('/users', createUser);
router.patch('/users/:id', UpdateUser);
router.delete('/users/:id', DeleteUser);

export default router;
