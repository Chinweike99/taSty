import { createContext, useEffect, useState } from "react";
import axios from "axios";
// import { foodList } from "../assets/assts";

export const StoreContext = createContext(null);
const money = "₦";
const delivery = 1000;
const amountSeperator = new Intl.NumberFormat("en-US").format;

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const url = "http://localhost:3100";
  const [token, setTokens] = useState("");
  const [foodList, setFoodList] = useState([]);


  // const addTocart = async (foodId) => {
  //   const userId = localStorage.getItem("userId"); // Ensure userId is being sent
  //   console.log("Token sent:", token);
  //   if (!cartItems[foodId]) {
  //     setCartItems((prev) => ({ ...prev, [foodId]: 1 }));
  //   } else {
  //     setCartItems((prev) => ({ ...prev, [foodId]: prev[foodId] + 1 }));
  //   }
  
  //   if (token) {
  //     try {
  //       const response = await axios.post(
  //         `${url}/api/cart/addtocart`,
  //         { userId, foodId }, // Ensure both userId and foodId are sent
  //         { headers: { token } }
  //       );
  //       console.log("API response:", response.data);
  //     } catch (error) {
  //       console.error("Error adding to cart:", error);
  //     }
  //   }
  
  //   console.log("Updated cartItems:", cartItems);
  //   console.log("Adding foodId:", foodId);
  // };
  

  const addTocart = async (foodId) => {
    const userId = localStorage.getItem("userId"); // Or fetch from context/state/

    if (!cartItems[foodId]) {
      setCartItems((prev) => ({ ...prev, [foodId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [foodId]: prev[foodId] + 1 }));
    }
    if (token) {
      await axios.post(
        url + "/api/cart/addtocart",
        {userId, foodId},
        { headers: { token } }
      ).then(console.log(token));
    }
    console.log(cartItems);
    console.log(foodId);
  };


  // const addTocart = async (foodId) => {

  //   const userId = localStorage.getItem("userId"); 
  //   setCartItems((prev) => {
  //     const newCartItems = { ...prev, [foodId]: (prev[foodId] || 0) + 1 };
  //     if (token) {
  //       // Send the API call with the updated state
  //       axios
  //         .post(
  //           `${url}/api/cart/addtocart`,
  //           { userId, foodId }, // Replace USER_ID_HERE with the actual userId
  //           { headers: { token } }
  //         )
  //         .then((response) => {
  //           console.log("Backend response:", response.data);
  //         })
  //         .catch((err) => {
  //           console.error("Error adding to cart:", err);
  //         });
  //         console.log(userId, foodId);
  //     }
  //     return newCartItems; // Ensure local state is updated
  //   });
  // };
  





// Remove from Cart
  const removeFromCart = (foodId) => {
    setCartItems((prev) => ({ ...prev, [foodId]: prev[foodId] - 1 }));
  };

  const totalCartAmount = () => {
    let totalAmount = 0;

    for (const i in cartItems) {
      if (cartItems[i] > 0) {
        // let iInfo = foodList.find((food) => food._id === Number(i));
        const iInfo = foodList.find(
          (food) => food._id === i || food._id === Number(i)
        );

        totalAmount += iInfo.price * cartItems[i];
      }
    }
    return totalAmount;
  };

  const fetchFood = async () => {
    const response = await axios.get(url + "/api/food/foodlist");
    setFoodList(response.data.data);
  };

  useEffect(() => {
    async function loadData() {
      await fetchFood();
      if (localStorage.getItem("token")) {
        setTokens(localStorage.getItem("token"));
      }
    }
    loadData();
  }, []);

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
