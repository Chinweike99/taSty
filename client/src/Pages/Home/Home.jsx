import React, { useState } from 'react'
import styles from './Home.module.css'
import Header from '../../Components/Header/Header'
import ExploreMenu from '../../Components/Exploremenu/ExploreMenu'
import FoodDisplay from '../../Components/FoodDisplay/FoodDisplay'
import Appdownload from '../../Components/AppDownload/Appdownload'

const Home = () => {
  const [category, setCategory] = useState("All")

  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
      <Appdownload />
    </div>
  )
}

export default Home