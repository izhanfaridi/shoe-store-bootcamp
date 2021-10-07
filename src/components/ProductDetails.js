import React from 'react'
import { useParams } from 'react-router-dom';

function ProductDetails() {
    const shoes = {
      "air-jordan-1-mid":{
        title:"Air Jordan 1 Mid",
        img:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/61a4f2d8-0a65-4b34-8113-3163aea9198b/air-jordan-1-mid-shoes-Z4WQkS.png"
      },

      "air-jordan-xxxvi-first-light":{
        title:"Air Jordan XXXVI First Light",
        img:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c0442a34-0b88-46db-b12c-8865b028dc1f/air-jordan-xxxvi-first-light-basketball-shoes-39Znr7.png"
      },

      "nike-blazer-mid-77-vintage":{
        title:"Nike Blazer Mid '77 Vintage",
        img:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/389b709e-5102-4e55-aa5d-07099b500831/blazer-mid-77-vintage-mens-shoes-nw30B2.png"
      }
    }
    const { productId } = useParams();
    const product = shoes[productId];
    const {title, img} = product;
    return (
      <div>
          <h2>{title}</h2>
          <img src={img}></img>
      </div>
    );
  }
  
  export default ProductDetails;
