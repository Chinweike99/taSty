import React from 'react'
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
        <div className={styles.headerContent}>
            <h2>
            Fresh Food, Delivered Fast to Your Doorstep
            </h2>
            <p>
            Discover a world of delicious meals crafted by local chefs and delivered to you with care. From quick bites to gourmet experiences, we bring a variety of fresh flavors right to your home. Choose, order, and enjoy – it’s that simple!
            </p>

            <button>View Menu</button>
        </div>
    </div>
  )
}

export default Header