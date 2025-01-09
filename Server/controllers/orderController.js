import orderModel from "../models/OrderModel.js";
import userModel from "../models/userModel.js";
import stripe from "stripe"

/**
 * Place order from client
 */
const placeOrder = async (req, res) =>{
    stripeKey = process.env.STRIPE_KEY;

}


export {placeOrder};