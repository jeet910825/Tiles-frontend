import React, { useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDeleteProductMutation } from "../../feature.js/app/productApi";
import ProductDetail from "./ProductDetail";

function ProductCard({ id, name, size, type, image ,category,brand }) {
  const [deleteProduct,{data:response,isSuccess:productDeleted} ] = useDeleteProductMutation()
  const [click ,setClick] = useState(false)

  const handleDeleteProduct = async() => {
    try{
    await deleteProduct({id:id}).unwrap()
    } catch (err){
      console.log(err)
    }
  }
  const handleViewDetails =()=>{
    setClick(!click)
  }
  return (
    <>
      { click ?
        <ProductDetail id={id} name={name} size={size} type={type} image={image} category={category} brand={brand} handleViewDetails={handleViewDetails}  /> : ""
      }
      
      <div className="product-card">
        <div className="product-image" onClick={handleViewDetails}>
          <img
            src={"https://tiles-backend-production.up.railway.app/product" + image[0]}
            alt="name"
          ></img>
        </div>
        <div className="product-details">
          <p className="product-name" onClick={handleViewDetails}>Name:{name}</p>
          <p onClick={handleViewDetails}>Type:{type + " " +category}</p>
          <p onClick={handleViewDetails}>Brand:{brand}</p>
          <p onClick={handleViewDetails}>Size:{size}</p>
          {localStorage.getItem("isAdmin") ? (
          <div className="deleteButton" onClick={handleDeleteProduct}><Button variant="outlined" size="small" color="error" startIcon={<DeleteIcon />}>
            Delete
          </Button>
          </div>
        ) : (
          ""
        )}
        </div>
      
      </div>
    </>
  );
}

export default ProductCard;
