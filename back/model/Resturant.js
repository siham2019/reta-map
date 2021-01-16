import mongoose from 'mongoose';
const { Schema } = mongoose;

const Resturant = new Schema({
    id:{type:Number,unique:true},
    name:String,
    adressres:String,
    latitude:Number,
    longitude:Number,
    state: String,
    city: String,
    status:String,
});

export  const ResturantM = mongoose.model('Resturant', Resturant);
