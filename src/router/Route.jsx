import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Navbar from "../components/Navbar";
import Option from "../components/Option";

const route = () => {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Option />} />
      </Routes>
    </>
  );
};

export default route;
