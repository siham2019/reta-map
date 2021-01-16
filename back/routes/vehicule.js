import express from "express";
export const v = express.Router();
import bodyParser from 'body-parser'
import { VehiculeM } from "../model/Vehicule.js";


v.post("/add",bodyParser.urlencoded({extended:true}),async(req,res)=>{
 
     try {
         await VehiculeM.create({...req.body})
         res.send("vehicule added")
        } catch (error) {
            console.log(error)
            res.send("internal error server")
         }


})