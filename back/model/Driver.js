import mongoose from 'mongoose';
const { Schema } = mongoose;
const Driver = new Schema({
   
    idU:String,
    type:String,
    idc:String,
    status:String,
    
});

export  const DriverM = mongoose.model('Driver', Driver);