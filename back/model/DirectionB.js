import mongoose from 'mongoose';
const { Schema } = mongoose;

const Direction = new Schema({
  
        id:{type:Number,unique:true},
        destination:String,
        price:Number,
        hourd:Number,
        idb:String
 
  
});

export  const DirectionM = mongoose.model('Direction', Bus);
