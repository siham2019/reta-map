import express from "express";
export const d = express.Router();
import bodyParser from 'body-parser'
import { DriverM } from "../model/Driver.js";
import { VehiculeM } from "../model/Vehicule.js";

d.post("/add/:id",bodyParser.urlencoded({extended:true}),async(req,res)=>{
 
     try {
     const h=await VehiculeM.findOne({type:req.body.type,own:false})
    if (h) {
        
 
        await DriverM.create({idU:req.params.id,
            type:req.body.type,
            idc:h._id,
            status:"off"
           })
       
         await VehiculeM.updateOne({_id:h._id},{ $set: {own:true}})   
          
         res.send("Driver added")

    } else {
        
        await DriverM.create({idU:req.params.id,
            type:req.body.type,
            idc:"",
            status:"off"
           })

         res.send("Driver added but there is not a vehicule")

    }
    

   
        } catch (error) {
            console.log(error)
            res.send("internal error server")
         }


})