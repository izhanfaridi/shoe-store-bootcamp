import React from 'react'
import { Outlet } from 'react-router-dom';

function Products() {
    return (
      <div>
          Products page
          <hr></hr>
          <Outlet />
      </div>
    );
  }
  
  export default Products;
