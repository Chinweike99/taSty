import React, { useContext } from 'react'
import styles from './PlaceOrder.module.css'
import { StoreContext } from '../../Context/StoreContext'

const PlaceOrder = () => {
  const {foodList, cartItems, money, removeFromCart, totalCartAmount,delivery, amountSeperator} = useContext(StoreContext)


  return (
    <div className={styles.placeOrder}>
      <form>
        <div className={styles.placeOrderLeft}>
          <h2>Delivery details ..</h2>
          <div>
            <input type="text" placeholder='First name'/>
            <input type="text" placeholder='Last name'/>
          </div>
          <input type="email"  placeholder='Email address'/>
          <input type="text"  placeholder='Location Address'/>
          <div>
            <input type="text" placeholder='City'/>
            <input type="text" placeholder='State'/>
          </div>
          {/* <div>
            <input type="text" placeholder='Zip code'/>
            <input type="text" placeholder='Country'/>
          </div> */}
          <input type="number" placeholder='Phone'/>
        </div>

            {/* Right Contents */}
        <div className={styles.placeOrderRight}>
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
          <button>Make payment</button>

        </div>
        </div>
      </form>
    </div>
  )
}

export default PlaceOrder