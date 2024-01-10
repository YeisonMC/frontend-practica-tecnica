import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home.jsx";
import { Navbar } from "./components/Navbar.jsx";
import { CustomerForm } from "./components/CustomerForm.jsx";

import { Tercero } from "./components/Tercero.jsx";

export const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/customerform"
          element={<CustomerForm></CustomerForm>}
        ></Route>

        {/* <Route path="/tercero" element={<Tercero />}></Route> */}
        {/* <Route path="/segundo" element={<Segundo />}></Route> */}
      </Routes>
    </>
  );
};
