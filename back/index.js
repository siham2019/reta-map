import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"
import cors from "cors";
import bodyperser from "body-parser"
dotenv.config();

import {route} from "./routes/bus.js"
import {rese} from "./routes/resturant.js"
import {plat} from "./routes/plat.js"
import {user} from "./routes/user.js"
import {reqRes} from "./routes/RequestRestu.js"
import {d} from "./routes/Driver.js"
import {v} from "./routes/vehicule.js"


const app = express()
const port =  process.env.PORT ||8000

app.use(bodyperser.json())
app.use(cors())


app.use("/",route,user)
app.use("/eat",rese)
app.use("/driver",d)
app.use("/vehicule",v)
app.use("/plat",plat)
app.use("/vrequest",reqRes) 

app.listen(port, () =>{
 mongoose.connect(process.env.DB_URL,{
      useUnifiedTopology: true,useNewUrlParser: true }).then(()=>{

     console.log("all things are ok "+port)
 
    }).catch(err=> console.log(err))
})