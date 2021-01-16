import express from "express";
export const route = express.Router();
import bodyParser from 'body-parser'
import { BusStopM } from "../model/BusStop.js";
import { checkAuth } from "../checkAuth.js";

 route.post("/bus/add",checkAuth,bodyParser.urlencoded({extended:true}),async(req,res,next)=>{
          try {
            const f=await BusStopM.findOne({id:req.body.id});
             if (f) {
                 
               res.send("id exists")
             }else{
                 const d=await new BusStopM({...req.body})
                 await d.save()
                 res.send("insertion with success")
             }
          } catch (err) {
            console.log(err)
          }
    
  
    });
 
    

 route.post("/bus",bodyParser.urlencoded({extended:true}),async(req,res,next)=>{
  
  try {
    /* const h=await BusStopM.find({ $or: [ { city: req.body.city }, { state: req.body.state } ] }) */

       const h=await BusStopM.find({ city: req.body.city })
       res.send(h)
       
  } catch (error) {
    console.log(err)
  }
}) 
