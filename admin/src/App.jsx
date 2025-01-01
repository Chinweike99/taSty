import React from 'react'
import './App.css'
import Sidebar from './Components/Sidebar/Sidebar'
import Navbar from './Components/Navbar/Navbar'
import {Routes, Route} from 'react-router-dom'
import Add from './Pages/addFood/Add'
import List from './Pages/ListOfFood/List'
import Orders from './Pages/foodOrders/Orders'
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";


const App = () => {
  return (
    <div>
      <ToastContainer position="top-right" autoClose={3000} style={{zIndex: "1001"}}/>
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