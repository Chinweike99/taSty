import React from "react";
import styles from "./Navbar.module.css";
import { assets } from "../../assets/assets";
import { useState } from "react";

const Navbar = () => {
  const [userImage, setUserImage] = useState(false)

  return (
    <div className={styles.navbar}>
      <a  className={styles.logo}>
        <p>taS😋ty</p>
        <small>Admin panel..</small>
      </a>
      <div className={styles.profile}>
        <label htmlFor="userImage">
          <img src={userImage? URL.createObjectURL(userImage) : assets.profileImage_2} alt="profile_image" />
        </label>
        <input onChange={(e)=>setUserImage(e.target.files[0])} type="file" id="userImage" hidden required />
        <small>admin</small>
      </div>
    </div>
  );
};

export default Navbar;
