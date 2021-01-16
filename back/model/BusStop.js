import mongoose from 'mongoose';
const { Schema } = mongoose;

const BusStop = new Schema({
    id:{type:Number,unique:true},
    name:String,
    latitude:Number,
    longitude:Number ,
    city: String,
    state: String,
    
  
});

export  const BusStopM = mongoose.model('BusStop', BusStop);
