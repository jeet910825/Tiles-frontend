import React, { useEffect, useState } from "react";
import Product from "../../Product/Product";
import Header from "../header/Header";
import { useNavigate } from "react-router-dom";
import { isAction } from "@reduxjs/toolkit";
function AdminOperation() {
  const navigate = useNavigate()
  useEffect(()=>{
    if(localStorage.getItem("isAdmin") ===null || localStorage.getItem("token") ===null){
      navigate('login')
    }
  },[])
  const [search,setSearch]= useState("")
  const handleSearch = (value) =>{
    setSearch(value)
  }

  
  return (
    <>
      <Header handleSearch = {handleSearch}/>
      <Product search={search}/>
    </>
  );
}

export default AdminOperation;
