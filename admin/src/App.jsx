import React from 'react'
import './App.css'
import Sidebar from './Components/Sidebar/Sidebar'
import Navbar from './Components/Navbar/Navbar'
import {Routes, Route} from 'react-router-dom'
import Add from './Pages/addFood/Add'
import List from './Pages/ListOfFood/List'
import Orders from './Pages/foodOrders/Orders'

const App = () => {
  return (
    <div>
      <Navbar />
      {/* <hr /> */}
      <div className='app'>
        <Sidebar />
        <Routes>
          <Route path='/add' element={<Add />}/>
          <Route path='/list' element={<List />}/>
          <Route path='/orders' element={<Orders />}/>
        </Routes>
      </div>
    </div>
  )
}

export default App