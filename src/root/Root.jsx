import React from "react";
import Home from "../pages/Home/Home";
import Navbar from "../components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navbar />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Root;
