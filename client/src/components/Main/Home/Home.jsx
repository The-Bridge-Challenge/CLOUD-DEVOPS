import React from "react";
import FormHome from "./FormHome/FormHome";
import "./Home.css";
import Nav from "../Nav/Nav";
import { Route, Routes, Navigate } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Nav />

      <FormHome />
    </>
  );
};

export default Home;
