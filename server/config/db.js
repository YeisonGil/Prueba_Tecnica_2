
import mongoose from "mongoose";
import dotenv from "dotenv";
(dotenv).config({path:'variables.env'});

export const conectarDB = async () =>{
    try {
        // eslint-disable-next-line no-undef
        await mongoose.connect(process.env.DB_MONGO,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
        console.log("DATABASE CONNECT")
    } catch (error) {
        console.log(error);
        // eslint-disable-next-line no-undef
        process.exit(1);
    }
}