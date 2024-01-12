import React from "react";
import Login from "./Login/Login";
import Home from "./Home/Home";
import { Route, Routes, Navigate } from "react-router-dom";




const Main = () => {
  return (<main>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/" element={<Navigate to={"/home"} />} />
      </Routes>
    </main>)
};

export default Main;
