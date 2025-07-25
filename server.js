import express from "express";
import "dotenv/config";
import cors from 'cors';
import http from 'http';
import { connectDB } from "./lib/db.js";
import userRouter from "./routes/userRoutes.js";
import messageRouter from "./routes/messageRoutes.js";
import { Server } from "socket.io";
import itemRoute from "./routes/itemsRoute.js";

const app=express();
const server= http.createServer(app);

export const io=new Server(server,{
    cors:{origin:"*"}
})

export const userSocketMap={};

io.on("connection",(socket)=>{
    const userId= socket.handshake.query.userId;
    console.log("user connected",userId);

    if(userId) userSocketMap[userId]=socket.id;
    io.emit("getOnlineUsers",Object.keys(userSocketMap));

    socket.on("disconnect",()=>{
        console.log("user disconnected",userId);
        io.emit("getOnlineUsers",Object.keys(userSocketMap));
    })
})

app.use(express.json( {limit:"4mb"}));
app.use(cors());
await connectDB();
app.use("/api/status", (req,res)=>
res.send("server is live"));

app.use("/api/auth",userRouter);
app.use("/api/messages",messageRouter);
app.use("/api/items",itemRoute);
const port=process.env.PORT || 5000;

server.listen(port,()=>console.log("server is running on "+port))



