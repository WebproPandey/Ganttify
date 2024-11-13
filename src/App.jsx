import React from "react";


import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Brand from "./components/Brand";


const App = () => {
  return (
    <>
      <div className="h-screen w-full">
         <Navbar/>
          <Home/>
          <Brand/>
      </div>
    </>
  );
};

export default App;
