import mongoose from 'mongoose';
const { Schema } = mongoose;
const User = new Schema({
 
    fullName:String,
    image:String,
    type:String,
    password:String,
    email:String,
    mobileNumber:Number
});

export  const UserM = mongoose.model('User', User);
