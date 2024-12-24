import express from 'express';

const app = express();
const PORT = 3100

app.get('/', (req, res) => {
    res.send("Welcome to Tasty")
})

app.listen(PORT, ()=>{
    console.log(`Server running on port http://localhost:${PORT}`)
})