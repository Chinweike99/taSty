import React from 'react'
import styles from './Sidebar.module.css'
import AddBoxIcon from '@mui/icons-material/AddBox';
import ListIcon from '@mui/icons-material/List';
import ReceiptIcon from '@mui/icons-material/Receipt';
import {NavLink} from 'react-router-dom'
import { useState } from 'react';


const Sidebar = () => {

    const [activeState, setActiveState] = useState("")

  return (
    <div className={styles.sidebar}>
        <NavLink to={'/add'} onClick={()=>setActiveState("add")} className={activeState === "add"? styles.active : styles.options}>
            <AddBoxIcon />
            <span>Add food</span>
        </NavLink>
        <NavLink to={'/list'} onClick={()=>setActiveState("list")} className={activeState === "list" ? styles.active : styles.options}>
            <ListIcon />
            <span>Food list</span>
        </NavLink>
        <NavLink to={'/orders'} onClick={()=>setActiveState("orders")} className={activeState === "orders"? styles.active : styles.options}>
            <ReceiptIcon />
            <span>Orders</span>
        </NavLink>
    </div>
  )
}

export default Sidebar