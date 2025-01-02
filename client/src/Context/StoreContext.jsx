import { createContext, useEffect, useState } from "react";
import { foodList } from "../assets/assts";

export const StoreContext = createContext(null);
const money = "₦";
const delivery = 1000;
const amountSeperator = new Intl.NumberFormat("en-US").format;

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const url = "http://localhost:3100";
  const [token, setTokens] = useState("");

  // const addTocart = () =>{
  //     setCartItems(cartItems + 1);
  // }

  const addTocart = (foodId) => {
    if (!cartItems[foodId]) {
      setCartItems((prev) => ({ ...prev, [foodId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [foodId]: prev[foodId] + 1 }));
    }
  };

  const removeFromCart = (foodId) => {
    setCartItems((prev) => ({ ...prev, [foodId]: prev[foodId] - 1 }));
  };

  const totalCartAmount = () => {
    let totalAmount = 0;

    for (const i in cartItems) {
      if (cartItems[i] > 0) {
        let iInfo = foodList.find((food) => food._id === Number(i));
        totalAmount += iInfo.price * cartItems[i];
      }
    }
    return totalAmount;
  };

  useEffect(()=>{
      if(localStorage.getItem("token")){
        setTokens(localStorage.getItem("token"));
      }
  }, [])

  const contextValue = {
    foodList,
    cartItems,
    setCartItems,
    addTocart,
    removeFromCart,
    money,
    totalCartAmount,
    delivery,
    amountSeperator,
    url,
    token,
    setTokens,
  };
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
