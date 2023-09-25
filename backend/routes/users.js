import express from 'express'
const router = express.Router()

import { updateUser,deleteUser,getSingleUser, getAllUser } from '../controllers/UserController.js';

import { verifyAdmin, verifyUser } from '../utils/verifyToken.js';

// update User
router.put('/:id',verifyUser , updateUser);

// delete User
router.delete('/:id',verifyUser,deleteUser);

// get single User
router.get('/:id',verifyUser, getSingleUser);

// get all User
router.get('/',verifyAdmin,getAllUser);


export default router