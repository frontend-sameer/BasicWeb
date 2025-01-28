import React, { useState } from "react";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
const Footer = () => {
  const [onHover, setOnHover] = useState({
    twitter: false,
    facebook: false,
    pintreset: false,
    insta: false,
  });
  return (
    <>
      <div className="w-full h-[70vh] bg-[rgb(34,36,41)] flex items-center justify-between">
        <div className="w-70 h-full  flex flex-col justify-center gap-4 p-3">
          <img
            className="w-28"
            src="https://oitech-vite.vercel.app/assets/logo-gy-y4WvK.png"
            alt=""
          />
          <p className="text-[#8C8F94] leading-7 text-[1.2vw]">
            Desires to obtain pain of itself, because it is pain, but
            occasionally circumstances.
          </p>
          <div className="w-52 h-16  flex items-center justify-between">
            <div
              onMouseEnter={() =>
                setOnHover((prev) => ({
                  ...onHover,
                  twitter: !onHover.twitter,
                }))
              }
              onMouseLeave={() =>
                setOnHover((prev) => ({ ...onHover, twitter: false }))
              }
              className={`bg-[rgb(62,63,67)] w-9 h-9 rounded-full flex items-center justify-center cursor-pointer ${
                onHover.twitter ? "hover:bg-[#FFAA17] transition-all" : ""
              }`}
            >
              <FaTwitter color={onHover.twitter ? "black" : "white"} />
            </div>
            <div
              onMouseEnter={() =>
                setOnHover((prev) => ({
                  ...onHover,
                  facebook: !onHover.facebook,
                }))
              }
              onMouseLeave={() =>
                setOnHover((prev) => ({ ...onHover, facebook: false }))
              }
              className={`bg-[rgb(62,63,67)] w-9 h-9 rounded-full flex items-center justify-center cursor-pointer ${
                onHover.facebook ? "hover:bg-[#FFAA17] transition-all" : ""
              }`}
            >
              <FaFacebookSquare color={onHover.facebook ? "black" : "white"} />
            </div>
            <div
              onMouseEnter={() =>
                setOnHover((prev) => ({
                  ...onHover,
                  pintreset: !onHover.pintreset,
                }))
              }
              onMouseLeave={() =>
                setOnHover((prev) => ({ ...onHover, pintreset: false }))
              }
              className={`bg-[rgb(62,63,67)] w-9 h-9 rounded-full flex items-center justify-center cursor-pointer ${
                onHover.pintreset
                  ? "hover:bg-[#FFAA17] transition-colors ease-out duration-[0.2s]"
                  : ""
              }`}
            >
              <FaPinterest color={onHover.pintreset ? "black" : "white"} />
            </div>
            <div
              onMouseEnter={() =>
                setOnHover((prev) => ({
                  ...onHover,
                  insta: !onHover.insta,
                }))
              }
              onMouseLeave={() =>
                setOnHover((prev) => ({ ...onHover, insta: false }))
              }
              className={`bg-[rgb(62,63,67)] w-9 h-9 rounded-full flex items-center justify-center cursor-pointer ${
                onHover.insta ? "hover:bg-[#FFAA17] transition-all" : ""
              }`}
            >
              <FaInstagram color={onHover.insta ? "black" : "white"} />
            </div>
          </div>
        </div>
        <div className="w-70 h-full  flex flex-col justify-center gap-3">
          <h1 className="text-white text-[1.6vw] font-semibold">Explore</h1>
          <div className="w-full bg-gray-500 h-[2.5px] rounded">
            <div className="w-8 h-full bg-[#FFAA17] rounded"></div>
          </div>
          <div className="w-full flex flex-col text-[#8C8F94] h-40   text-[1.3vw]  justify-between">
            <h4 className="cursor-pointer relative pb-2 block  hover:text-white">
              About Company
            </h4>
            <h4 className="cursor-pointer relative pb-2 block  hover:text-white anime">
              Meet The Team
            </h4>
            <h4 className="cursor-pointer relative pb-2 block hover:text-white anime">
              News & Media
            </h4>
            <h4 className="cursor-pointer relative pb-2 block hover:text-white anime">
              Our Projects
            </h4>
            <h4 className="cursor-pointer relative pb-2 block hover:text-white anime">
              Contact
            </h4>
          </div>
        </div>
        <div className="w-70 h-full  flex flex-col gap-3 justify-center">
          <h1 className="text-white text-[1.6vw]">Contact</h1>
          <div className="w-full bg-gray-500 h-[2.5px] rounded">
            <div className="w-8 h-full bg-[#FFAA17] rounded"></div>
          </div>
          <p className="w-60 text-[#8C8F94]">
            66 Road Broklyn Street, 600 New York, USA
          </p>
          <div className="w-full h-24  flex flex-col gap-3 justify-center">
            <div className="flex items-center gap-3 h-1/2 text-white">
              <MdEmail size={"1.5vw"} color="#FFAA17" />
              <span className="transition-colors ease-in cursor-pointer duration-[0.3s] hover:text-[#FFAA17]">
                needhelp@company.com
              </span>
            </div>
            <div className="h-1/2 flex items-center gap-3">
              <IoCall size={"1.5vw"} color="#FFAA17" />
              <span className="transition-colors text-white cursor-pointer ease-in duration-[0.3s] hover:text-[#FFAA17]">
                +92123456789
              </span>
            </div>
          </div>
        </div>
        <div className="w-70 h-full border-2 border-white flex flex-col justify-center gap-3">
          <h1 className="text-[1.5vw] text-white font-semibold">Gallery</h1>
          <div className="w-full bg-gray-500 h-[2.5px] rounded">
            <div className="w-8 h-full bg-[#FFAA17] rounded"></div>
          </div>
          <div className="w-56 h-40 border-2 border-white flex flex-wrap justify-between">
            <div className="w-16 h-16">
              <img
                src="https://oitech-vite.vercel.app/assets/project-thumb-1-Bq1ZB-s0.jpg"
                className="w-full h-full cursor-pointer"
                alt=""
              />
            </div>
            <div className="w-16 h-16">
              <img
                src="https://oitech-vite.vercel.app/assets/project-thumb-2-BAbaBgQK.jpg"
                className="w-full h-full cursor-pointer"
                alt=""
              />
            </div>
            <div className="w-16 h-16">
              <img
                src="https://oitech-vite.vercel.app/assets/project-thumb-3-CVoolXvn.jpg"
                className="w-full h-full cursor-pointer"git
                alt=""
              />
            </div>
            <div className="w-16 h-16">
              <img
                src="https://oitech-vite.vercel.app/assets/project-thumb-4-DsEmoXxL.jpg"
                className="w-full h-full cursor-pointer"
                alt=""
              />
            </div>
            <div className="w-16 h-16">
              <img
                src="https://oitech-vite.vercel.app/assets/project-thumb-1-Bq1ZB-s0.jpg"
                className="w-full h-full cursor-pointer"
                alt=""
              />
            </div>
            <div className="w-16 h-16">
              <img
                src="https://oitech-vite.vercel.app/assets/project-thumb-1-Bq1ZB-s0.jpg"
                className="w-full h-full cursor-pointer"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
