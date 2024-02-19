const express = require('express')
const zod = require('zod')
const { User } = require('../db')
const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('../config')
const cookieParser = require('cookie-parser')

const router = express.Router()

const signupBody = zod.object({
    firstName : zod.string(),
    lastName : zod.string(),
    userName : zod.string().email(),
    password : zod.string()
})

router.post('/signup',async (req,res)=>{
    const obj = signupBody.safeParse(req.body)
    if(!obj.success){
        return res.status(411).json({
            message:"Incorrect input"
        })
    }
    const u = await User.findOne({
        userName : req.body.userName
    })
    if(u){
        return res.status(411).json({
            message : "User Name is already taken."
        })
    }
    const newuser = await User.create({
        firstName:req.body.firstName,
        lastName : req.body.lastName,
        userName : req.body.userName,
        password : req.body.password
    })
    
    const token  = jwt.sign({userId:newuser._id},JWT_SECRET)
    res.status(200).json({
        message: "Signup Successful",
        token : token
    })
})

const signinBody = zod.object({
    userName : zod.string().email(),
    password : zod.string()
})

router.post('/signin',async(req,res)=>{
    const obj = signinBody.safeParse(req.body)
    if(!obj.success){
        return res.status(411).json({
            message:"Incorrect Inputs"
        })
    }
    const user = await User.findOne({
        userName:req.body.userName,
        password:req.body.password
    })
    if(!user){
        return res.status(411).json({
            message:"Invalid Credentials"
        })        
    }
    const token  = jwt.sign({userId:user._id},JWT_SECRET)
    res.cookie("token",token,{httpOnly:true})
    return res.status(200).json({
        message: "Signin Successful",
        firstName: user.firstName,
        token : token
    })
})

module.exports = router