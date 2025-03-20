import mongoose from "mongoose";

const url = process.env.MONGO_URI

export const connectDB = async()=> {
    await mongoose.connect(`${url}/food-del`).then(()=>console.log("DB Connected"))
}