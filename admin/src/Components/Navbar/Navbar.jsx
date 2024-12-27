import React from "react";
import styles from "./Navbar.module.css";
import { assets } from "../../assets/assets";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <a  className={styles.logo}>
        <p>taS😋ty</p>
        <small>Admin panel..</small>
      </a>
      <div className={styles.profile}>
        <img src={assets.profileImage_2} alt="profile_image" />
        <small>admin</small>
      </div>
    </div>
  );
};

export default Navbar;
