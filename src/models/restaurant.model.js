import mongoose from "mongoose";
const restaurantSchema =new mongoose.Schema({
 restaurantName:{
     type:String,
     required:true
    },
 owner:{
    type:mongoose.Types.ObjectId,
    ref:"User"
 },
 phonenumber:{
    type:String,
    required:true
 },
 description:{
    type:String,
 },
 menuItem:[
    {
        type:mongoose.Types.ObjectId,
        ref:"Menu",
        required:true
    }
 ]

},{timestamps:true})
export const Restaurant =mongoose.model("Restaurant",restaurantSchema)