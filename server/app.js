import express from 'express';
import dotenv from 'dotenv';
import connectdb from './db.js';
import userRoutes from "./Routes/User.js"
import taskRoutes from './Routes/Task.js'
import DashboardRoutes from './Routes/Dashboard.js'
import cors from 'cors'
import bodyParser from 'body-parser';

const app = express();
dotenv.config();
connectdb();

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use('/user',userRoutes);
app.use('/task',taskRoutes);
app.use('/dashboard',DashboardRoutes)




app.get('/',(req,res)=>{
    res.send("server started");
})



const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log(`listening on ${PORT}`);
    
})