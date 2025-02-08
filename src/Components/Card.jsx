import React from "react";
import Cardganerator from "./Cardganerator";
import details from "./ExtraDetails/CardDetails";
const Card = () => {
  return (
    <div className="w-full h-[100vh] z-10 px-6 mb-30">
      <h1 className="text-center text-[#FFAA17] uppercase font-semibold">
        From The Blog
      </h1>
      <h1 className="text-4xl font-bold text-center">News & Articles</h1>
      <div className="w-full h-[89%] mt-15">
        <div className="w-full h-[100%] flex gap-5 justify-evenly">
          {details.map((obj, idx) => {
            return <Cardganerator key={idx} details={obj} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Card;
