import React, { useState } from "react";
import "./ProductDetails.css";
import ClearIcon from "@mui/icons-material/Clear";

function ProductDetail({ id, name, size, type, image, category, brand ,handleViewDetails }) {
  const [currentImage, setCurrentImage] = useState(
    `http://localhost:3005/product${image[0]}`
  );
  const handleimageclick = (val) => {
    setCurrentImage(val.target.src);
    console.log(currentImage);
  };
  return (
    <div className="product-card-details">
      <div className="product-card-with-cancel">
        <div className="product-cancel-button" onClick={()=>{handleViewDetails()}}>
          <ClearIcon color="error" />
        </div>
        <div className="image-container">
          <div className="main-image">
            <img src={currentImage}></img>
          </div>
          <div className="small-image">
            {image.map((item, index) => {
              return (
                <img
                  src={`http://localhost:3005/product${item}`}
                  onClick={handleimageclick}
                  key={index}
                  alt="image"
                ></img>
              );
            })}
          </div>
        </div>
        <div className=" product-details text-size">
          <p className="product-name">Name:{name}</p>
          <p>Brand:{brand}</p>
          <p>Type:{type + " " + category}</p>
          <p>Size:{size}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
