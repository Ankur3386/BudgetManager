import { app } from "./app.js";
import { connectDb } from "./db/index.js";
const PORT = process.env.PORT||3000
connectDb();
app.listen(PORT,()=>{
    console.log(`app llistening on port ${PORT}`)
})