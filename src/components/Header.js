import React from 'react'
import { Link } from 'react-router-dom';
import './style.css'
import nike from './imgs/nike.png'

function Header() {
    return (
      <nav className="navbar">
        <img src={nike}></img>
        <Link className="link1" to="/">Home</Link> {' '}
        <Link className="link2" to="products">Products</Link>
      </nav>
    );
  }
  
  export default Header;
