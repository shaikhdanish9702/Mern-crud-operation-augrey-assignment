import express from "express";
import { deleteUser, getAllUser, getUser, registerUser, updateUser } from "../controller/userController.js";
const router = express.Router();


router.post('/signup', registerUser);
router.put('/:id',updateUser);
router.delete('/:id',deleteUser);
router.get('/user',getAllUser);
router.get('/:id',getUser)
export default router;