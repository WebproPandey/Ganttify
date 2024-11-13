import React from 'react'
import logo from "../assets/Ganttifylogo.svg";
import logotext from "../assets/Ganttify.svg";

const Navbar = () => {
  return (
    <nav className="h-[10vh] w-full bg-white flex justify-between  items-center pt-[20px] pr-[32px] pb-[20px] pl-[32px]">
    <div className="leftside h-[38px] w-[564px] flex justify-center items-center gap-14 ">
      <div className="logo h-[28px] w-[103px] flex justify-center  items-center">
        <div>
          {" "}
          <img src={logo} alt="" />
        </div>
        <div>
          <img src={logotext} alt="" />
        </div>
      </div>
      <div className="menu h-[28px] w-[413px] gap-6 flex">
        {["Product", "Solutions", "Resources", "Company", "Pricing"].map(
          (item) => (
            <a key={item} href="#" className="text-[#0D0D12] font-[500]">
              {item}
            </a>
          )
        )}
      </div>
    </div>
    <div className="rightside h-[40px] w-[200px] flex justify-between ">
      <button className="px-4 py-2 bg-white transition-colors text-[14px] font-[600] leading-[-2] text-[#0D0D12] border rounded-md">
        Sign In
      </button>
      <button className="px-4 py-2 bg-[#0D0D12]  text-[14px] font-[600] text-[#FFFFFF]  leading-[-2] rounded-md ">
        Get Started
      </button>
    </div>
  </nav>
  )
}

export default Navbar