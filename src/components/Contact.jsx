import badge from "../assets/ContactBadge.png";
import GetStart from "./GetStart";
const Contact = () => {
  return (
    <div className="contact h-[548px] rounded-[24px] md:rounded-none  md:h-[782px] w-full flex justify-center items-start px-[16px] py-[40px] md:p-[104px] gap-[80px]">
      <div className="md:hidden">
        <GetStart />
      </div>
      <div className="headingwraper hidden  h-[209px] w-full  md:w-1/2   py-[8px]  md:flex flex-col gap-[20px] ">
        <div className="logo">
          <div className="w-[93px] h-[28px] ">
            <img
              src={badge}
              className="h-full w-full object-cover"
              alt=""
              srcset=""
            />
          </div>
        </div>
        <div className="heading h-[70px]">
          <h1 className="text-[48px] text-[#ffffff] font-[600] leading-[60px] tracking-tighter">
            Get in Touch with Us
          </h1>
        </div>
        <div className="description">
          <p className="text-[18px] text-[#FFFFFF99] font-[400] leading-relaxed tracking-tight">
            Ganttify enables you to achieve clarity and significant results on a
            large scale by linking tasks and workflows to the overarching
            objectives of the company
          </p>
        </div>
      </div>
      <div className="hidden  md:block  md:max-w-lg mx-auto p-8 bg-white shadow-lg rounded-[28px]">
        <form className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                First name
              </label>
              <input
                type="text"
                placeholder="John"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Last name
              </label>
              <input
                type="text"
                placeholder="Doe"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              placeholder="johndoe@mail.co"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Problem Descriptions
            </label>
            <textarea
              placeholder="Message"
              rows="4"
              className="mt-1 block w-full h-[200px] resize-none px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-black text-white font-semibold rounded-md hover:bg-gray-800 transition duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
