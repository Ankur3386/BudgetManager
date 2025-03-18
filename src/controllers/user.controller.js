import { User } from "../models/user.model.js";
import { uploadResult} from "../utils/uploadOnCloudinary.js"
const RegisterUser = async(req,res,next)=>{
    //inputs and validate them
    // check if user already exist
    //password hash
    //tKE IMAGE FILE
    //create model and validate
    //return response
    //"fullname.firstname": firstName, "fullname.lastname": lastName, used as i am sending data through form-data
    const { "fullname.firstname": firstName, "fullname.lastname": lastName, email, password } = req.body;
    if (!firstName || !lastName || !email || !password) {
        return res.status(400).json({ message: "All credentials are required" });
    }
  
const existingUser= await User.findOne({email})
if (existingUser){
    throw new Error("user already exist")
}
const hashedPassword = await User.hashPassword(password)
const avatarLocalPath = req.files?.avatar?.[0]?.path || req.file?.path;
if(!avatarLocalPath ){
    throw new Error("error while uploading avatar image")
}
const avatarUploaded = await uploadResult(avatarLocalPath)

if(!avatarUploaded ){
    throw new Error("error while uploading avatar image on cloudinary")
}

const user = await User.create({
    fullname:{
        firstname:firstName,
        lastname:lastName
    },
    password:hashedPassword,
    email,
    avatar:avatarUploaded?.url||"",


})
if(!user ){
    throw new Error("error creating user")
}
const createdUser =await User.findById(user._id)
if(!createdUser){
    throw new Error(500,"something went wrong while registering the user")
  }
return res.status(200).json(createdUser)

}
export default  RegisterUser