import mongoose from "mongoose";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
const userSchema =mongoose.Schema({
fullname:{
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String
    }
},
email:{
    type:String,
    required:true
},
password:{
    type:String,
    required:true,
    select:false
},
avatar:{
    type:String,
    required:true
},
refreshToken :{
    type:String,
    select:false
},
orderHistory:[
    {
        type: mongoose.Types.ObjectId,
        ref:"Order"
    }
],

},{timestamps:true})
userSchema.statics.hashPassword =async function(password){
    if (!password) {
        throw new Error("Password is required for hashing");
    }

    return await bcrypt.hash(password,10)
}
userSchema.methods.comparePassword =async function (passsword) {
   return  await bcrypt.compare(passsword,this.passsword)
}
userSchema.methods.getAccessToken = async function (){
    return jwt.sign({
        _id:this._id,

    },
   process.env.ACCESS_TOKEN_SECRET_KEY,
   {
   expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN
    }
)
}
userSchema.methods.getRefreshToken = async function (){
    return jwt.sign({
        _id:this._id,

    },
   process.env.REFRESH_TOKEN_SECRET_KEY,
   {
   expiresIn: process.env.REFRESH_TOKEN_EXPIRES_IN
    }
)
}

 export const User =mongoose.model("User",userSchema)