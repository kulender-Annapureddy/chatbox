import path from 'path';
import express from 'express'
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';

import authRoutes from '../backend/routes/auth.route.js';
import messageRoutes from '../backend/routes/message.route.js'
import userRoutes from '../backend/routes/user.route.js';

import connectToMongoDB from './db/connectToMongoDB.js';
import { app, server } from './socket/socket.js';




const Port = process.env.PORT || 5000;
//for deployment
const __dirname = path.resolve();
dotenv.config();

// middleware
app.use(express.json());//to parse the incoming requests with json payloads(from req.body)
app.use(cookieParser());

// routes or api endpoints
// root route is http://localhost:5001/api/...
app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/users', userRoutes)

//for deployment
app.use(express.static(path.join(__dirname,"/frontend/dist")))

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname,"frontend", "dist", "index.html"))
})

server.listen(Port, () =>{
    connectToMongoDB();
    console.log('server running on port:',Port)
});
