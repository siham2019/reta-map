import express from "express";
export const reqRes = express.Router();

import bodyParser from 'body-parser'
import { VRequestRestuM } from "../model/VRequestRestu.js";
import { RequestRestuM } from "../model/RequestRestu.js";



reqRes.post("/confirm/:id",bodyParser.urlencoded({extended:true}),async(req,res)=>{

    try {
      const f= await VRequestRestuM.find({idU:req.params.id})

      if (f) {
        const element=[]

         for (let i = 0; i < f.length; i++) {
            element.push(f[i]._id);
         }

        await RequestRestuM.create({
                 
          idU:req.params.id,
          pricet:req.body.pricet,
          plat:element
     

        })
        res.send('confirmed')
      }
    } catch (error) {
      console.log(error)
    }

})

reqRes.get("/delete/:id",async(req,res)=>{

  try {
       
      await VRequestRestuM.deleteOne({idp:req.params.id})
      res.send("deleted!")
 
  } catch (error) {
    console.log(error)
  }
 
 
 })



reqRes.get("/:id",async(req,res)=>{

  try {
       
      const g=await VRequestRestuM.find({idU:req.params.id})
      res.send(g)
 
  } catch (error) {
    console.log(error)
  }
 
 
 })

reqRes.post("/d",bodyParser.urlencoded({extended:false}),async(req,res)=>{

 try {
      const f= await VRequestRestuM.count({idU:req.body.idU})
     
      res.send({c:f})


 } catch (error) {
   console.log(error)
 }


})

reqRes.post("/add",bodyParser.urlencoded({extended:false}),async(req,res)=>{
       try {

      await new VRequestRestuM({

        idU:req.body.idU,
        namep:req.body.namep,
        destination: req.body.location,
        idp:req.body.idp,
        distance:req.body.distance,
        adressres:req.body.adressres,
        priced:req.body.distance*5,
        status:"waiting",
        quantity:req.body.quantity,
        pricet:req.body.pricet
      
      }).save()

       res.send("confirmed")


       } catch (error) {
        console.log(error)
       }

})

