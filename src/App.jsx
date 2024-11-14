import React from "react";


import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Brand from "./components/Brand";
import Feature from "./components/Feature";
import Pricing from "./components/Pricing";
import Customer from "./components/Customer";
import Contact from "./components/Contact";
import Fotter from "./components/Fotter";


const App = () => {
  return (
    <>
      <div className="h-screen w-full">
          <Navbar/>
          <Home/>
          <Brand/>
          <Feature/>
          <Pricing/>
          <Customer/>
          <Contact/>
          <Fotter/>
      </div>
    </>
  );
};

export default App;
