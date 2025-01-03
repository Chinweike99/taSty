import express from "express"
import { addTocart, fetchData, removeFromCart } from "../controllers/cartController";
import authenticationMiddleware from "../middlewares/auth";

const cartRouter = express.Router();

cartRouter.post('/addtocart',authenticationMiddleware, addTocart);
cartRouter.post('/deletefromcart',authenticationMiddleware, removeFromCart);
cartRouter.post('/cartlist',authenticationMiddleware, fetchData);


export default cartRouter;