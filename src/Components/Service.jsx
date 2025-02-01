import React from "react";

const Service = () => {
  return (
    <>
      <div className="w-full h-52 px-12">
        <div className="w-full h-full bg-[#FFAA17] flex items-center">
          <div className="w-[45%] h-full">
            <img
              src="https://oitech-vite.vercel.app/assets/image-2-DfOzdorD.jpg"
              className="w-full h-full"
              alt=""
            />
          </div>
          <div className="flex items-center w-full h-full justify-evenly">
            <h1 className="text-[2.8vw] text-white font-bold w-80">
              We're Ready Develop Your Site!
            </h1>
            <button className="bg-[#222429] font-semibold text-white px-6 py-4 rounded-sm cursor-pointer w-52 flex items-center justify-center">
              More Services
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
