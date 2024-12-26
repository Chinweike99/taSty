import express from 'express';
import cors from 'cors'
import { connectDB } from './configurations/DB.js';
import foodRouter from './Routes/foodRoutes.js';
// Second line: retryWrites=true&w=majority&appName=Cluster0

//Database connection
connectDB();

//app config
const app = express();
const PORT = 3100

//middleware
app.use(express.json())
app.use(cors())

// api endpoints
app.use("/api/food", foodRouter)
app.use("/images", express.static('uploads'))


app.get('/', (req, res) => {
    res.send("Welcome to tasty foods 😋 \n what can we serve you?")
})

app.listen(PORT, ()=>{
    console.log(`Server running on port http://localhost:${PORT}`)
})