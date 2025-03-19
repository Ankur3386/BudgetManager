import mongoose from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
const menuItemSchema =new mongoose.Schema({
name:{
    type:String,
    required:true
},
description:{
    type:String
},
price:{
    type:Number,
    required:true
},
category:{
    type:String,
    enum:["Starter","Main","Desert"]
},
restaurant:{
    type:mongoose.Types.ObjectId,
    ref:"Restaurant"
},
image:{
    type:String,
}
},{timestamps:true})
menuItemSchema.plugin(mongooseAggregatePaginate)
export const Menu = mongoose.model("Menu",menuItemSchema)