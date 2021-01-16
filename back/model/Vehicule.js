import mongoose from 'mongoose';
const { Schema } = mongoose;
const Vehicule = new Schema({
    type:String,
    immatricule:String,
    own:Boolean

});

export  const VehiculeM = mongoose.model('Vehicule', Vehicule);