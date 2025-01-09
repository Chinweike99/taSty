import { placeOrder } from "../controllers/orderController.js";
import express from "express";
import authenticationMiddleware from "../middlewares/auth.js";

const orderRouter = express.Router();


orderRouter.post('/place', authenticationMiddleware, placeOrder);


export default orderRouter;
