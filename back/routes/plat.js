import express from "express";
export const plat = express.Router();
import bodyParser from 'body-parser'
import { PlatM } from "../model/Plat.js";
import { checkAuth } from "../checkAuth.js";

plat.get("/:id",bodyParser.urlencoded({extended:true}),async(req,res,next)=>{
    try {
        const e=await PlatM.find({idr:req.params.id})
        res.send(e)
    } catch (error) {
        res.send("error")
    }
 

})

plat.post("/add",checkAuth,bodyParser.urlencoded({extended:true}),async(req,res,next)=>{

           try {
               
                    await new PlatM({...req.body}).save()
                   res.send("insertin succed")
                 
           } catch (error) {
                console.log(error)
           }
     

})



