import React, { useContext } from 'react'
import styles from './FoodDisplay.module.css'
import { StoreContext } from '../../Context/StoreContext'
import FoodItem from '../FoodItem/FoodItem';

const FoodDisplay = () => {

    const {foodList} = useContext(StoreContext);

  return (
    <div className={styles.foodDisplay} id='foodDisplay'>
        <h1>Savor the Best Dishes Nearby 🍽️🍴</h1>
        <div className={styles.foodlists}>
            {
                foodList.map((food, index) => {
                    return(
                        <div>
                            <FoodItem key={index} id={food._id} name={food.name} price={food.price} image={food.image} category={food.category} description={food.description} />
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default FoodDisplay