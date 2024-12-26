// 

import { error } from "console";
import foodModel from "../models/foodModel.js";
import fs from "fs";

// Add food 
const addFood = async(req, res) => {
    console.log(req.file)
    let image_filename = `${req.file?.filename}`;

    if (!req.file) {
        return res.status(400).json({ success: false, message: "No file uploaded." });
    }

    const food = new foodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: image_filename
    });
     
    try {
        await food.save();
        res.json({success:true, message: `Food added to list ✅ ${food.description}`})
    } catch (error) {
        console.log(error);
        res.json({success: false, message:  error.message})
    }
}

// All food lists
const foodList = async(req, res)=>{
 try {
    const foods = await foodModel.find();

    res.json({success: "Available food list", data: foods})
 } catch (error) {
    console.log(error)
    res.json({message: error.message})
 }
}


// Remove from list
const removeFood = async(req, res) => {
    try {
        const {id} = req.body
        // const remove = await foodModel.deleteOne({_id: id});
        const food = await foodModel.findById(id);// Find by ID
        if(!food){
            return res.status(404).json({message: "Food not found"})
        }

        // Delete associated image file
        fs.unlink(`uploads/${food.image}`, ()=>{
            if(error){
                console.error(error.message)
            }
        });

        //Delete the associated document.
        await foodModel.findByIdAndDelete(id);
        res.json({message: "Food deleted"})
    } catch (error) {
        console.log(error);
        res.json({messag: error.message})
    }
}

export {addFood, foodList, removeFood};