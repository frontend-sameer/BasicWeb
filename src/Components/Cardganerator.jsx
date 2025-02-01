import React from "react";
import { IoMdPerson } from "react-icons/io";
import { BsFillTagFill } from "react-icons/bs";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaComments } from "react-icons/fa";
const Cardganerator = () => {
  return (
    <>
      <div className="w-80 h-full  flex flex-col relative z-0">
        <div className="w-80 h-72 relative main-card overflow-hidden flex z-10">
          <img
            className="w-full relative h-72 object-center object-cover img cursor-pointer"
            src="https://oitech-vite.vercel.app/assets/news-1-Bey16ar5.jpg"
            alt=""
          />
          <div className="absolute bg-[#5957575e] w-1/2 h-72 top-0 child-card transition-colors duration-[0.3s]"></div>
          <div className="absolute  bg-[#5957575e] w-1/2 h-72 top-0 right-0 child-card transition-colors duration-[0.3s]"></div>
          <div className="px-2 py-3 bg-[#FFAA17] absolute top-5 right-5 badge">
            Date
          </div>
        </div>
        <div className="w-full h-[40%] px-3 py-5 bg-white border border-whites">
          <div className="w-full h-[15%]  flex items-center gap-4">
            <div className="w-fit h-full flex items-center">
              <IoMdPerson size={"1.5vw"} className="text-[#FFAA17]" />
              <span className="text-xs text-gray-500 ml-1">By Admin</span>
            </div>
            <div className="w-fit  h-full flex items-center">
              <BsFillTagFill size={"1.5vw"} className="text-[#FFAA17]" />
              <span className="text-xs text-gray-500 ml-1">Technology</span>
            </div>
          </div>
          <div className="w-full h-[100%]">
            <p className="text-[2vw] font-semibold">
              Professional technology information & Solutions are just like...
            </p>
            <div className="w-full h-8 bg-[#e1e0e0b4] flex items-center justify-between">
              <div className="w-full h-full flex items-center gap-0.5">
                <h4 className="font-semibold text-sm text-gray-400">
                  Read More
                </h4>
                <FaLongArrowAltRight className="mt-1 text-[#FFAA17]" />
              </div>
              <div className="w-fit h-full flex items-center gap-0.5">
                <FaComments className="text-[#FFAA17]" />
                <h4 className="text-sm text-gray-500">02</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cardganerator;
