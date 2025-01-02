import React, { useEffect, useState } from "react";
import styles from "./List.module.css";
import axios from "axios";
import {toast }from 'react-toastify'

const List = () => {
  const [foodList, setFoodList] = useState([]);
  const amountSeperator = new Intl.NumberFormat('en-US').format;
  const listUrl = "http://localhost:3100"; // Base URL for API

  // Function to fetch food list
  const getList = async () => {
    try {
      const response = await axios.get(`${listUrl}/api/food/foodlist`);
      console.log(response.data)
      if(response.data.success){
        setFoodList(response.data.data);
      }
      else{
        toast.error("Could not get list of food")
      }
    } catch (error) {
      console.error("Error fetching food list:", error);
    }
  };

  const deleteFood = async(foodId) =>{
    console.log(foodId)
      const response = await axios.post(`${listUrl}/api/food/delete`, {id:foodId});

      if(response.data.success){
        toast.success(response.data.message);
      }else{
        toast.error(response.data.message)
      }
      await getList();
     
  }


  useEffect(() => {
    getList();
  }, []);

  return (
    <div className={styles.foodList}>
      <h3>List of food</h3>
      <div className={styles.listTitle}>
        <b>image</b>
        <b>name</b>
        <b>category</b>
        <b>price</b>
        <b>Action</b>
      </div>
      {foodList.length > 0 ? (
        foodList.map((food, index) => {
          return (
            <div key={index} className={styles.listTable}>
              <img src={`${listUrl}/images/`+food.image} alt="" />
              <p>{food.name}</p>
              <p>{food.category}</p>
              {/* <p>{food.description}</p> */}
              <p>₦ {amountSeperator(food.price)}</p>
              <p onClick={()=>deleteFood(food._id)} className={styles.action}>X</p>
            </div>
          );
        })
      ) : (
        <p>Food loading ...</p>
      )}
    </div>
  );
};

export default List;
