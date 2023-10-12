import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./component/Layout/Layout";
import "./App.css";
import Home from "./component/Home/Home";
import Test from "./Tester/Test";

function App() {
  return (
    <Routes>
      <Route path="/test" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="/" element={<Test />} />
    </Routes>
  );
}

export default App;
