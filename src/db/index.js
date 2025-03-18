import mongoose from 'mongoose'

    
    const connectDb = async()=>{
        try {
        const connectionInstane = await mongoose.connect(`${process.env.MONGODB_URI}`)
        console.log("db connectes successfully ")
    }
 catch (error) {
    console.error(error)
    throw new Error("error connecting database")
}
}
export {connectDb}
