import badge from "../assets/customerbadge.svg";
import Avatars1 from "../assets/Avatars1.png";
import Avatars2 from "../assets/Avatars2.png";
import Avatars3 from "../assets/Avatars3.png";
import Avatars4 from "../assets/Avatars4.png";
import Avatars5 from "../assets/Avatars5.png";
import Avatars6 from "../assets/Avatars6.png";

const Customer = () => {
  return (
    <div className="min-h-screen w-full flex flex-col gap-[80px] md:p-[104px] px-[16px]   justify-start  md:justify-center items-center">
      <div className="headingwraper h-[300px]   md:h-[227px] w-full  flex flex-col gap-[24px] justify-center items-center ">
        <div className="logo">
          <div className="w-[107px] h-[28px] ">
            <img
              src={badge}
              className="h-full w-full object-cover"
              alt=""
              srcset=""
            />
          </div>
        </div>
        <div className="headingwraper  h-[200px] md:h-[140px] w-full flex gap-6 flex-col justify-center  items-center">
          <div className="heading md:w-[55%] ">
            <h1 className="text-[48px] md:text-[56px] font-[600] leading-[60px] md:leading-[70px] text-[#0D0D12]  text-center  tracking-tighter">
              See What Our Customers Are Saying
            </h1>
          </div>
          <div className="discription">
            <p className=" font-[400] text-[18px] text-center  md:text-start leading-[27px] tracking-tighter">
              {" "}
              Here's what some of our customers say about our platform.
            </p>
          </div>
        </div>
      </div>
      <div className="CustomerContainer h-[970px] md:h-[584px] w-full flex flex-col gap-[24px] justify-center  items-center relative">
        <div className="TopCustomer   w-full   flex gap-[24px] flex-col md:flex-row justify-center  items-center">
          <div className="firstCustomer h-[280px]  p-[16px] flex flex-col  justify-center gap-[20px] bg-white border border-gray-200 rounded-[20px] shadow-lg">
            <div className="flex items-center mb-4">
              <div className="flex text-purple-600 space-x-1">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path d="M12 17.27l6.18 3.73-1.64-7.03 5.46-4.73-7.13-.61L12 2 9.13 8.63 2 9.24l5.46 4.73-1.64 7.03L12 17.27z" />
                  </svg>
                ))}
              </div>
              <span className="ml-2 text-lg font-semibold text-gray-700">
                4.8
              </span>
            </div>

            <p className="text-[#0D0D12] text-[16px] ">
              “Ganttify has revolutionized the way we manage our projects.
              Connecting tasks and workflows to our overall company goals has
              never been easier.”
            </p>
            <div className="flex items-center gap-2 ">
              <div className="h-[44px] w-[44px]">
                <img
                  src={Avatars1}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-semibold text-[#0D0D12]">
                  Charolette Hanlin
                </p>
                <p className="text-[#666D80]">Co-Founder, Heroes Digital</p>
              </div>
            </div>
          </div>
          <div className="secondCustomer h-[280px]  p-[16px] flex flex-col  justify-center gap-[20px] bg-white border border-gray-200 rounded-[20px] shadow-lg">
            <div className="flex items-center mb-4">
              <div className="flex text-purple-600 space-x-1">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path d="M12 17.27l6.18 3.73-1.64-7.03 5.46-4.73-7.13-.61L12 2 9.13 8.63 2 9.24l5.46 4.73-1.64 7.03L12 17.27z" />
                  </svg>
                ))}
              </div>
              <span className="ml-2 text-lg font-semibold text-gray-700">
                4.8
              </span>
            </div>

            <p className="text-[#0D0D12] text-[16px] ">
              “Using Ganttify has streamlined our project management process.
              It’s incredibly effective in aligning our daily tasks with the
              company's strategic goals.”
            </p>
            <div className="flex items-center gap-2 ">
              <div className="h-[44px] w-[44px]">
                <img
                  src={Avatars2}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-semibold text-[#0D0D12]">Eleanor Pena</p>
                <p className="text-[#666D80]">Co-Founder, Heroes Digital</p>
              </div>
            </div>
          </div>
          <div className="thirdCustomer h-[280px]  p-[16px] flex flex-col  justify-center gap-[20px] bg-white border border-gray-200 rounded-[20px] shadow-lg">
            <div className="flex items-center mb-4">
              <div className="flex text-purple-600 space-x-1">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path d="M12 17.27l6.18 3.73-1.64-7.03 5.46-4.73-7.13-.61L12 2 9.13 8.63 2 9.24l5.46 4.73-1.64 7.03L12 17.27z" />
                  </svg>
                ))}
              </div>
              <span className="ml-2 text-lg font-semibold text-gray-700">
                4.8
              </span>
            </div>

            <p className="text-[#0D0D12] text-[16px] ">
              “Ganttify has provided us with a unified view of our projects. It
              connects our workflows directly to our business goals, making it
              easier to track progress.”.
            </p>
            <div className="flex items-center gap-2 ">
              <div className="h-[44px] w-[44px]">
                <img
                  src={Avatars3}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-semibold text-[#0D0D12]">Guy Hawkins</p>
                <p className="text-[#666D80]">Co-Founder, Heroes Digital</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bottomCustomer w-full hidden md:flex gap-[24px] justify-center items-center">
          <div className="firstCustomer h-[280px] w-[33%]  p-[16px] flex flex-col  justify-center gap-[20px] bg-white border border-gray-200 rounded-[20px] shadow-lg">
            <div className="flex items-center mb-4">
              <div className="flex text-purple-600 space-x-1">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path d="M12 17.27l6.18 3.73-1.64-7.03 5.46-4.73-7.13-.61L12 2 9.13 8.63 2 9.24l5.46 4.73-1.64 7.03L12 17.27z" />
                  </svg>
                ))}
              </div>
              <span className="ml-2 text-lg font-semibold text-gray-700">
                4.8
              </span>
            </div>

            <p className="text-[#0D0D12] text-[16px] ">
              “Ganttify's ability to connect tasks with our company’s goals has
              given us a new level of clarity and efficiency in our project
              management efforts”.
            </p>
            <div className="flex items-center gap-2 ">
              <div className="h-[44px] w-[44px]">
                <img
                  src={Avatars4}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-semibold text-[#0D0D12]">Kristin Watson</p>
                <p className="text-[#666D80]">Co-Founder, Heroes Digital</p>
              </div>
            </div>
          </div>
          <div className="secondCustomer h-[280px] w-[33%] p-[16px] flex flex-col  justify-center gap-[20px] bg-white border border-gray-200 rounded-[20px] shadow-lg">
            <div className="flex items-center mb-4">
              <div className="flex text-purple-600 space-x-1">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path d="M12 17.27l6.18 3.73-1.64-7.03 5.46-4.73-7.13-.61L12 2 9.13 8.63 2 9.24l5.46 4.73-1.64 7.03L12 17.27z" />
                  </svg>
                ))}
              </div>
              <span className="ml-2 text-lg font-semibold text-gray-700">
                4.8
              </span>
            </div>

            <p className="text-[#0D0D12] text-[16px] ">
              “Using Ganttify, we’ve been able to ensure that all our project
              activities are aligned with our overarching business objectives,
              leading to better coordination and success.”
            </p>
            <div className="flex items-center gap-2 ">
              <div className="h-[44px] w-[44px]">
                <img
                  src={Avatars5}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-semibold text-[#0D0D12]">Jane Cooper</p>
                <p className="text-[#666D80]">Co-Founder, Heroes Digital</p>
              </div>
            </div>
          </div>
          <div className="thirdCustomer h-[280px] w-[33%]  p-[16px] flex flex-col  justify-center gap-[20px] bg-white border border-gray-200 rounded-[20px] shadow-lg">
            <div className="flex items-center mb-4">
              <div className="flex text-purple-600 space-x-1">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path d="M12 17.27l6.18 3.73-1.64-7.03 5.46-4.73-7.13-.61L12 2 9.13 8.63 2 9.24l5.46 4.73-1.64 7.03L12 17.27z" />
                  </svg>
                ))}
              </div>
              <span className="ml-2 text-lg font-semibold text-gray-700">
                4.8
              </span>
            </div>

            <p className="text-[#0D0D12] text-[16px] ">
              “Ganttify has transformed our approach to project management. It
              ensures that every task, no matter how small, is aligned with our
              company's mission and goals."
            </p>
            <div className="flex items-center gap-2 ">
              <div className="h-[44px] w-[44px]">
                <img
                  src={Avatars6}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-semibold text-[#0D0D12]">Leslie Alexander</p>
                <p className="text-[#666D80]">Co-Founder, Heroes Digital</p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="Overlay absolute h-[513px] w-full bottom-0 left-0  hidden md:block"
          style={{
            background:
              "linear-gradient(180deg, rgba(255, 255, 255, 0) 10%, #FFFFFF 100%)",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Customer;
