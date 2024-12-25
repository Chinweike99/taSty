import mongoose from "mongoose";

export const connectDB = async() => {
    await mongoose.connect(`mongodb+srv://tasty:FfNn21BRbwefUGoP@cluster0.1w0lo.mongodb.net/tasty`)
    .then(()=>console.log("Database Connected"));
}