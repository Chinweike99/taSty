import express from "express";
import cors from "cors";
import { connectDB } from "./configurations/DB.js";
import foodRouter from "./Routes/foodRoutes.js";
import userRouter from "./Routes/userRoute.js";
import "dotenv/config";
import cartRouter from "./Routes/cartRoute.js";
import orderRouter from "./Routes/orderRoutes.js";

//Database connection
connectDB();

//app config
const app = express();
const PORT = 3100;

//middleware
app.use(express.json());
app.use(cors());

// api endpoints
app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));

// user api
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

app.get("/", (req, res) => {
  res.send("Welcome to tasty foods 😋 \n what can we serve you?");
});

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
