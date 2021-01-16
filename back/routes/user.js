import express from "express";
export const user= express.Router();
import bodyParser from 'body-parser'
import { UserM } from "../model/user.js";
import jwt from "jsonwebtoken"

user.post("/sign-up",bodyParser.urlencoded({extended:true}),async(req,res,next)=>{
    try {
        const f=await UserM.findOne({$or:[{email:req.body.email},{mobileNumber:req.body.mobileNumber}]})
          if (f) {
              res.send("this user is already exist try another email or phone number ")
          }else{
              await new UserM({...req.body}).save();
              res.send("it's ok")
          }
    } catch (error) {
        console.log(error)
    }
})


user.post("/sign-in",bodyParser.urlencoded({extended:true}),async(req,res,next)=>{
    try {
        const x=await UserM.findOne({$or:[{email:req.body.email},{mobileNumber:req.body.mobileNumber}]
            ,password:req.body.password})
          if (x) {
              const token=await jwt.sign({id:x.id},process.env.JWT_SECRET,{
                  expiresIn:"20m"
              })


            res.send(token)
          }else{
            res.send("this user does not exist verify your email or phone number ")
        
             
          }
    } catch (error) {
        console.log(error)
    }
})