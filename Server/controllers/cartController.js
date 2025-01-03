import userModel from "../models/userModel";


// Function to add to cart
const addTocart = async(req, res)=>{
    const {cartData} = req.body;
    const response = await userModel.findOne({id: _id});
}


// Function to remove from cart
const removeFromCart = async(req, res)=>{

}


//Fectch cartData
const fetchData = async(req, res)=>{

}

export {addTocart, removeFromCart, fetchData};