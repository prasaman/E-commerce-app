import express from 'express'

import { adminLogin,loginUser,registerUser } from '../controllers/userController.js'

const userRouter = express.Router();

userRouter.post('/register',registerUser)
userRouter.post('/logn',loginUser)
userRouter.post('/admin',adminLogin)



export default userRouter