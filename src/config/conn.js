import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const connection  = async()=>{
    try{
       await mongoose.connect(process.env.MONGODB_URL);
        console.log("conncetion successfull");

    }catch(err){
        console.log("error while connecting to DataBase...",err)
    }
}
export default connection;