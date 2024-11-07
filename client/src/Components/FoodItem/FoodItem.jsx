import React from 'react'
import styles from './FoodItem.module.css';
import { foodList } from '../../assets/assts';

const FoodItem = ({id, name, image,price, description, category}) => {
  return (
    <div>
        <img src={image} alt="" />
    </div>
  )
}

export default FoodItem