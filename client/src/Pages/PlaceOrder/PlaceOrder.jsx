import React, { useContext, useState } from 'react'
import styles from './PlaceOrder.module.css'
import { StoreContext } from '../../Context/StoreContext'

const PlaceOrder = () => {
  const {foodList, cartItems, url, money, totalCartAmount,delivery, amountSeperator} = useContext(StoreContext);

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    location: "",
    city: "",
    state: "",
    phone: ""
  });

  const handleChange = (e)=>{
    const name = e.target.name;
    const value = e.target.value;
    setData(data=>({...data, [name]: value}))
 }


  return (
    <div className={styles.placeOrder}>
      <form>
        <div className={styles.placeOrderLeft}>
          <h2>Delivery details ..</h2>
          <div>
            <input type="text" name='firstName' value={data.firstName} onChange={handleChange} placeholder='First name' required/>
            <input type="text" name='lastName' value={data.lastName} onChange={handleChange} placeholder='Last name' required/>
          </div>
          <input type="email" name='email' value={data.email} onChange={handleChange}   placeholder='Email address' required/>
        
          <div>
            <input type="text" name='location' value={data.location} onChange={handleChange}  placeholder='Location Address' required/>
            <input type="text" name='city' value={data.city} onChange={handleChange} placeholder='City' required/>
          </div>
          {/* <div>
            <input type="text" placeholder='Zip code'/>
            <input type="text" placeholder='Country'/>
          </div> */}
          <div>
            <input type="text" name='state' value={data.state} onChange={handleChange} placeholder='State' required/>
            <input type="number" name='phone' value={data.phone} onChange={handleChange} placeholder='Phone' required/>
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