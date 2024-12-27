import React from 'react'
import './App.css'
import Sidebar from './Components/Sidebar/Sidebar'
import Navbar from './Components/Navbar/Navbar'

const App = () => {
  return (
    <div>
      <Navbar />
      {/* <hr /> */}
      <div className='app'>
        <Sidebar />
      </div>
    </div>
  )
}

export default App