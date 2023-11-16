import React from "react";
import "./Test.css";
import { Card as CD } from "react-bootstrap";
import ProductCard from "../component/Product/ProductCard";


function Test() {
  const products =[{name:"ram",type:"2*2",size:"dont",image:"https://my.alfred.edu/zoom/_images/foster-lake.jpg"},{name:"ram",type:"2*2",size:"dont",image:"https://getwallpapers.com/wallpaper/full/e/d/1/98384.jpg"}]
  return (
    <div className="product-flex">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
}

export default Test;
