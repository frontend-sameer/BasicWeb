import React, { useState } from "react";
import { IoCallSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
const Map = () => {
  const [onHover, setonHover] = useState({
    box1: false,
    box2: false,
    box3: false,
  });

  return (
    <>
      <div className="w-full h-[90vh] relative">
        <iframe
          className="z-0"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7361.738328266781!2d75.88220188672321!3d22.695913965713213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcd0e93bb047%3A0x61fc4420ee5280d!2z4KSG4KSc4KS-4KSmIOCkqOCkl-CksCwg4KSH4KSo4KWN4KSm4KWM4KSwLCDgpK7gpKfgpY3gpK8g4KSq4KWN4KSw4KSm4KWH4KS2IDQ1MjAwMQ!5e0!3m2!1shi!2sin!4v1738390010683!5m2!1shi!2sin"
          width="100%"
          height="100%"
          loading="lazy"
        ></iframe>
        <div className="w-[100% h-fit absolute bottom-0">
          <div className="w-full flex items-center px-8 gap-6 justify-center h-72">
            <div
              onMouseEnter={() =>
                setonHover((prev) => ({ ...onHover, box1: !onHover.box1 }))
              }
              onMouseLeave={() =>
                setonHover((prev) => ({ ...prev, box1: false }))
              }
              className="w-90 h-full transition-colors duration-[0.3s] text-black bg-white hover:bg-[#FFAA17] hover:text-white p-10"
            >
              {" "}
              <h1 className="text-xl font-bold">New York</h1>
              <div className="w-full h-full  flex flex-col justify-center gap-1">
                <div className="w-56 h-10 flex items-center gap-5">
                  <IoCallSharp
                    size={"1.7vw"}
                    className={`rotate-260 transition-colors duration-[0.3s] ${
                      onHover.box1 ? "text-white" : "text-red-400"
                    }`}
                  />
                  <h4
                    className={`${
                      onHover.box1 ? "text-white" : "text-gray-500"
                    } transition-colors duration-[0.3s] cursor-pointer`}
                  >
                    666 888 000
                  </h4>
                </div>
                <div className="w-56 h-10 flex items-center gap-5">
                  <MdEmail
                    size={"1.7vw"}
                    className={`transition-colors duration-[0.3s] ${
                      onHover.box1 ? "text-white" : "text-red-400"
                    }`}
                  />
                  <h4
                    className={`${
                      onHover.box1 ? "text-white" : "text-gray-500"
                    } transition-colors duration-[0.3s] cursor-pointer text-[1.5w]`}
                  >
                    needhelp@company.com
                  </h4>
                </div>{" "}
                <div className="w-60  h-10 flex items-center gap-5">
                  <FaLocationDot
                    size={"1.7vw"}
                    className={`transition-colors ml-1 duration-[0.3s] ${
                      onHover.box1 ? "text-white" : "text-red-400"
                    }`}
                  />
                  <h4
                    className={`${
                      onHover.box1 ? "text-white" : "text-gray-500"
                    } transition-colors duration-[0.3s] cursor-pointer mt-6`}
                  >
                    35 Deerfield Valdosta Road, United Kingdom
                  </h4>
                </div>
              </div>
            </div>
            <div className="w-90 h-full bg-blue-300">
              <div
                onMouseEnter={() =>
                  setonHover((prev) => ({ ...prev, box2: !onHover.box2 }))
                }
                onMouseLeave={() =>
                  setonHover((prev) => ({ ...prev, box2: false }))
                }
                className="w-90 h-full transition-colors duration-[0.3s] text-black bg-white hover:bg-[#FFAA17] hover:text-white p-10"
              >
                {" "}
                <h1 className="text-xl font-bold">Washington DC</h1>
                <div className="w-full h-full  flex flex-col justify-center gap-1">
                  <div className="w-56 h-10 flex items-center gap-5">
                    <IoCallSharp
                      size={"1.7vw"}
                      className={`rotate-260 transition-colors duration-[0.3s] ${
                        onHover.box2 ? "text-white" : "text-red-400"
                      }`}
                    />
                    <h4
                      className={`${
                        onHover.box2 ? "text-white" : "text-gray-500"
                      } transition-colors duration-[0.3s] cursor-pointer`}
                    >
                      666 888 000
                    </h4>
                  </div>
                  <div className="w-56 h-10 flex items-center gap-5">
                    <MdEmail
                      size={"1.7vw"}
                      className={`transition-colors duration-[0.3s] ${
                        onHover.box2 ? "text-white" : "text-red-400"
                      }`}
                    />
                    <h4
                      className={`${
                        onHover.box2 ? "text-white" : "text-gray-500"
                      } transition-colors duration-[0.3s] cursor-pointer text-[1.5w]`}
                    >
                      needhelp@company.com
                    </h4>
                  </div>{" "}
                  <div className="w-60  h-10 flex items-center gap-5">
                    <FaLocationDot
                      size={"1.7vw"}
                      className={`transition-colors ml-1 duration-[0.3s] ${
                        onHover.box2 ? "text-white" : "text-red-400"
                      }`}
                    />
                    <h4
                      className={`${
                        onHover.box2 ? "text-white" : "text-gray-500"
                      } transition-colors duration-[0.3s] cursor-pointer mt-6`}
                    >
                      35 Deerfield Valdosta Road, United Kingdom
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-90 h-full bg-blue-300">
              <div
                onMouseEnter={() =>
                  setonHover((prev) => ({ ...prev, box3: !onHover.box3 }))
                }
                onMouseLeave={() =>
                  setonHover((prev) => ({ ...prev, box3: false }))
                }
                className="w-90 h-full transition-colors duration-[0.3s] text-black bg-white hover:bg-[#FFAA17] hover:text-white p-10"
              >
                {" "}
                <h1 className="text-xl font-bold">Las Vegas</h1>
                <div className="w-full h-full  flex flex-col justify-center gap-1">
                  <div className="w-56 h-10 flex items-center gap-5">
                    <IoCallSharp
                      size={"1.7vw"}
                      className={`rotate-260 transition-colors duration-[0.3s] ${
                        onHover.box3 ? "text-white" : "text-red-400"
                      }`}
                    />
                    <h4
                      className={`${
                        onHover.box3 ? "text-white" : "text-gray-500"
                      } transition-colors duration-[0.3s] cursor-pointer`}
                    >
                      666 888 000
                    </h4>
                  </div>
                  <div className="w-56 h-10 flex items-center gap-5">
                    <MdEmail
                      size={"1.7vw"}
                      className={`transition-colors duration-[0.3s] ${
                        onHover.box3 ? "text-white" : "text-red-400"
                      }`}
                    />
                    <h4
                      className={`${
                        onHover ? "text-white" : "text-gray-500"
                      } transition-colors duration-[0.3s] cursor-pointer text-[1.5w]`}
                    >
                      needhelp@company.com
                    </h4>
                  </div>{" "}
                  <div className="w-60  h-10 flex items-center gap-5">
                    <FaLocationDot
                      size={"1.7vw"}
                      className={`transition-colors ml-1 duration-[0.3s] ${
                        onHover.box3 ? "text-white" : "text-red-400"
                      }`}
                    />
                    <h4
                      className={`${
                        onHover.box3 ? "text-white" : "text-gray-500"
                      } transition-colors duration-[0.3s] cursor-pointer mt-6`}
                    >
                      35 Deerfield Valdosta Road, United Kingdom
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Map;
