import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./database/dbConnect.js";
import userRoute from "./routes/user.route.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

// Connect to the database
connectDB();

// Middleware
app.use(express.json()); // Parses incoming JSON requests
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// API Routes
app.use("/api/v1/user", userRoute);

// Port setup and server start
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}`);
});
