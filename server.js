import connectDB from "./config/db.js";
import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js"

//database
connectDB();

//express

const app= express();


app.use(cors());
app.use(express.json());


const port = 8000;

app.get('/',(req,res)=>{
    res.send("<h1>Hello World</h1>");
})

app.use("/auth", authRoutes);


app.listen(port,()=>{
    console.log("server is running on port",port );
})