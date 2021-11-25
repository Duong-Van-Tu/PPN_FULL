import {} from 'dotenv/config'
import express from 'express';
import connectDB from './config/db.js'
import customerRoute from './router/customerRoute.js'
import userRoute from './router/userRoute.js'
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors())

app.use('/api/customer', customerRoute);
app.use('/api/user', userRoute);
connectDB();
app.listen(PORT, () => {
    console.log("Server listening on port " + PORT)
});