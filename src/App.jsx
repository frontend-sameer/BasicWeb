import React from "react";
import Footer from "./Components/Footer";
import Map from "./Components/Map";
import Service from "./Components/Service";
import Card from "./Components/Card";

const App = () => {
  return (
    <>
      <div className="w-full h-screen bg-[#FEFEFE]">
        <Card />
        <Service />
        <Map />
        <Footer />
      </div>
    </>
  );
};

export default App;
