import React from "react";
import Cardganerator from "./Cardganerator";
import details from "../CardDetails";
const Card = () => {
  return (
    <div className="w-full h-[90vh] z-10 px-12 mb-50">
      <h1 className="text-center text-[#FFAA17] uppercase font-semibold">
        From The Blog
      </h1>
      <h1 className="text-4xl font-bold text-center">News & Articles</h1>
      <div className="w-full h-full  flex items-center gap-5 justify-center mt-10">
        {details.map((obj, idx) => {
          return <Cardganerator key={idx} details={obj} />;
        })}
      </div>
    </div>
  );
};

export default Card;
