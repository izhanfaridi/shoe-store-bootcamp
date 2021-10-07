import React from 'react'
import './style.css'
import { Link } from 'react-router-dom';
import logo from './imgs/Nike-icon.png'


function Home() {
    return (
      <div>
        <h1 className="title">Welcome To The Shoe Store!</h1>
        <Link className="browseLink" to="products"><button className="browse"><img className="buttonIcon" src={logo}></img>Browse</button></Link>
      </div>
    );
  }
  
  export default Home;
