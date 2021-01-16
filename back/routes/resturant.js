import express from "express";
export const rese = express.Router();
import bodyParser from 'body-parser'
import { ResturantM } from "../model/Resturant.js";

rese.post("/add",bodyParser.urlencoded({extended:true}),async(req,res,next)=>{
          try {
            const f=await ResturantM.findOne({id:req.body.id});
             if (f) {
                 
               res.send("id exists")
             }else{
                 const d=await new ResturantM({...req.body})
                 await d.save()
                 res.send("insertion with success")
             }
          } catch (err) {
            console.log(err)
          }
    
  
    });
 
    

    rese.post("/",bodyParser.urlencoded({extended:true}),async(req,res,next)=>{
  
  try {
       const h=await ResturantM.find({city: req.body.city })
       res.send(h)
  } catch (error) {
    console.log(err)
  }
}) 
