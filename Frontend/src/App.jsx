import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./components/Footer/Footer";
import LoginPopUp from "./components/LoginPopUp/LoginPopUp";
import Verify from "./pages/Verify/Verify";
import MyOrders from "./pages/myOrders/MyOrders";
import AboutUs from "./pages/About us/AboutUs";
import ContactUs from "./pages/Contact Us/ContactUs";

const App = () => {


  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
    {showLogin ? <LoginPopUp setShowLogin={setShowLogin}/>:<></>}
    <div className="app">
      <Navbar setShowLogin={setShowLogin}/>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/PlaceOrder" element={<PlaceOrder />} />
        <Route path="/Verify" element={<Verify/>}/>
        <Route path="/MyOrders" element={<MyOrders/>}/>
        <Route path="/AboutUs" element={<AboutUs/>}/>
        <Route path="/ContactUs" element={<ContactUs/>}/>
      </Routes>
      <Footer />
    </div>
    </>
  );
};

export default App;
