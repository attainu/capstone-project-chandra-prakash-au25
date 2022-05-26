import Navbar from './Components/navbar';
import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Home from "./Components/home";
import About from "./Components/about";
import Services from "./Components/services";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Userneed from "./Components/Requirement";
import Admin from "./Components/Admin/Admin";
import Bids from "./Components/Admin/Bids";
import Delete from "./Components/Admin/Delete";
import Orders from "./Components/Admin/Orders";
import Bid from "./Components/Developer/Bids";
import Developer from "./Components/Developer/developer";

const App=()=>{
  
  return(
  <div> 
    <Navbar></Navbar>
    <Routes>
      <Route  path="/" element={<Home></Home>}></Route>
      <Route  path="about" element={<About></About>}></Route>
      <Route  path="login" element={<Login></Login>}></Route>
      <Route  path="services" element={<Services></Services>}></Route>
      <Route  path="register" element={<Register></Register>}></Route>
      <Route  path="userneed" element={<Userneed></Userneed>}></Route>//
      <Route  path="/admin" element={<Admin></Admin>}></Route>
      <Route  path="/admin/orders" element={<Orders></Orders>}></Route>
      <Route  path="/admin/delete" element={<Delete></Delete>}></Route>
      <Route  path="/admin/bids" element={<Bids></Bids>}></Route>
      <Route  path="/developer" element={<Developer></Developer>}></Route>
      <Route  path="/developer/bid" element={<Bid></Bid>}></Route>
      <Route  path="/developer/orders" element={<Orders></Orders>}></Route>


    </Routes>
  
  
  
  
  
  </div>)
   
}
export default App;