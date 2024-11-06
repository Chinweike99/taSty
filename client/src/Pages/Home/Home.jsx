import React, { useState } from 'react'
import styles from './Home.module.css'
import Header from '../../Components/Header/Header'
import ExploreMenu from '../../Components/Exploremenu/ExploreMenu'

const Home = () => {
  const [category, setCategory] = useState("All")

  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory}/>
    </div>
  )
}

export default Home