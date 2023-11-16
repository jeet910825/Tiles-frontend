import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./component/Layout/Layout";
import "./App.css";
import Home from "./component/Home/Home";
import Product from "./component/Product/Product";
import AdminOperation   from "./component/admin/product/AdminOperation";
import Login from "./component/admin/login/Login";
import CreateProduct from "./component/admin/product/CreateProduct/CreateProduct";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/product" element={<Product search={""}/>} /> 
      </Route>
      <Route path="/admin">
        <Route path="login" element={<Login />} />
        <Route index element={<AdminOperation />} />
        <Route path="create" element={<CreateProduct />} />
      </Route>
    </Routes>
  );
}

export default App;
