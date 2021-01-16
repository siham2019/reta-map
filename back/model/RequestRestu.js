import mongoose from 'mongoose';
const { Schema } = mongoose;

const RequestRestu = new Schema({
    
    idU:String,
    pricet:Number,
    plat:[
        String
    ],
    destination: String,

    idDriver:String,
    nameD:String

});

export  const RequestRestuM = mongoose.model('RequestRestu', RequestRestu);