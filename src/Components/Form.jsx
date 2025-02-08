import React, { useState } from "react";
import Faq from "./Faq";
import Questions from "./ExtraDetails/FAQ";

const Form = () => {
  const [question, setQuestion] = useState(Questions);

  const eventHandler = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="w-full flex items-center justify-between h-[100vh] relative mb-10">
        <div className="w-[50%] h-full ">
          <div className="w-[97%] bg-amber-200 h-full flex relative">
            <img
              style={{ zIndex: 0 }}
              className="w-full h-full object-cover object-center"
              src="https://oitech-vite.vercel.app/assets/3-DQd9ynVM.jpg"
              alt=""
            />
            <div className="w-[78%] h-[89%] bg-[#2C2E33] absolute top-[50%] left-[50%] -translate-[50%]">
              <div className="bg-[#FFAA17] w-full h-1"></div>
              <div className="w-full h-full py-8 px-10">
                <h4 className="text-[#FFAA17] text-sm font-semibold">
                  Contact Us
                </h4>
                <h1 className="text-[2.5vw] text-white font-bold">
                  Write Email
                </h1>
                <form
                  className="py-5 w-full h-[92%] flex flex-col gap-5"
                  onSubmit={(e) => eventHandler(e)}
                >
                  <input
                    className="px-5 ring-1 ring-[gray] text-white w-full h-10 font-semibold placeholder-gray-500 placeholder:text-xs  focus:ring-[#FFAA17] outline-none"
                    type="text"
                    placeholder="Your Name"
                  />
                  <input
                    className="px-5 ring-1 ring-[gray] text-white w-full h-10 placeholder-gray-500 font-semibold placeholder:text-xs  focus:ring-[#FFAA17] outline-none"
                    type="text"
                    placeholder="Email Address"
                  />
                  <input
                    className="px-5 ring-1 ring-[gray] text-white w-full h-10 placeholder-gray-500 font-semibold placeholder:text-xs  focus:ring-[#FFAA17] outline-none"
                    type="text"
                    placeholder="Phone Number"
                  />
                  <input
                    type="text"
                    placeholder="Write a Message"
                    className="placeholder:text-gray-500 w-full ring-1 ring-[gray] h-20 focus:ring-[#FFAA17] border-none outline-none placeholder:text-xs px-5  text-white placeholder:-translate-y-[10px]"
                  />
                  <button className="border w-1/2 py-3 font-semibold text-sm bg-[#222429] text-black  cursor-pointer border-none outline-none flex items-center justify-center btn relative z-10">
                    Send A Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[50%] h-full flex justify-end">
          <div className="w-[97%] bg-[#F4F5F9] h-full flex items-center justify-center">
            <div className="w-[78%] h-[89%]">
              <div className="w-full h-36">
                <h4 className="text-[#FFAA17] uppercase font-semibold text-[1.3vw]">
                  Questions & Answers
                </h4>
                <h1 className="text-[3vw] font-bold w-80 capitalize">
                  See Frequently Asked Questions
                </h1>
              </div>
              <div className="w-full h-[70%]  flex flex-col gap-2 overflow-auto mt-5">
                {Questions.map((obj, idx) => (
                  <Faq
                    key={idx}
                    ques={obj}
                    setQuestion={setQuestion}
                    questions={question}
                    index={idx}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
