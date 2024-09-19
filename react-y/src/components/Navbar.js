import React from 'react'
import "./style.css"
import cartIcon from "../images/cart.png"
import profileIcon from "../images/profile.png"
import { Link } from 'react-router-dom'

function Navbar(){
    return(
        <nav>
        <div className="logo">SHOP.CO</div>
        <ul className="menu">
          <li><a href="#">Shop</a></li>
          <li><a href="#">On Sale</a></li>
          <li><a href="#">New Arrivals</a></li>
          <li><a href="#">Brands</a></li>
        </ul>
        <div className="search-cart">
          <input type="text" placeholder="Search for products..." />
          <img src={cartIcon} alt="Cart Icon" style={{ width: "20px", height: "20px" }} />
          <img src={profileIcon} alt="Profile Icon"style={{ width: "20px", height: "20px" }} />
        </div>
      </nav>
      
    )
}
export default Navbar