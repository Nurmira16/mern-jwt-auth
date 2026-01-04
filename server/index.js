import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import 'dotenv/config';
import mongoose from 'mongoose';

const PORT=process.env.PORT||5000;
const app=express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());

const startApp=async()=>{
    try {
        await mongoose.connect(process.env.DB_URL)
        app.listen(PORT,()=>{console.log(`server is running ${PORT}`)})
    } catch (error) {
        console.log(error)
    }
}

startApp()