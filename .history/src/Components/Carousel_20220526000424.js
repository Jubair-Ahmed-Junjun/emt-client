import React from "react";
import banner from "../assets/images/banner-3.jpg";

const Carousel = () => {
  return (
    <div className="flex justify-center">
      <img className="shadow-lg w-full" src={banner} alt="banner" />
    </div>
  );
};

export default Carousel;
