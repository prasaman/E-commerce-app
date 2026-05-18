//Route for the user login
import validator from 'validator'
import userModel from "../models/userModel.js";

import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const createToken = (id) =>{

    return jwt.sign({id},process.env.JWT_SECRET)
}

const loginUser = async(req,res) =>{


}

//Route for the user registration
const registerUser = async(req,res) => {

    try{
        const {name,email,password} = req.body;
        // checking the user already  exist

        const exist = await userModel.findOne({email})
        if(exist) {
            return res.json({success:false,msg:'User already exists'})
        }

        // validating email format and strong password
        if(!validator.isEmail(email))
        {
            return res.json({success:false,msg:'Please enter a valid email'})
        }

        if(password.length<8)
        {
            return res.json({success:false,msg:'Please enter a strong password'})
        }


        //hashing user password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)

        const newUser = new userModel({
            name,email,password:hashedPassword
        })

        const user = await newUser.save()

        const token = createToken(user._id)
        res.json({success:true,token})


    }catch(error)
    {
        console.log(error)
        res.json({success:false,msg:error.msg})
    }
   
}


//Route for the admin login

const adminLogin = async() =>{


}

export {loginUser,registerUser,adminLogin} 