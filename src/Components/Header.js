import React from 'react'
import Navbar from './Navbar'




export default function Header() {
    return (
        <>
        
        <div style={{ backgroundImage: "url(Data/Images/Hero.jpg)", height :"100vh", backgroundSize: 'cover',
        width: "100%" }}>
        
  <Navbar/>
  <div className="hero-text">
  
    <h1 class = "animate__animated animate__bounceInLeft">Shri Shyam Spices Pvt. Ltd.</h1>
    
    <p>Leading Manufacturer and Supplier of best quality spices </p>
    <button>Contact us</button>
  </div>
 
</div>
</>
    )
}

