import userModel from "../models/userModel.js";

// Function to add to cart
const addTocart = async (req, res) => {
  // const {cartData} = req.body;
  try {
    let userData = await userModel.findOne({ _id: req.body.userId });
    let cartData = (await userData.cartData) || {};
    if (!cartData[req.body.foodId]) {
      cartData[req.body.foodId] = 1;
    } else {
      cartData[req.body.foodId] += 1;
    }

    console.log("Request Body:", req.body);

    await userModel.findByIdAndUpdate(req.body.userId, { cartData });
    await userData.save();
    res.json({ success: true, message: "Added to cart" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Unable to add food to cart" });
  }
};


// Function to remove from cart
const removeFromCart = async (req, res) => {
  try {
    // Find user and get cartData
    const userData = await userModel.findById(req.body.userId);
    const cartData = userData.cartData;

    if (!cartData || !cartData[req.body.foodId]) {
      return res.json({ success: false, message: "Item not found in cart" });
    }

    // Decrement item count or remove item
    cartData[req.body.foodId] -= 1;
    if (cartData[req.body.foodId] <= 0) {
      delete cartData[req.body.foodId];
    }

    // if(cartData[req.body.foodId]>0){
    //     cartData[req.body.foodId] -= 1;
    // }

    // Update user data in the database
    await userModel.findByIdAndUpdate(req.body.userId, { cartData });

    res.json({ success: true, message: "Food removed from cart" });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: "Unable to remove food from cart" });
  }
};

//Fectch cartData
const fetchData = async (req, res) => {
  try {
    const userData = await userModel.findById(req.body.userId);
    const cartData = userData.cartData;
    res.json({success: true, message: cartData})
  } catch (error) {
    console.log(error);
    res.json({success:false, message: "Can't fetch data"})
  }
};

export { addTocart, removeFromCart, fetchData };
