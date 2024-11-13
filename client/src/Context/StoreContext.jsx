import { createContext, useEffect, useState } from "react";
import { foodList } from "../assets/assts";


export const StoreContext = createContext(null);
const money = "₦";

const StoreContextProvider = (props) => {
    
    const [cartItems, setCartItems] = useState({});

    // const addTocart = () =>{
    //     setCartItems(cartItems + 1);
    // }

    const addTocart = (foodId) => {
        if(!cartItems[foodId]){
            setCartItems((prev)=>({...prev, [foodId]:1}))
        }
        else{
            setCartItems((prev)=>({...prev, [foodId]:prev[foodId] + 1}));
        }
    }

    const removeFromCart = (foodId) => {
        setCartItems((prev)=>({...prev, [foodId]:prev[foodId] - 1}));
    }


    useEffect(()=>{
        console.log(cartItems);
    }, [cartItems])

    const contextValue = {
        foodList, cartItems, setCartItems, addTocart, removeFromCart, money
    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider; 