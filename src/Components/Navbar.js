import React from 'react'

export default function Navbar() {
    return (

      <nav>
      <input type="checkbox" id="check"/>
      <label htmlFor="check" className="checkbtn">
        <i className="fas fa-bars"></i>
      </label>
      <label className="logo">
      <img src = "Data/images/logo.jpg" width = "150px" height = "150px"/>
      </label>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/">About</a></li>
        <li><a href="/">Services</a></li>
        <li><a href="/">Products</a></li>
        <li><a href="/">Harvest Chart</a></li>
        <li><a href="/">Contact</a></li>
      </ul>
    </nav>
      
     
    
     
     
        
            
    );
}
