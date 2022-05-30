import React from "react";

const Carousel = () => {
  const images = [
    "https://i.ibb.co/hg00N15/carousel1-2.jpg",
    "https://i.ibb.co/T2wDjX6/carousel1-3.jpg",
    "https://i.ibb.co/0DNgQvZ/carousel1-4.jpg",
    "https://i.ibb.co/BZC8f8s/carousel1-1.jpg",
  ];
  return (
    <div>
      <div className="carousel lg:h-[60vh] w-full">
        <div id="item1" className="carousel-item w-full">
          <img src={images[2]} className="w-full" alt="" />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img src={images[1]} className="w-full" alt="" />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img src={images[0]} className="w-full" alt="" />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img src={images[3]} className="w-full" alt="" />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>
    </div>
  );
};

export default Carousel;
