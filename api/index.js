import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import authRoute from './routes/auth.js';
import userRoute from './routes/users.js';
import leaderboardRoute from './routes/leaderboard.js';

const app = express(); +
    dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("DB connection sucessfull!"))
    .catch((err) => console.log(err));

mongoose.connection.on("disconnected", () => {
    console.log('mongoDB disconnected!');
})


//middlewares
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/leaderboard', leaderboardRoute);

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack,
    });
});

app.listen(8000, () => {
    console.log("backend is running")
})
