import React from "react";


import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Brand from "./components/Brand";
import Feature from "./components/Feature";
import Pricing from "./components/Pricing";


const App = () => {
  return (
    <>
      <div className="h-screen w-full">
          <Navbar/>
          <Home/>
          <Brand/>
          <Feature/>
          <Pricing/>
      </div>
    </>
  );
};

export default App;
