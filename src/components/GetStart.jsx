import React from "react";

const GetStart = () => {
  return (
    <div className=" flex items-center justify-center ">
      <div className=" h-[468px]  text-white flex flex-col  justify-evenly items-center">
        <h1 className="text-[48px]  leading-[50px] text-center tracking-[-3px] font-[600] ">
          A Better Way to Work Today, Together
        </h1>
        <p className="text-[18px] text-center tracking-tighter">
          Ganttify enables you to achieve clarity and significant results on a
          large scale by linking tasks and workflows to the overarching
          objectives of the company
        </p>
        <div className="flex flex-col space-y-4 w-full">
          <button className="py-3 px-6 bg-white text-teal-900 rounded-[28px] font-semibold shadow-md hover:bg-gray-200 transition duration-300">
            Get Started
          </button>
          <button
            className="py-3 px-6  border-[1px] border-[#FFFFFF14]  text-white rounded-[28px] font-semibold transition duration-300"
            style={{
              boxShadow: "0px 1px 2px 0px #0D0D120F",
              backdropFilter: "blur(20px)",
            }}
          >
            How it Works
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetStart;
