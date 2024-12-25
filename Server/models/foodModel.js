import mongoose from "mongoose";
import { type } from "os";

const foodSchema = new mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
    image: {type: String, required: true},
    category: {type: String, require: true}
});

// const foodModel = mongoose.model("food", foodSchema);
const foodModel = mongoose.models.food || mongoose.model("food", foodSchema); // Always safer to use this approach

export default foodModel;