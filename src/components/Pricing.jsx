import badge from "../assets/PricingBadge.svg";

const Pricing = () => {
  return (
    <div className="pricing h-[1953px] rounded-[24px] overflow-hidden md:rounded-none md:h-[989px] w-full flex flex-col  justify-start md:justify-center  items-center gap-[80px]  py-[40px] px-[16px] md:p-[104px] ">
      <div className="headingwraper h-[250px]   md:h-[188px] w-full  flex flex-col justify-start gap-[20px]">
        <div className="logo">
          <div className="w-[82px] h-[28px] ">
            <img
              src={badge}
              className="h-full w-full object-cover"
              alt=""
              srcset=""
            />
          </div>
        </div>
        <div className="headingwraper h-[200px]  md:h-[140px] w-full flex flex-col  md:flex-row justify-between  md:items-end">
          <div className="heading w-full md:w-[50%] ">
            <h1 className="text-[48px] md:text-[56px] font-[600] leading-[70px] text-[#ffffff] tracking-[-3px] md:tracking-tighter">
              Simple and Flexible Pricing
            </h1>
          </div>
          <div className="buttonbar w-full md:w-[226px] h-[44px] md:h-[61px] md:px-[7px] bg-[#3f3f3f4f]  rounded-[8px] flex items-center justify-between">
            <button className="button h-[38px] w-[160px] md:w-[121px] p-[8px] rounded-[8px] bg-[#ffffff] font-[500] text-[14px] text-[#000000] flex items-center justify-center">
              Monthly
            </button>
            <button className="button h-[38px] w-[160px]  md:w-[121px] p-[8px] rounded-[8px] font-[500] text-[14px] text-[#ffffff] bg-transparent flex items-center justify-center">
              Annually
            </button>
          </div>
        </div>
      </div>
      <div className="pricingcart h-[1600px] md:h-[513px] w-full flex flex-col  md:flex-row gap-[24px] justify-center items-center ">
        <div className="cartitem bg-[#ffffff]/10 rounded-[24px]  w-full h-[513px] flex justify-evenly flex-col gap-[24px] p-[24px]">
          <div className="header h-[137px] w-full ">
            <h1 className="text-[18px] font-[500] text-[#FFFFFF80] ">
              Personal
            </h1>
            <div className="info h-[102px] w-full flex flex-col gap-2 items-strat">
              <h1 className="text-[16px] font-[400] leading-[24px] text-[#ffffff80]">
                <span className="text-[40px] font-[600] leading-[52px] text-[#ffffff]">
                  $29
                </span>{" "}
                per month
              </h1>
              <p className="tetx-[16px] font-[400] text-[#ffffff80] leading-[24px] tracking-tighter">
                For individuals and small teams looking to manage their tasks
              </p>
            </div>
          </div>
          <div className="h-[1px] w-full border-[#ffffff80] border border-dashed "></div>
          <div className="Aboutplan w-full  ">
            <div className="rounded-xl flex flex-col gap-[24px] shadow-lg text-white">
              <h3 className="text-[16px] font-[600] leading-[24px] text-white tracking-tighter">
                This Plan Includes:
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <span className="h-4 w-4 rounded-full bg-[#ffffff80] flex items-center justify-center">
                    <svg
                      className="h-3 w-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span className="text-[#ffffff50] text-[16px] font-[400] tracking-tighter">
                    Unlimited contacts
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="h-4 w-4 rounded-full bg-[#ffffff80] flex items-center justify-center">
                    <svg
                      className="h-3 w-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span className="text-sm text-[#ffffff50] tracking-tighter">Bulk emailing</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="h-4 w-4 rounded-full bg-[#ffffff80] flex items-center justify-center">
                    <svg
                      className="h-3 w-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span className="text-sm text-[#ffffff50] tracking-tighter">AI Integration</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="h-4 w-4 rounded-full bg-[#ffffff80] flex items-center justify-center">
                    <svg
                      className="h-3 w-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span className="text-sm text-[#ffffff50] tracking-tighter">
                    View & share up to 3 years
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="h-4 w-4 rounded-full bg-[#ffffff80] flex items-center justify-center">
                    <svg
                      className="h-3 w-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span className="text-sm text-[#ffffff50] tracking-tighter">
                    Collaboration & permissions
                  </span>
                </li>
              </ul>
              <button
                className="  px-[24px] w-full h-[50px] bg-[#35333350] rounded-[16px] text-center  text-white  text-[16px] font-[600]"
                style={{
                  boxShadow: "0px 1px 2px 0px #0D0D120F",
                  backdropFilter: "blur(20px)",
                }}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
        <div className="cartitem bg-[#ffffff] rounded-[24px]  w-full h-[513px] flex flex-col justify-evenly gap-[24px] p-[24px]">
          <div className="header h-[137px] w-full ">
            <h1 className="text-[18px] font-[500] text-[#666D80] ">
              Pro
            </h1>
            <div className="info h-[102px] w-full flex flex-col gap-2 items-strat">
              <h1 className="text-[16px] font-[400] leading-[24px] text-[#666D80]">
                <span className="text-[40px] font-[600] leading-[52px] text-[#000]">
                  $39
                </span>{" "}
                per month
              </h1>
              <p className="tetx-[16px] font-[400] text-[#666D80] leading-[24px]">
              For growing teams that need to track their projects' progress and hit deadlines              </p>
            </div>
          </div>
          <div className="h-[1px] w-full  border border-dashed "></div>
          <div className="Aboutplan w-full ">
            <div className="rounded-xl flex flex-col gap-[24px] shadow-lg text-white">
              <h3 className="text-[16px] font-[600] leading-[24px] text-[#000]">
                Everything in Standard, plus:
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <span className="h-4 w-4 rounded-full bg-[#31313112] flex items-center justify-center">
                    <svg
                      className="h-3 w-3 text-[#111]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span className="text-[#666D80] text-[16px] font-[400] tracking-tighter ">
                    Email sequences  
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="h-4 w-4 rounded-full bg-[#31313112] flex items-center justify-center">
                    <svg
                      className="h-3 w-3 text-[#000]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span className="text-sm text-[#666D80] tracking-tighter">Send emails from multiple domains</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="h-4 w-4 rounded-full bg-[#31313112] flex items-center justify-center">
                    <svg
                      className="h-3 w-3 text-[#000]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span className="text-sm text-[#666D80] tracking-tighter">Connect multiple email accounts</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="h-4 w-4 rounded-full bg-[#31313112] flex items-center justify-center">
                    <svg
                      className="h-3 w-3 text-[#000]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span className="text-sm text-[#666D80] tracking-tighter">
                   Fully adjustable sharing permissions
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="h-4 w-4 rounded-full bg-[#31313112] flex items-center justify-center">
                    <svg
                      className="h-3 w-3 text-[#000]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span className="text-sm text-[#666D80] tracking-tighter">
                    Migration services
                  </span>
                </li>
              </ul>
              <button
                className="  px-[24px] w-full h-[50px] bg-[#0D0D12] rounded-[16px] text-center  text-white  text-[16px] font-[600]"
                style={{
                  boxShadow: "0px 1px 2px 0px #0D0D120F",
                  backdropFilter: "blur(20px)",
                }}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
        <div className="cartitem bg-[#ffffff]/10 rounded-[24px]  w-full h-[513px] flex flex-col justify-evenly gap-[24px] p-[24px]">
          <div className="header h-[137px] w-full ">
            <h1 className="text-[18px] font-[500] text-[#FFFFFF80] ">
              Beyond limits  
            </h1>
            <div className="info h-[102px] w-full flex flex-col gap-2 items-strat">
              <h1 className="text-[16px] font-[400] leading-[24px] text-[#ffffff80]">
                <span className="text-[40px] font-[600] leading-[52px] text-[#ffffff]">
                Custom Plan
                </span>
              </h1>
              <p className="tetx-[16px] font-[400] text-[#ffffff80] leading-[24px]">
              For companies that need to manage a portfolio of work and goals across departments              </p>
            </div>
          </div>
          <div className="h-[1px] w-full border-[#ffffff80] border border-dashed "></div>
          <div className="Aboutplan w-full ">
            <div className="rounded-xl flex flex-col gap-[24px] shadow-lg text-white">
              <h3 className="text-[16px] font-[600] leading-[24px] text-white tracking-tighter">
              Everything in Standard & Pro, plus:              </h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <span className="h-4 w-4 rounded-full bg-[#ffffff80] flex items-center justify-center">
                    <svg
                      className="h-3 w-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span className="text-[#ffffff50] text-[16px] font-[400]">
                     White glove onboarding
                   </span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="h-4 w-4 rounded-full bg-[#ffffff80] flex items-center justify-center">
                    <svg
                      className="h-3 w-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span className="text-sm text-[#ffffff50] tracking-tighter">Custom billing</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="h-4 w-4 rounded-full bg-[#ffffff80] flex items-center justify-center">
                    <svg
                      className="h-3 w-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span className="text-sm text-[#ffffff50] tracking-tighter">Dedicated slack channel</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="h-4 w-4 rounded-full bg-[#ffffff80] flex items-center justify-center">
                    <svg
                      className="h-3 w-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span className="text-sm text-[#ffffff50] tracking-tighter">
                     Dedicated point of contact
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="h-4 w-4 rounded-full bg-[#ffffff80] flex items-center justify-center">
                    <svg
                      className="h-3 w-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span className="text-sm text-[#ffffff50] tracking-tighter">
                    Unlimited reporting
                  </span>
                </li>
              </ul>
              <button
                className="  px-[24px] w-full h-[50px] bg-[#35333350] rounded-[16px] text-center  text-white  text-[16px] font-[600]"
                style={{
                  boxShadow: "0px 1px 2px 0px #0D0D120F",
                  backdropFilter: "blur(20px)",
                }}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
