import React from "react";
import Nav from "./Nav/Nav";
import FormHome from "./FormHome/FormHome";
import "./Home.css";

const Home = () => {
  return (
    <>
      <header>
        <Nav />
      </header>
      <div>
        <FormHome />
      </div>
    </>
  );
};

export default Home;
