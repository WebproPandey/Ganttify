import React from 'react';
import logo from "../assets/fotterLogo.svg";
import socailicon1 from '../assets/socailbutton1.png'
import socailicon2 from '../assets/socailbutton2.png'
import socailicon3 from '../assets/socailbutton3.png'
import cirtylogo from '../assets/unitedstates.png'
import chevrondown from '../assets/chevrondown.png'


const Fotter = () => {
  return (
    <footer className="bg-[#0D0D12] text-gray-400 mt-5  rounded-[24px] md:rounded-none ">
      <div className=" h-[1000px]  md:h-[755px] px-[20px] py-[16px] md:pt-[80px] md:px-[104px] md:pb-[56px] flex flex-col justify-start md:justify-center items-center gap-[56px] ">
        <div className="logowrapwr h-[92px] md:h-[44px]  w-full  flex flex-col md:flex-row justify-between md:items-center  gap-4">
         <div className="logo h-[28px] w-[103px] flex justify-center  items-center ">
        <div>
          <img src={logo} alt="" />
        </div>
       
         </div>
         <div className="socailicon h-full w-[136px] flex  gap-1 items-end">
             <button className=' h-[40px] w-[40px] md:h-[44px] md:w-[44px] rounded-[10px] overflow-hidden '>
                <img src={socailicon1}  className="h-full w-full  object-cover"  alt="" />
             </button>
             <button className=' h-[40px] w-[40px] md:h-[44px] md:w-[44px] rounded-[10px] overflow-hidden '>
                <img src={socailicon2}  className="h-full w-full  object-cover"  alt="" />
             </button>
             <button className=' h-[40px] w-[40px] md:h-[44px] md:w-[44px] rounded-[10px] overflow-hidden '>
                <img src={socailicon3}  className="h-full w-full  object-cover"  alt="" />
             </button>
         </div>
        </div>
        <div className=" w-full grid grid-cols-2 md:grid-cols-5 md:w-auto gap-6">
          <div>
            <h3 className="text-white font-semibold mb-4">Ganttify</h3>
            <ul className=" text-[14px] md:text-[18px] ">
              <li>Home</li>
              <li>Product</li>
              <li>Pricing</li>
              <li>Customer Success</li>
              <li>Templates</li>
              <li>Trust & Security</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Solutions</h3>
            <ul className=" text-[14px] md:text-[18px] ">
              <li>Project Management</li>
              <li>Goal Management</li>
              <li>Agile Management</li>
              <li>Task Management</li>
              <li>Productivity</li>
              <li>Work Management</li>
              <li>Project Planning</li>
              <li>To Do Lists</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">About Us</h3>
            <ul className="text-[14px] md:text-[18px]">
              <li>Company</li>
              <li>Leadership</li>
              <li>Customers</li>
              <li>Careers</li>
              <li>Changelog</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="text-[14px] md:text-[18px]">
              <li>Help Center</li>
              <li>FAQ</li>
              <li>Developers & API</li>
              <li>Community</li>
              <li>Events</li>
              <li>Status</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Helpful Links</h3>
            <ul className="text-[14px] md:text-[18px]">
              <li>Legal Center</li>
              <li>Privacy Policy</li>
              <li>Partnerships</li>
            </ul>
          </div>
        </div>
        <div className='w-full h-[1px] bg-gray-400'></div>
        <div className='flex flex-col   w-full  md:flex-row  justify-between items-center '>
          <div className="flex justify-between  md:justify-center items-center w-full md:w-auto space-x-2 bg-[#1A1B25] py-[12px] px-[10px]  rounded-[24px]  md:px-[8px] md:py-[10px] md:rounded-[10px]">
            <div className='flex justify-center  items-center gap-2'>
            <img src={cirtylogo} className='h-[20px] w-[20px]' alt="" />
            <span>United States</span>
            </div>
             <span className='h-[16px] w-[16px] rounded-full border '>
                <img src={chevrondown} className='h-full w-full object-cover' alt="" />
             </span>
          </div>

         
        <div className="text-center  justify-center  text-gray-500 text-sm mt-4">
          © Ganttify 2024, All Rights Reserved
        </div>
        </div>
      </div>
    </footer>




  )
}

export default Fotter