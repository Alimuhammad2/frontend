import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import  dotenv from 'dotenv';
import route from "./route/doctorRoutes.js";
import bodyParser from 'body-parser';
 
const app = express();
app.use(bodyParser.json());
app.use(cors());
dotenv.config();

const PORT = process.env.PORT || 7000;
const URL = process.env.MONGOURL;

mongoose.connect(URL).then(()=>{


    console.log("DB is Connected");
    app.listen(PORT, ()=>{
        console.log(`Server is Running on Port: ${PORT}`);
    })
}).catch((error) => console.log(error))

app.use("/api", route)