import React, { useState } from 'react'
import styles from './NavBar.module.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const NavBar = () => {
    const [menu, setMenu] = useState("home")


  return (
    <div className={styles.NavBar}>
        <div className={styles.logo}>
            <p>taS😋ty</p>
        </div>
        
        <ul className={styles.navMenu}>
                <li onClick={()=>setMenu("home")} className={menu === "home" ? styles.active : ""}>Home</li>
                <li onClick={()=>setMenu("menu")} className={menu === "menu" ? styles.active : ""}>Menu</li>
                <li onClick={()=>setMenu("mobile")} className={menu === "mobile" ? styles.active : ""}>Mobile</li>
                <li onClick={()=>setMenu("contact")} className={menu === "contact" ? styles.active : ""}>Contact us</li>
            </ul>

        <div className={styles.navBarRight}>
            <SearchIcon />
            <div className={styles.searchIcon}>
                <ShoppingCartIcon />
                <div className={styles.dot}></div>
            </div>
            <button>Sign in</button>
        </div>
    </div>
  )
}

export default NavBar