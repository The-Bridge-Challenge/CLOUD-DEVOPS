import React, { useState } from "react";
import Login from "./Login/Login";
import Home from "./Home/Home";
import Register1 from "./Register1/Register1";
import Register2 from "./Register2/Register2";
import Offer_View from "./Offer_View/Offer_View";
import Users from "./Users/Users"
import TablesContainer from "./TablesContainer/TablesContainer";
import { Route, Routes, Navigate } from "react-router-dom";
import { UserContext } from "../../context/userContext";

const Main = () => {
  const [logged, setLoggedIn] = useState(false);

  return (
    <main>
      <UserContext.Provider value={{ logged, setLoggedIn }}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/table" element={<TablesContainer />} />
          <Route path="/offer" element={<Offer_View />} />          
          <Route path="/signup" element={<Register1 />} />
          <Route path="/signup/user" element={<Register2 />} />
          <Route path="/users" element={<Users />} />

          <Route path="/*" element={<Navigate to={"/login"} />} />
        </Routes>
      </UserContext.Provider>
    </main>
  );
};

export default Main;
