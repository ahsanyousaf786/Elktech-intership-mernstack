import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

import connectDB from './db/db.js';
import AuthRouter from './routes/AuthRouter.js';


const app = express();
const PORT = process.env.PORT || 8080;


// Connect to MongoDB
connectDB();

// Middleware
app.use(bodyParser.json());
app.use(cors({
    origin: 'http://localhost:3001'
}));

// Routes
app.get('/ping', (req, res) => res.send('PONG'));
app.use('/auth', AuthRouter);

// Start server
app.listen(PORT, () => console.log(`Server running on ${PORT}`,process.env.MONGODB_URI));