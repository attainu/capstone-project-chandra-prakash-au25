import './style.css';
import React from 'react';
import {Link } from "react-router-dom";
const navbar =()=>{
  return (
    <div>
          <header>
        <nav>
            <div className="logo">
					    <Link  className="tech" to="/home">TechiHelper</Link>
				    </div>
            <label for="drop" className="toggle">Menu</label>
            <input type="checkbox" id="drop" />
            <ul className="menu">
					    <li><Link to="/" className="active">Home</Link></li>
					    <li><Link to="about">About</Link></li>
					    <li><Link to="services">Services</Link></li>
					    <li><Link to="login">Login</Link></li>
					    <li><Link to="register">Register</Link></li>
					    <li><Link to="developer">Developer</Link></li>
					    <li><Link to="admin">Admin</Link></li>

            </ul>
          
        </nav>
    </header>


    </div>
  );
}
export default navbar;