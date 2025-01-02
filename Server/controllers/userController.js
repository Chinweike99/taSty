import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";

// Create token
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

// Register user
const registerUser = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const userExists = await userModel.findOne({ email });
    if (userExists) {
      return res.json({ success: false, message: "User exists" });
    }
    if (!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "Please enter a valid email address",
      });
    }
    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Password must not be less than 8 characters",
      });
    }

    //Hashing password
    const salt = await bcrypt.genSalt(12);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new userModel({
      username: username,
      email: email,
      password: hashedPassword,
    });
    //Save new user
    const user = await newUser.save();
    const token = createToken(user._id);
    res.json({ success: true, token });
    console.log(user);
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Unable to register user" });
  }
};

// Login User
const userLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const userExists = await userModel.findOne({ email });
    if (!userExists) {
      return res.json({ success: false, message: "User does not exist" });
    }
    const isPasswordValid = await bcrypt.compare(password, userExists.password);
    if (!isPasswordValid) {
      return res
        .status(401)
        .json({ success: false, message: "Password incorrect" });
    }
    // return res.status(200).json({ success: true, message: "Welcome" });
    const token = createToken(userExists._id);
    res.json({success: true, token})

  } catch (error) {
    res.json({ success: false, message: "Unable to login" });
  }
};

export { registerUser, userLogin };
