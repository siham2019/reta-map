import mongoose from 'mongoose';
const { Schema } = mongoose;
// Cafétéria Beau Rivage, N11, Ténès

const VRequestRestu = new Schema({
    
      idU:String,
      adressres:String,
      namep:String,
      idp:String,
      destination:String,
      distance:Number,
      priced:Number,
      status:String,
      pricet:Number,
      quantity:Number

});

export  const VRequestRestuM = mongoose.model('VRequestRestu', VRequestRestu);