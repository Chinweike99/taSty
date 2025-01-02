import './App.css';
import NavBar from './Components/NavBar/NavBar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Cart from './Pages/Cart/Cart';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';
import Footer from './Components/Footer/Footer';
import LoginPage from './Components/Login/login';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [showLogin, setShowlogin] = useState(false);

  return (
    <>
    {showLogin ? <LoginPage setShowlogin={setShowlogin}/> : <></>}

      <div className="App">
        <ToastContainer position="top-right" autoClose={3000} style={{zIndex: "1001"}}/>
        <NavBar setShowlogin={setShowlogin}/>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/cart' element={<Cart />} />
          <Route path='/placeorder' element={<PlaceOrder />}/>
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
