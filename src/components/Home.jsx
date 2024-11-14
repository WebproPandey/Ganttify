import crossicon from "../assets/crosshair.svg";
import mailchimp from "../assets/mailchimp.svg";
import medium from "../assets/medium.svg";
import microsoft from "../assets/microsoft.svg";
import upwork from "../assets/upwork.svg";
import eyeicon from "../assets/eyeicon.svg";
import frameicon from "../assets/frame.svg";
import vector1 from "../assets/Vector 1.svg";
import vector2 from "../assets/Vector 2.svg";
import timeicon from "../assets/timeicon.svg";
import menuicon from "../assets/menuicon.svg";
import calander from "../assets/candler.svg";
const Home = () => {
  return (
    <div className="Home md:h-[740px] h-[1000px] md:w-full md:rounded-none  flex flex-col md:flex-row  md:p-[104px] px-[30px] py-[30px] rounded-[24px] gap-[30px]">
    <div className="rightside h-1/2 md:h-full w-full  rotate-180 relative">
      <div className=" md:h-full w-full relative ">
        <div className="icons h-[104px] w-[104px] absolute top-[-20px] left-[40%] -translate-x-1/2">
          <img src={timeicon} alt="" />
        </div>
        <div className="icons h-[104px] w-[104px] absolute bottom-[10px] right-[-8%]">
          <img src={calander} alt="" />
        </div>
        <div className="icons h-[104px] w-[104px] absolute bottom-[50px] -translate-y-1/2 left-[-5%]">
          <img src={menuicon} alt="" />
        </div>
        <div className="bg-[#F6F8FA]  w-[120px] h-[180px] md:h-[217px] md:w-[175px] flex flex-col  justify-evenly items-center  absolute top-[120px] md:top-[100px] left-[10px] md:left-[20px] rounded-[12px] ">
          <div className="topreactanlge h-[80px] w-[100px] md:h-[86px] md:w-[143px] relative   bg-white rounded-[8px]">
            <div className="img h-[20px] w-[20px] absolute top-[8px] left-[8px]">
              <img src={eyeicon} className="h-full w-fuull" alt="" />
            </div>
            <div className="number h-[16px] w-[42px] absolute top-[30px] left-[8px] ">
              <h1 className="text-[16px] font-[500] tracking-tight">5,089</h1>
            </div>
            <div className="viewers flex justify-between items-center gap-8 md:gap-16 absolute top-[60px] left-[2px] md:left-[8px] ">
              <h1 className="text-[8px] font-[400]">viewers</h1>
              <div className="rounded-full px-[6px] text-center py-[4px] h-[16px] w-[40px] bg-[#F9F9FA] text-[8px] font-[400]">+12.3%</div>
            </div>
          </div>
          <div className="bottomreactanlge   h-[80px] w-[100px] md:h-[86px] md:w-[143px]   bg-white rounded-[8px] relative">
          <div className="img h-[20px] w-[20px] absolute top-[8px] left-[8px]">
              <img src={frameicon} className="h-full w-fuull" alt="" />
            </div>
            <div className="number h-[16px] w-[42px] absolute top-[30px] left-[8px] ">
              <h1 className="text-[16px] font-[500] tracking-tight">80.90%</h1>
            </div>
            <div className="viewers flex justify-between items-center gap-4 md:gap-16 absolute top-[60px] left-[2px] md:left-[8px] ">
              <h1 className="text-[8px] font-[400]">Conversions</h1>
              <div className="rounded-full px-[6px] text-center py-[4px] h-[16px] w-[40px] bg-[#F9F9FA] text-[8px] font-[400]">+101%</div>
            </div>
          </div>
        
        </div>
        <div className="bg-[#ffffff] w-[266px] h-[274px] absolute top-[43px] left-[240px] rounded-[12px]">
           <div className="heading absolute h-[12px] w-[89px]  top-[24px] left-[20px] text-[10px] tracking-tighter font-[400] text-[#0d0d12]">Speending per  month</div>
           <div className="heading absolute h-[20px]  w-[63px] top-[48px] left-[20px] text-[20px] tracking-tighter font-[500] text-[#0d0d12]">$4,567</div>
           <div className="graph h-[150px] w-[226px] absolute top-[93px] left-[20px]    flex flex-col justify-between ">
           <div  className="relative w-[226px] h-[67px] py-2 bg-gradient-to-b from-[rgba(51,207,255,0.15)] to-[rgba(51,207,255,0)]">
             <img src={vector1} alt="" className="w-full h-[50px] object-cover   absolute  top-[15px] left-0   " srcset="" />
              <div className="h-[22px] w-[80px] flex justify-between items-center absolute top-[25%] left-[45%]  -translate-y-1/2 -translate-x-1/2 rounded-full py-[6px] px-[8px] bg-[#0d0d12]"> <h1 className="text-[8px] font-[400] text-[#666D80]">This Month</h1>  <h1 className="text-[8px] font-[400] text-[#ffffff]">7692</h1></div>
              <div className="circle h-[8px] w-[8px] absolute top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2  rounded-full border-[2px] border-[#33cfff]"></div>        
           </div>     
           <div  className="w-[226px] relative h-[67px] py-2 bg-gradient-to-b from-[rgba(144,123,255,0)] to-[rgba(144,123,255,0.2)]"></div>
             <img src={vector2} alt=""  className="w-full  h-[50px] object-cover absolute bottom-[15px]   " srcset="" />
             <div className="h-[22px] w-[80px] flex justify-between items-center absolute bottom-[20%] left-[75%]  -translate-y-1/2 -translate-x-1/2 rounded-full py-[6px] px-[8px] bg-[#0d0d12]"> <h1 className="text-[8px] font-[400] text-[#666D80]">Last Month</h1>  <h1 className="text-[8px] font-[400] text-[#ffffff]">7692</h1></div>
             <div className="circle h-[8px] w-[8px] absolute bottom-[15%] left-[80%] -translate-y-1/2 -translate-x-1/2  rounded-full border-[2px] border-[#5b49e9]"></div>     
           </div>

        </div>
        <div className="w-[250px] h-[100px] md:w-[350px] w:h-[140px] bg-white absolute bottom-[-450px] md:bottom-[30px] left-1/2 -translate-x-1/2 flex flex-col gap-2 justify-evenly items-center rounded-xl p-4 md:p-6 ">
           <div className="smallCircle  flex  gap-1 items-center absolute  top-2 left-2  h-[12px] w-[100px]">
             <div className="redcircle h-[8px] w-[8px] md:h-[12px] md:w-[12px]  bg-red-500 rounded-full"></div>
             <div className="yellowcircle h-[8px] w-[8px] md:h-[12px] md:w-[12px]  bg-yellow-500 rounded-full"></div>
             <div className="greencircle h-[8px]  w-[8px] md:h-[12px] md:w-[12px]  bg-green-500 rounded-full"></div>
           </div>
          <div className="top h-[50px] w-full md:h-[44px] md:w-[326px]  px-2 flex justify-between items-center  rounded-[8px] bg-[#f9f9fa]">
            <h1 className="text-[10px] md:text-[12px] font-[600] text-[#061a2a]">🚀 User newly onboarded</h1>
            <h1 className="text-[10px] md:text-[12px] text-[#828c95] font-[400]">2 days ago</h1>
          </div>
          <div className="bottom h-[50px] w-full md:h-[44px] md:w-[326px]  px-2 flex justify-between items-center  rounded-[8px] bg-[#f9f9fa]">
            <h1 className="text-[10px] md:text-[12px]  font-[400] text-[#828c95]">💰 Made and purchase</h1>
            <h1 className="text-[10px] md:text-[12px]  text-[#828c95] font-[400]">5 days ago</h1>
          </div>              
        </div>
      </div>
    </div>
    <div className="leftside h-1/2  md:h-[532px] w-full   rotate-180 flex flex-col gap-[40px] ">
      <div className="content h-[350px] w-full flex flex-col gap-[16px]  ">
        <div className="contentwrapper  md:h-full w-full">
          <div className="inline-flex gap-2 items-center bg-white/10  rounded-full h-[32px] w-[156px] pt-[8px] pl-[8px] pb-[8px] pr-[12px]">
            <img src={crossicon} alt="" className="md:h-[20px] md:w-[20px]" />
            <span className="text-[#ffffff] font-[500] text-[11px] md:text-[12px] ">
              Goals & Reporting
            </span>
          </div>
          <div className="heading h-[160px] ">
            <h1 className="text-[50px] md:text-[60px] text-[#ffffff] font-[600] tracking-tighter leading-[50px] md:leading-[80px]">
              Goals and Reporting In One Place
            </h1>
          </div>
          <div className="distription  md:h-[54px] w-full">
            <p className="text-gray-400 text-[14px] md:text-[18px]  w-full md:max-w-[80%]">
              Connect every team's work to company objectives, then track
              progress with real-time data
            </p>
          </div>
        </div>
        <div className="action  h-[52px] flex flex-col gap-[10px] md:flex-row  md:gap-[16px]">
          <button className="px-6 py-3 bg-white text-black rounded-[16px]  transition-colors">
            Get Started
          </button>
          <button className="px-6 py-3 border  border-white/20 text-[#ffffff] rounded-[16px] bg-[over:bg-white/10]  transition-colors">
            How it Works
          </button>
        </div>
      </div>
      <div className="Social-proof  md:h-[82px] ">
        <p className="text-[10px] md:text-[14px] text-[#ffffff]  mb-4">
          Trusted by 2 million+ teams
        </p>
        <div className="flex gap-4 md:gap-8 opacity-60 ">
          {[mailchimp, medium, microsoft, upwork].map((brand, index) => (
            <img
              key={index}
              src={brand}
              alt={`Brand ${index}`}
              className="h-4 w-[50px] md:h-6 md:w-[102px]"
            />
          ))}
        </div>
      </div>
    </div>
   </div>  
  )
}

export default Home