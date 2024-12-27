import React from 'react'
import styles from './Sidebar.module.css'
import AddBoxIcon from '@mui/icons-material/AddBox';
import ListIcon from '@mui/icons-material/List';
import ReceiptIcon from '@mui/icons-material/Receipt';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
        <div className={styles.options}>
            <AddBoxIcon />
            <span>Add food</span>
        </div>
        <div className={styles.options}>
            <ListIcon />
            <span>Food list</span>
        </div>
        <div className={styles.options}>
            <ReceiptIcon />
            <span>Orders</span>
        </div>
    </div>
  )
}

export default Sidebar