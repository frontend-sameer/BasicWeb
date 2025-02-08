import React from "react";
import Footer from "./Components/Footer";
import Map from "./Components/Map";
import Service from "./Components/Service";
import Card from "./Components/Card";
import Form from "./Components/Form";

const App = () => {
  return (
    <>
      <div className="w-full h-screen bg-[#FEFEFE]">
        <Form />
        <Card />
        <Service />
        <Map />
        <Footer />
      </div>
    </>
  );
};

export default App;
