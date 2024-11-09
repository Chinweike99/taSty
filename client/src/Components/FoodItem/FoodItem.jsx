import React, { useContext, useState } from 'react'
import styles from './FoodItem.module.css';
import StarRateIcon from '@mui/icons-material/StarRate';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { StoreContext } from '../../Context/StoreContext';



const FoodItem = ({id, name, image,price, description, category}) => {
  const [itemCount, setCount] = useState(0);
  const {cartItems, setCartItems, addTocart, removeFromCart} = useContext(StoreContext);

  return (
    <div className={styles.foodItem}>
        <div className={styles.imageContainer}>
          <img src={image} alt="food-Image" />

          {/* {
            !itemCount ? <button  onClick={()=>setCount(prev=>prev + 1)}>Add</button> 
            : <div>
              <RemoveIcon className={styles.remove} onClick={()=>setCount(prev=>prev-1)}/>
              <p>{itemCount <= 1 ? `${itemCount} Portion` : `${itemCount} Portions`}</p>
              <AddIcon className={styles.add} onClick={()=>setCount(prev=>prev+1)}/>
            </div>
          } */}

          { // To get a specific food Id, this functionality works
            !cartItems[id] ? <button  onClick={()=>addTocart(id)}>Add</button> 
            : <div>
              <RemoveIcon className={styles.remove} onClick={()=>removeFromCart(id)}/>
              <p>{cartItems <= 1 ? `${cartItems[id]} Portion` : `${cartItems[id]} Portions`}</p>
              <AddIcon className={styles.add} onClick={()=>addTocart(id)}/>
            </div>
          }
        </div>

        <div className={styles.foodInfo}>
          <div className={styles.foodRating}>
            <p className={styles.name}>{name}</p>
            <p className={styles.foodDesc}>{description}</p>
          </div>
          <div className={styles.starContainer}>
            <div className={styles.starDiv}>
              <StarRateIcon className={styles.star}/> <StarRateIcon className={styles.star}/> <StarRateIcon className={styles.star}/> <StarRateIcon className={styles.star}/> <StarBorderIcon className={styles.star1}/>
            </div>
            <p className={styles.foodPrice}>₦ {price}</p>
          </div>
          
        </div>
    </div>
  )
}

export default FoodItem