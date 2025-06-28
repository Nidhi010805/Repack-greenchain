import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Server } from "socket.io";
import http from "http";

import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import cartRoutes from "./routes/cartRoutes.js";
import likeRoutes from "./routes/likesRoutes.js";
import returnPackagingRoutes from "./routes/returnPackagingRoutes.js";
import redeemRoutes from "./routes/redeemRoutes.js";
import leaderboardRoutes from "./routes/leaderboardRoutes.js";
import notificationRoutes from "./routes/notificationRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/product", productRoutes);
app.use("/api/order", orderRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/likes", likeRoutes);
app.use("/api/returnpackaging", returnPackagingRoutes);
app.use("/api/redeem", redeemRoutes);
app.use("/api/leaderboard", leaderboardRoutes);
app.use("/api/notifications", notificationRoutes);

// ✅ Setup HTTP server for socket
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

// ✅ Socket Events
io.on("connection", (socket) => {
 

  socket.on("join", (userId) => {
   
    socket.join(`user-${userId}`);
  });

  socket.on("disconnect", () => {
    
  });
});

app.set("io", io); // Global io access for controllers

// ✅ Server Listen
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
