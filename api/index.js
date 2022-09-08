import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import authRoute from './routes/auth.js';
import roomsRoute from './routes/rooms.js';
import hotelsRoute from './routes/hotels.js'; 
import usersRoute from './routes/users.js';

const PORT = 5150;
const app = express();
dotenv.config();

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log('Connected to mongoDB');
    } catch (err) {
        throw err;
    }
};

//middlewares
app.use(cookieParser());
app.use(express.json());

app.use('/api/auth', authRoute);
app.use('/api/rooms', roomsRoute);
app.use('/api/hotels', hotelsRoute);
app.use('/api/users', usersRoute);

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || 'Something went wrong.';
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack,
    });
})

app.listen(PORT, () => {
    connect();
    console.log(`Server running on port: ${PORT}`);
});