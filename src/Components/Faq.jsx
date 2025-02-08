import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

const Faq = ({ ques, setQuestion, questions }) => {
  const clickHandller = (id) => {};
  return (
    <>
      <div
        onClick={() => clickHandller(ques.id)}
        className={`w-full h-16 transition-colors duration-[0.2s] ease-in cursor-pointer flex items-center justify-between px-4 ${
          ques.isClick ? `bg-[#FFAA17]` : ` bg-[#FFFFFF]`
        }`}
      >
        <h3 className="text-[1.5vw] font-semibold">{ques.heading}</h3>
        {ques.isClick ? <FaMinus /> : <FaPlus />}
      </div>
      {ques.isClick ? (
        <div className="w-full h-32 px-4 py-2 flex items-center bg-[#FFFFFF] -mt-2">
          {" "}
          <p className="text-[#828489] text-[1.3vw]">{ques.para}</p>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Faq;
