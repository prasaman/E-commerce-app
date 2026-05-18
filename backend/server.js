import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongoDB.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';

// app config


const app = express()
const port = process.env.PORT || 5000;

connectDB()

connectCloudinary()
//middleware

app.use(express.json())
app.use(cors())

//api endpoints

app.use('/api/user',userRouter)

app.get('/',(req,res)=>{
    res.send("API is working")
})

app.listen(port,() => console.log("Server started on PORT :" + port))

