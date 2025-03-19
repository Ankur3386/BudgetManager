import mongoose, { Aggregate, plugin } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2"
const orderSchema = new mongoose.Schema({
customer:{
    type:mongoose.Types.ObjectId,
    ref:"User",
    required:true
},
restaurant:{
    type:mongoose.Types.ObjectId,
    ref:"Restaurant",
    required:true
},


orderItem:[
    {
        menueItem:{ 
            type:mongoose.Types.ObjectId,
            ref:"Menu",
            required:true
        },
        quantity:{
            type:Number,
            required:true
        },
        totalprice:{
            type:Number,
            required:true
        }


    }
],
toatlAmount:{
    type:Number,
    required:true
},

deliveryAddress:{
    type:mongoose.Types.ObjectId,
     ref:"User",
     required:true
 },
 status: { 
    type: String, 
    enum: ['pending', 'preparing', 'out for delivery', 'delivered'],
     default: 'pending' }
},{timestamps:true})
orderSchema.plugin(mongooseAggregatePaginate)
export const Order = mongoose.model("Order",orderSchema)