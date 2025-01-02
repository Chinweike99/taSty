/**
 * By default, Mongoose minimizes empty objects before saving them to the database.
 * The { minimize: false } option in your Mongoose schema prevents the cartData object from being automatically minimized or stripped of empty objects when the document is saved to the database.
 *The { minimize: false } option is not commonly needed unless your schema includes fields with nested objects or fields explicitly set to an empty object ({}). If your schemas don't have fields like this, then you wouldn't encounter the behavior that { minimize: false } addresses.
 */


import mongoose from "mongoose";
import { type } from "node:os";

const userSchema = new mongoose.Schema({
    username: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    // phone: {type: Number, required: true},
    cartData: {type: Object, default:{}}
}, {minimize:false});

const userModel = mongoose.model.user || mongoose.model("user", userSchema);

export default userModel;
