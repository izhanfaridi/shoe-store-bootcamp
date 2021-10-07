import React from 'react'
import './style.css'
import { Link } from 'react-router-dom';


function Home() {
    return (
      <div>
        <h1 className="title">Welcome To The Shoe Store!</h1>
        <button className="browse"><Link className="browseLink" to="products">Browse</Link></button>
      </div>
    );
  }
  
  export default Home;
