import express from 'express';
import dotenv from 'dotenv';
import connectdb from './db.js';
import userRoutes from "./Routes/User.js"
import taskRoutes from './Routes/Task.js'

const app = express();
dotenv.config();
connectdb();

app.use(express.json());
app.use('/user',userRoutes);
app.use('/task',taskRoutes);



app.get('/',(req,res)=>{
    res.send("server started");
})



const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log(`listening on ${PORT}`);
    
})