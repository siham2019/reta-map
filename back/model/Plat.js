import mongoose from 'mongoose';
const { Schema } = mongoose;

const Plat = new Schema({
 
    
        name:String,
        price:Number,
        image:String,
        description:String,
        category:String,
        idr:String,
        adressres:String,
        avalaible:Boolean
 

});

export  const PlatM = mongoose.model('Plat', Plat);
