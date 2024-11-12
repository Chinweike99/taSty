import React, { useState } from 'react'
import styles from './NavBar.module.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import { Link } from 'react-router-dom'

const NavBar = () => {
    const [menu, setMenu] = useState("home")
    const[menuList, setMenuList] = useState(false)


  return (
    <div className={styles.NavBar}>
        <div className={styles.logo}>
            <p>taS😋ty</p>
        </div>
        

        <ul className={styles.navMenu}>
            
            <Link to={'/'} onClick={()=>setMenu("home")} className={menu === "home" ? styles.active : ""}>Home</Link>
            <a href='#exploreMenu' onClick={()=>setMenu("menu")} className={menu === "menu" ? styles.active : ""}>Menu</a>
            <a href='#appDownload' onClick={()=>setMenu("mobile")} className={menu === "mobile" ? styles.active : ""}>Mobile Platform</a>
            <a href='#footer' onClick={()=>setMenu("contact")} className={menu === "contact" ? styles.active : ""}>Contact us</a>
        </ul>
        <LunchDiningIcon className={styles.menuIcon} onClick={()=>setMenuList(!menuList)}/>
        
        <ul className={styles.showmenu} style={{display: menuList ? "flex" : "none"}}>
            <p onClick={()=>setMenuList(!menuList)}>X</p>
            <Link to={'/'} onClick={()=>{setMenu("home"); setMenuList(!menuList)}} className={menu === "home" ? styles.active : ""}>Home</Link>
            <a href='#exploreMenu' onClick={()=>{setMenu("menu"); setMenuList(!menuList)}} className={menu === "menu" ? styles.active : ""}>Menu</a>
            <a href='#appDownload' onClick={()=>{setMenu("mobile"); setMenuList(!menuList)}} className={menu === "mobile" ? styles.active : ""}>Mobile Platform</a>
            <a href='#footer' onClick={()=>{setMenu("contact"); setMenuList(!menuList)}} className={menu === "contact" ? styles.active : ""}>Contact us</a>
        </ul>

        <div className={styles.navBarRight}>
            <SearchIcon className={styles.searchMedia}/>
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