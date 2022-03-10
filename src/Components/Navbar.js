import React from 'react'
import { Link } from "react-router-dom";

export default function Navbar() {
    return (

      <nav className = "fixed-top">
      <input type="checkbox" id="check"/>
      <label htmlFor="check" className="checkbtn">
        <i className="fas fa-bars"></i>
      </label>
      <label className="logo">
      <img src = "Data/images/logo.jpg" width = "150px" height = "150px"/>
      </label>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/">Services</Link></li>
        <li><Link to="/">Products</Link></li>
        <li><Link to="/">Harvest Chart</Link></li>
        <li><Link to="/">Contact</Link></li>
      </ul>
    </nav>
      
     
    
     
     
        
            
    );
}
