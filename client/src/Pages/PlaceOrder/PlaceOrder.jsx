import React, { useContext, useEffect, useState } from 'react'
import styles from './PlaceOrder.module.css'
import { StoreContext } from '../../Context/StoreContext'
import axios from 'axios';
import {toast} from 'react-toastify'

const PlaceOrder = () => {
  const {foodList, cartItems, token, url, money, totalCartAmount,delivery, amountSeperator} = useContext(StoreContext);

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

 const placeOrder = async(e) => {
  e.preventDefault();
  let orderedItems = [];
  foodList.map((item)=>{
    if(cartItems[item._id] > 0){
      let itemInfo = item;
      itemInfo["quantity"] = cartItems[item._id];
      orderedItems.push(itemInfo);
    }
  })
  console.log(orderedItems);
  let orderData = {
    address: data,
    items: orderedItems,
    amount: totalCartAmount() + 1000
  }
  let response = await axios.post(url+"/api/order/place", orderData, { headers: { Authorization: `Bearer ${token}` } });
  if(response.data.success){
    const {session_url} = response.data;
    window.location.replace(session_url);
    // window.location.href(session_url);
  }else{
    toast.error("Error making order")
  }
  console.log("Order data is: ", orderData);
 }



//  useEffect(()=>{
//   console.log(data);
//  }, [])


  return (
    <div className={styles.placeOrder}>
      <form onSubmit={placeOrder}>
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
            <button type='submit'>Make payment</button>

          </div>
        </div>
      </form>
    </div>
  )
}

export default PlaceOrder