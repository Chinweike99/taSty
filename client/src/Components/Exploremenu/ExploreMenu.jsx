import React from 'react'
import styles from './Explore.module.css'
import { menu_list } from '../../assets/assts'

const ExploreMenu = ({category, setCategory}) => {
  return (
    <div className={styles.exploreMenu} id="exploreMenu">
        <h1>Discover Our Delicious Menu</h1>
        <p className={styles.exploreText}>From savory starters to mouth-watering main courses and indulgent desserts, our menu is crafted to satisfy every craving. Explore a world of flavors and let us bring the restaurant experience to your door.</p>
        <div className={styles.explorelist}>
            {
                menu_list.map((item, index) => {
                    return(
                        <div key={index} onClick={()=>setCategory(prev=>prev===item.name? "All" : item.name)} className={styles.listItem}>
                            <img className={category===item.name ? `${styles.active}` : null} src={item.image} alt="" />
                            <p>{item.name}</p>
                        </div>
                    )
                })
            }
        </div>

        <hr />
    </div>
  )
}

export default ExploreMenu 