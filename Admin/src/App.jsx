import React from "react";
import NavBar from "./components/NavBar/NavBar";
import SideBar from "./components/Sidebar/SideBar";
import { Route, Routes } from "react-router-dom";
import Add from "./pages/Add/Add";
import List from "./pages/List/List";
import Orders from "./pages/Orders/Orders";
import { ToastContainer, toast } from 'react-toastify';


const App = () => {

  const url = "http://localhost:5000"
  return (
    <div>
      <ToastContainer/>
      <NavBar />
      <hr />
      <div className="app-content">
        <SideBar />
        <Routes>
          <Route path="/add" element={<Add url={url}/>} />
          <Route path="/list" element={<List url={url}/>} />
          <Route path="/orders" element={<Orders url={url}/>} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
