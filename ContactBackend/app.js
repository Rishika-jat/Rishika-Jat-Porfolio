import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import emailRoutes from "./routes/emailRoutes.js"

const app = express();
app.use(express.json());
dotenv.config({path:'./config/config.env'})

app.use(cors())
app.use('/api', emailRoutes);
app.use(bodyParser.json());
app.use(express.urlencoded({extended:true}));

export default app;