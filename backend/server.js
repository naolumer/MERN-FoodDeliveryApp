import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"



// app config
const app = express()
const port = 3000

// middleware

app.use(express.json())
app.use(cors())

// db connection
connectDB();

// api endpoints
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))

app.get("/",(req,res)=>{
    res.send('API Working')
})

app.listen(port,()=>{
    console.log(`Server running on http://localhost:${port}`)
})

// mongodb+srv://naolumer3:<034903Na>@cluster0.5gmud.mongodb.net/?