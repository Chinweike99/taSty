import orderModel from "../models/OrderModel.js";
import userModel from "../models/userModel.js";
import Stripe from "stripe"

/**
 * Place order from client
 */
const stripeKey = new Stripe (process.env.STRIPE_KEY);
const placeOrder = async (req, res) =>{

    const frontEndUrl = "http://localhost:3000"

    try {
        const newOrder = new orderModel({
            userId: req.body.userId,
            items: req.body.items,
            amount: req.body.amount,
            address: req.body.address
        })
        await newOrder.save();
        await userModel.findByIdAndUpdate(req.body.userId, {cartData: {}});

        // Payment link with stripe: Inserting payment data.
        const lineItems = req.body.items.map((item) => ({
            priceData: {
                currency: "NGN",
                productData:{
                    name: item.name
                },
                unitAmount: item.price*100*1500
            },
            quantity: item.quantity
        }))

        lineItems.push({
            priceData:{
                currency: "NGN",
                productData: {
                    name: "Delivery fee"
                },
                unitAmount: 2*100*1500
            },
            quantity: 1
        });

        const session = await stripeKey.checkout.sessions.create({
            lineItems: lineItems,
            mode: "payment",
            success_url: `${frontEndUrl}/verify?success=true&orderId=${newOrder._id}`,
            cancel_url: `${frontEndUrl}/verify?success=false&orderId=${newOrder._id}`,
        })
        res.json({success:true, session_url: session.url})

    } catch (error) {
        console.log(error.message);
        res.json({success: false, message:`Your error is ${error.message}`})
    }
}


export {placeOrder};