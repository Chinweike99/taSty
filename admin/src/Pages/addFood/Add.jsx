import React from "react";
import styles from "./Add.module.css";
import { assets } from "../../assets/assets";
import UploadFileIcon from "@mui/icons-material/UploadFile";

const Add = () => {
  return (
    <div className={styles.addFood}>
      <form className={styles.flexCol}>
        <div className={styles.foodImage}>
          <p>upload image</p>
          <label htmlFor="image">
            <img src={assets.defaultProfile} alt="" />
          </label>
          <input type="file" id="image" hidden required />
        </div>

        <div className={styles.rightSide}>
          <div className={styles.name}>
            <p>Product name</p>
            <input
              type="text"
              name="name"
              placeholder="Name of food"
              required
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
            />
          </div>

          <div className={styles.priceCategory}>
            <div className={styles.category}>
              <p>Product Category</p>
              <select name="category"  >
                <option >Choose category</option>
                <option value="All">All</option>
                <option value="Nigerian"> Nigerian delicacies</option>
                <option value="Inter-continental">
                  Inter-continental foods
                </option>
                <option value="Snacks">Snacks</option>
              </select>
            </div>

            <div className={styles.price}>
              <p>Product price</p>
              <input
                type="Number"
                name="price"
                placeholder="Cost of product"
                required
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
