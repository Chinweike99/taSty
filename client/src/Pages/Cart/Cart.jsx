import React, { useContext } from 'react'
import styles from './Cart.module.css'
import { StoreContext } from '../../Context/StoreContext'
import DeleteIcon from '@mui/icons-material/Delete';

const Cart = () => {

  const {foodList, cartItems, money, removeFromCart, totalCartAmount,delivery, amountSeperator} = useContext(StoreContext)

  return (
    <div className={styles.cart}>
      <div className={styles.cartItems}>
        <div className={styles.itemsTitle}>
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {
          foodList.map((item, index)=> {
            if(cartItems[item._id]>0){
             
              return(
                <div className={styles.cartItemsItem} key={index}>
                  <img src={item.image} alt=""/>
                  <p>{item.name}</p>
                  <p>{money} {amountSeperator (item.price)}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>{money} {amountSeperator ((item.price) * (cartItems[item._id]))}</p>
                  <span onClick={()=>removeFromCart(item._id)}>delete</span>
                </div>
              )
            }
          })
        }
      </div>
      <div className={styles.cartBottom}>
        <div className={styles.cartTotal}>
          <h2>Total amount</h2>
          <div >
            <div className={styles.totalDetails}>
              <p>Subtotal</p>
              <p>{money} {amountSeperator(totalCartAmount())}</p>
            </div>
            <hr />
            <div className={styles.totalDetails}>
              <p>Delivery charge</p>
              <p>{money} {amountSeperator(delivery)}</p>
            </div>
            <hr />
            <div className={styles.totalDetails}>
              <p>Total</p>
              <p className={styles.totalPrice}>{money} {amountSeperator (totalCartAmount() + delivery)}</p>
            </div>
          </div>
          <button>Make purchase</button>

        </div>
      </div>
    </div>
  )
}

export default Cart