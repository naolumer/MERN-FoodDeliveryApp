import mongoose from "mongoose";

export const connectDB = async()=> {
    await mongoose.connect('mongodb+srv://naolumer3:034903Na@cluster0.5gmud.mongodb.net/food-del').then(()=>console.log("DB Connected"))
}