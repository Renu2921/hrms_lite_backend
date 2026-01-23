import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import employeeRouter from "./routes/employee.js";
import attendenceRouter from "./routes/attendence.js";
const app=express();
app.use(
  cors({
    origin: ["http://localhost:5174",
        "https://hrms-lite-29.netlify.app"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);


app.use(express.json());
app.use(express.urlencoded({extended:true}));

async function DbConnection() {
   try{
 await mongoose.connect(process.env.MONGODB_URL);
    console.log("DB is connected Successfully");
   }catch(error){
     console.error("MongoDB connection failed", error.message);
   }
}
DbConnection();

app.use("/",employeeRouter);
app.use("/",attendenceRouter);


app.listen(3000,()=>{
    console.log("Server is listening the port 3000");
})