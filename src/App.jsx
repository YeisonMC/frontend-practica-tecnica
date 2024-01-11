import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home.jsx";
import { Navbar } from "./components/Navbar.jsx";
import { CreateCustomerForm } from "./pages/CreateCustomerForm.jsx";

export const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/customerform" element={<CreateCustomerForm />}></Route>
      </Routes>
    </>
  );
};
