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

  const addTocart = async (foodId) => {
    const userId = localStorage.getItem("userId");
    if (!cartItems[foodId]) {
      setCartItems((prev) => ({ ...prev, [foodId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [foodId]: prev[foodId] + 1 }));
    }
    if (token) {
      await axios
        .post(
          url + "/api/cart/addtocart",
          { userId, foodId },
          { headers: { Authorization: `Bearer ${token}` } }
        )
        
    }
  };

  /**
   * Remove from cart
   */
  const removeFromCart = async (foodId) => {
    setCartItems((prev) => ({ ...prev, [foodId]: prev[foodId] - 1 }));

    if (token) {
      await axios.post(
        url + "/api/cart/deletefromcart",
        { foodId },
        { headers: { Authorization: `Bearer ${token}` } }
      );
    }
  };

  const totalCartAmount = () => {
    let totalAmount = 0;

    for (const i in cartItems) {
      if (cartItems[i] > 0) {
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

  /**
   * Get cartList
   */
  const getCartData = async (token) => {
    try {
      const userId = localStorage.getItem("userId");
      const response = await axios.post(
        url + "/api/cart/cartlist",
        { userId },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setCartItems(response.data.cartData || {});
    } catch (error) {
      console.error(
        "Error fetching cart data:",
        error.response?.data || error.message
      );
    }
  };


  useEffect(() => {
    async function loadData() {
      await fetchFood();
  
      const savedToken = (localStorage.getItem("token"));
      if (savedToken) {
        setTokens(savedToken);
        try {
          await getCartData(savedToken); // Fetch latest cart data from backend
        } catch (error) {
          const savedCart = localStorage.getItem("cartItems");
          if (savedCart) {
            setCartItems(savedCart); // Use localStorage as fallback
          }
        }
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
