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
            <input type="text" placeholder='First name' required/>
            <input type="text" placeholder='Last name' required/>
          </div>
          <input type="email"  placeholder='Email address' required/>
        
          <div>
            <input type="text"  placeholder='Location Address' required/>
            <input type="text" placeholder='City' required/>
          </div>
          {/* <div>
            <input type="text" placeholder='Zip code'/>
            <input type="text" placeholder='Country'/>
          </div> */}
          <div>
            <input type="text" placeholder='State' required/>
            <input type="number" placeholder='Phone' required/>
          </div>
        </div>

            {/* Right Contents */}
        <div className={styles.placeOrderRight}>
          <div className={styles.cartTotal}>
            <h2>Total amount</h2>
            <div >
              <div className={styles.totalDetails}>
                <p>Subtotal</p>
                <p><b>{money} {amountSeperator(totalCartAmount())}</b></p>
              </div>
              <hr />
              <div className={styles.totalDetails}>
                <p>Delivery charge</p>
                <p> <b>{money} {amountSeperator(delivery)}</b></p>
              </div>
              <hr />
              <div className={styles.totalDetails}>
                <p>Total</p>
                <p className={styles.totalPrice} style={{fontSize: "1.4rem"}}><b>{money} {amountSeperator (totalCartAmount() + delivery)}</b></p>
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