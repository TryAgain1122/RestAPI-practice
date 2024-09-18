import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv';
import dbConnect from './config/dbConnnect.js';
import route from './routes/userRoute.js';

dotenv.config();
dbConnect();

const app = express()

app.use(express.json())
app.use(cors({
    origin: '*',
    methods: ["GET", "POST", "PUT", "DELETE"]
}))

// routes
app.use('/api/user', route)

const port = process.env.PORT || 6000

app.listen(port, () => {
    console.log(`Server is running ${port}`)
})