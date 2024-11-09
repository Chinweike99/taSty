import { createContext, useState } from "react";
import { foodList } from "../assets/assts";


export const StoreContext = createContext(null);

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


    const contextValue = {
        foodList, cartItems, setCartItems, addTocart, removeFromCart
    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider; 