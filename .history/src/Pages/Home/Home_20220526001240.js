import React from "react";
import BusinessSummary from "../../Components/BusinessSummary";
import Carousel from "../../Components/Carousel";
import Parts from "../../Components/Parts";
import Review from "../../Components/Review";

const Home = () => {
  return (
    <div className=" grid grid-cols-1 gap-y-20">
      <Carousel />
      <BusinessSummary></BusinessSummary>
      <Parts />
      <Review />
    </div>
  );
};

export default Home;
