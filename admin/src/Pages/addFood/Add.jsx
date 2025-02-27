import React from "react";
import styles from "./Add.module.css";
import { assets } from "../../assets/assets";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios"
import { toast} from "react-toastify"
import "react-toastify/dist/ReactToastify.css";

const Add = ({listUrl}) => {
 const [image, setImgage] = useState(false)
 const [data, setData] = useState({
    name: "",
    description: "",
    category: "Nigerian",
    price: ""
 })

 const handleChange = (e)=>{
    const name = e.target.name;
    const value = e.target.value;
    setData(data=>({...data, [name]: value}))
 }

 // API to submit data to backend
 // FormData: primarily used for sending form data via HTTP requests, especially when working with file uploads.
 const handleSubmit = async(e) => {

    e.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("category", data.category);
    formData.append("price", data.price);
    formData.append("image", image)

    const sendData = await axios.post(`${listUrl}/api/food/add`, formData);
    if(sendData.data.success){
      setData({
        name: "",
        description: "",
        category: "",
        price: ""
     })
      setImgage(false);
      toast.success(sendData.data.message);

    }else{
      toast.error(sendData.data.message)
    }
 }

//  useEffect(() => {
//     console.log(data)
//  }, [data]);


  return (
    <div className={styles.addFood}>
      {/* <ToastContainer position="top-right" autoClose={3000} style={{zIndex: "1001"}}/> */}
      <form className={styles.flexCol} onSubmit={handleSubmit}>
        <div className={styles.foodImage}>
          <p>upload image</p>
          <label htmlFor="image">
            <img src={image?URL.createObjectURL(image): assets.blank} alt="" />
          </label>
          <input onChange={(e)=>setImgage(e.target.files[0])} type="file" id="image" hidden required />
        </div>

        <div className={styles.rightSide}>
          <div className={styles.name}>
            <p>Product name</p>
            <input
              type="text"
              name="name"
              placeholder="Name of food"
              required
              onChange={handleChange}
              value={data.name}
            />
          </div>

          <div className={styles.description}>
            <p>Product description</p>
            <textarea
              type="text"
              name="description"
              rows={"6"}
              placeholder="Describe your product"
              required
              onChange={handleChange}
              value={data.description}
            />
          </div>

          <div className={styles.priceCategory}>
            <div className={styles.category}>
              <p>Product Category</p>
              <select name="category"  onChange={handleChange} value={data.category}>
                {/* <option >Choose category</option>
                <option value="All">All</option> */}
                <option value="Nigerian-delicacies"> Nigerian delicacies</option>
                <option value="Inter-continental">
                  Inter-continental foods
                </option>
                <option value="Snack">Snacks</option>
              </select>
            </div>

            <div className={styles.price}>
              <p>Product price</p>
              <input
                type="Number"
                name="price"
                placeholder="Cost of product"
                required
                onChange={handleChange}
                value={data.price}
              />
            </div>
          </div>

          <button type="submit" className={styles.addButton}>
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default Add;
