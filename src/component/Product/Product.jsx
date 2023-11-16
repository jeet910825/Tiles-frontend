import React, { useEffect } from "react";
import "./Product.css";
import { useState } from "react";
import ProductCard from "./ProductCard";
import { useGetFilterProductQuery } from "../../feature.js/app/productApi";
import { Pagination } from "@mui/material";
import Loading from "../Loading/Loading";




function Product({search}) {
  let products = [];
  let totalPages
  
  const filterOptions = ["Wall", "Floor", "Kitchen", "Bathroom"];
  
  const [selectedOptions,setSelectedOptions] =useState({
    type:"",
    category:"",
    page:1,
    search:""
  })
  useEffect(()=>{
    if(search!=selectedOptions.search)
    setSelectedOptions((pre)=>{return {...pre,search:search}})
  },[selectedOptions.type,selectedOptions.page,selectedOptions.search,search])


  const handleCheckboxChange = (value) =>{

    if(selectedOptions.type===value) setSelectedOptions(pre => {return {...pre,type:""}})
    else setSelectedOptions(pre=>{return {...pre,type:value}})
  }
  const handlePages = (event,page)=>{
    setSelectedOptions((pre)=>{return {...pre,page:page}})
  }

  const { data, isSuccess, isLoading, isError } = useGetFilterProductQuery(selectedOptions);

  if (isLoading) {
    return <Loading />;
  }
  if (isSuccess) {
    products = data.products;
    totalPages = data.totalPages;
  }

  return (
    <div className="product-container">
      <div className="filter">
        <form>
          {filterOptions.map((value, index) => (
            <div key={index}>
              <input
                type="checkbox"
                id={`option${index}`}
                name="type"
                value={value}
                checked={selectedOptions.type===value}
                onChange={() => handleCheckboxChange(value)}
              />
              <label htmlFor={`option${index}`}>{value}</label>
            </div>
          ))}
        </form>
      </div>
      <div className="product-and-pages">
        <div className="product-card-container">
          {products.map((product) => {
            return (
              <ProductCard
                name={product.name}
                key={product._id}
                id={product._id}
                size={product.size}
                image={product.image}
                type={product.type}
                category ={product.category}
                brand={product.brand}
              />
            );
          })}
        </div>
        <div className="pages">
        {totalPages ? <Pagination count={totalPages} page={selectedOptions.page} variant="outlined" shape="rounded" onChange={handlePages} />: ""}
          
        </div>
      </div>
    </div>
  );
}

export default Product;
