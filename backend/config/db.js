import mongoose from "mongoose";

export const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://gauravkumar31052:G1a2u3r4a5v$@cluster0.v0cplzq.mongodb.net/food-delivery').then(()=>console.log("DB connected"));
}