import React from 'react'
import logo from "../assets/Ganttifylogo.svg";
import logotext from "../assets/Ganttify.svg";
import menu from "../assets/menu1.svg";

const Navbar = () => {
  return (
    <nav className="h-[64px] w-[324px] px-[10px] md:h-[10vh] md:w-full  bg-white flex justify-between  items-center md:pt-[20px] md:pr-[32px] md:pb-[20px] md:pl-[32px]">
    <div className="leftside md:h-[38px] md:w-[564px] flex justify-center items-center gap-14  ">
      <div className="logo h-[28px] w-[103px] flex justify-center  items-center">
        <div>
          {" "}
          <img src={logo} alt="" />
        </div>
        <div>
          <img src={logotext} alt="" />
        </div>
      </div>
      <div className="hidden menu h-[28px] w-[413px] gap-6 md:flex">
        {["Product", "Solutions", "Resources", "Company", "Pricing"].map(
          (item) => (
            <a key={item} href="#" className="text-[#0D0D12] font-[500]">
              {item}
            </a>
          )
        )}
      </div>
    </div>
    <div className="hidden  rightside h-[40px] w-[200px] md:flex justify-between ">
      <button className="px-4 py-2 bg-white transition-colors text-[14px] font-[600] leading-[-2] text-[#0D0D12] border rounded-md">
        Sign In
      </button>
      <button className="px-4 py-2 bg-[#0D0D12]  text-[14px] font-[600] text-[#FFFFFF]  leading-[-2] rounded-md ">
        Get Started
      </button>
    </div>
    <div className="menubar h-[24px] w-[24px]">
      <img src={menu} className='h-full w-full' alt="" />
    </div>
  </nav>
  )
}

export default Navbar