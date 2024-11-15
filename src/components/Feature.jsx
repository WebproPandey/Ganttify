import badge from "../assets/Badge.svg";
import Illustration1 from "../assets/Illustration1.png";
import Illustration2 from "../assets/Illustration2.png";
import Illustration3 from "../assets/Illustration3.png";
import Illustration4 from "../assets/Illustration4.png";
const Feature = () => {
  return (
    <div className="min-h-screen  w-full  flex flex-col  py-[40px] px-[14px] md:p-[104px] gap-[70px] justify-center items-center  ">
      <div className="headingwraper  h-[321px] md:h-[165px] w-full py-[8px] px-[10px] flex flex-col gap-[6px]">
      <div className="logo">
        <div className="w-[93px] h-[28px] ">
          <img src={badge} className="h-full w-full object-cover" alt="" srcset="" />
        </div>
      </div>
      <div className="heading h-[180px] md:h-[70px]">
        <h1 className="text-[48px] md:text-[56px] font-[600] leading-[60px] md;leading-[70px] tracking-tighter">
          Everything Your Team Looking For
        </h1>
      </div>
      <div className="description ">
        <p className="md:text-[18px] font-[400] leading-relaxed tracking-tight">Ganttify’s exceptional flexibility can handle any type of work. And we never stop innovating</p>
      </div>
      </div>
      <div className="container  h-[1515px]  md:h-[962px] w-full flex  flex-col  justify-start md:justify-center  items-center  gap-[8px] ">
         <div className="topcartwraper  h-[750px] md:h-[477px] w-full flex  md:gap-[8px]  justify-start  md:justify-center flex-col md:flex-row items-center">
            <div className="leftcart   h-[375px] w-full md:h-full md:w-1/2  md:p-[28px] flex flex-col gap-[24px] md:gap-[32px]">
              <div className="image rounded-[16px] overflow-hidden ">
                <img src={Illustration1} className="h-[210px] md:h-[300px] w-full " alt="" />
              </div>
              <div className="Aboutcart h-[120px]  md:h-[97px] flex flex-col gap-[12px]">
                <div className="heading h-[31px] w-full ">
                  <h2 className="heading text-[24px] font-[600] text-[#0D0D12] leading-[31px] tracking-tight">Project Management</h2> 
                </div>
                <p className="text-[16px] font-[400] leading-[20px] text-[#666D80] tracking-tight">Manage your projects from start to finish. With all of your projects in Ganttify, you’ll always know who’s doing what, by when</p>
              </div>
            </div>
            <div className="rightcart  h-[380px]   md:h-full md:w-1/2 md:p-[28px] flex flex-col  gap-[24px] md:gap-[32px]">
              <div className="image rounded-[16px] overflow-hidden">
                <img src={Illustration2} className="h-[210px] md:h-[300px] w-full " alt="" />
              </div>
              <div className="Aboutcart h-[140px]  md:h-[97px]  flex flex-col justufy-between  gap-[12px] ">
                <div className="heading h-[31px] w-full  ">
                  <h2 className="heading text-[24px] font-[600] text-[#0D0D12] leading-[31px] tracking-[-1px] md:tracking-tight">Workflows and Automations</h2> 
                </div>
                <p className="text-[16px] font-[400] leading-[20px]  tracking-tight">Create more efficient processes so you can seamlessly manage projects across departments and get more done in less time</p>
              </div>
            </div>
         </div>
         <div className="bottomcartwraper  h-[750px] md:h-[477px] w-full flex  md:gap-[8px]  justify-start  md:justify-center flex-col md:flex-row items-center">
            <div className="leftcart  h-[375px] w-full md:h-full md:w-1/2  md:p-[28px] flex flex-col gap-[24px] md:gap-[32px]">
              <div className="image rounded-[16px] overflow-hidden ">
                <img src={Illustration3} className="h-[210px] md:h-[300px] w-full  " alt="" />
              </div>
              <div className="Aboutcart h-[120px]  md:h-[97px] flex flex-col gap-[12px]">
                <div className="heading h-[31px] w-full ">
                  <h2 className="heading text-[24px] font-[600] text-[#0D0D12] leading-[31px] tracking-tight">Goals and Reporting</h2> 
                </div>
                <p className="text-[16px] font-[400] leading-[20px] text-[#666D80] tracking-tight">See how each project and portfolio ladders up to company objectives and keep everyone focused on the work that matters</p>
              </div>
            </div>
            <div className="rightcart  h-[375px] md:h-full md:w-1/2 md:p-[28px] flex flex-col  gap-[24px] md:gap-[32px]">
              <div className="image rounded-[16px] overflow-hidden ">
                <img src={Illustration4} className="h-[210px] md:h-[300px] w-full " alt="" />
              </div>
              <div className="Aboutcart h-[120px]  md:h-[97px] flex flex-col gap-[12px]">
                <div className="heading h-[31px] w-full ">
                  <h2 className="heading text-[24px] font-[600] text-[#0D0D12] leading-[31px] tracking-tight">Resource Management</h2> 
                </div>
                <p className="text-[16px] font-[400] leading-[20px] text-[#666D80] tracking-tight">Get the visibility you need to plan accurate timelines, adjust workloads, and stay on track to achieve your objectives</p>
              </div>
            </div>
         </div>
      </div>
    </div>
  );
};

export default Feature;
