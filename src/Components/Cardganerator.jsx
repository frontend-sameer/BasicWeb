import React from "react";
import { IoMdPerson } from "react-icons/io";
import { BsFillTagFill } from "react-icons/bs";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaComments } from "react-icons/fa";
const Cardganerator = ({ details }) => {
  return (
    <>
      <div className="w-80 h-[85%] overflow-hidden  flex flex-col relative z-0">
        <div className="w-80 h-[100%] relative main-card overflow-hidden flex z-10">
          <img
            className="w-full relative h-[100%] object-center object-cover img cursor-pointer"
            src={
              details?.img ??
              "https://oitech-vite.vercel.app/assets/news-1-Bey16ar5.jpg"
            }
            alt=""
          />
          <div className="absolute bg-[#59575721] w-1/2 h-72 top-0 child-card transition-colors duration-[0.3s]"></div>
          <div className="absolute  bg-[#59575721] w-1/2 h-72 top-0 right-0 child-card transition-colors duration-[0.3s]"></div>
          <div className="w-13 h-14 flex justify-center items-center px-4 text-xs font-semibold  bg-[#FFAA17] absolute top-5 right-5 badge">
            {details?.Date ?? "28 oct"}
          </div>
        </div>
        <div className="w-full h-[50%] py-6 bg-white border-[0.5px]  border-gray-200">
          <div className="w-full h-[15%]  flex items-center gap-4 px-6">
            <div className="w-fit h-full flex items-center">
              <IoMdPerson size={"1.5vw"} className="text-[#FFAA17]" />
              <span className="text-xs text-gray-500 ml-1">
                {details?.Admin ?? "By Admin"}
              </span>
            </div>
            <div className="w-fit  h-full flex items-center">
              <BsFillTagFill size={"1.5vw"} className="text-[#FFAA17]" />
              <span className="text-xs text-gray-500 ml-1">
                {details?.Technology ?? "Technology"}
              </span>
            </div>
          </div>
          <div className="w-full h-[100%] flex flex-col items-center justify-between">
            <p className="text-[2vw] font-semibold ml-5 transition-colors duration-[0.3s] cursor-pointer leading-6 mt-4 w-72 hover:text-[#FFAA17]">
              Professional technology information & Solutions are just like...
            </p>
            <div className="w-full h-12 bg-[#F4F5F8] flex items-center justify-between">
              <div className="w-36 h-full flex items-center gap-0.5 px-5">
                <div className="h-fit  w-[100%] flex items-center hover-read justify-center cursor-pointer">
                  <h4 className="font-semibold text-sm text-gray-400 cursor-pointer read">
                    Read More
                  </h4>
                  <FaLongArrowAltRight className="mt-1 ml-2 cursor-pointer text-[#FFAA17] arrow" />
                </div>
              </div>
              <div className="w-fit h-full flex items-center gap-0.5 px-5">
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
