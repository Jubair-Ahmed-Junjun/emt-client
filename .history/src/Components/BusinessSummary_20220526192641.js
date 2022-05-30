import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSackDollar,
  faStarOfDavid,
  faBuildingColumns,
} from "@fortawesome/free-solid-svg-icons";
const BusinessSummary = () => {
  const element1 = <FontAwesomeIcon icon={faSackDollar} />;

  const element2 = <FontAwesomeIcon icon={faStarOfDavid} />;
  const element3 = <FontAwesomeIcon icon={faBuildingColumns} />;
  return (
    <div>
      <h1 className="text-3xl text-center uppercase">Business Summary</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3  pt-5 gap-5 justify-items-center -mt-25 mb-20">
        <div>
          <div className="card w-96 bg-base-200 shadow-xxl">
            <figure className="px-10 pt-10 text-4xl ">{element1}</figure>
            <div className="card-body items-center text-center">
              <h2 className="text-4xl font-bold">75M+ </h2>
              <p className="font-bold">Annual revenue</p>
            </div>
          </div>
        </div>

        <div>
          <div className="card w-96 bg-base-200 shadow-xxl">
            <figure className="px-10 pt-10 text-4xl">{element2}</figure>
            <div className="card-body items-center text-center">
              <h2 className="text-4xl font-bold ">150K+ </h2>
              <p className="font-bold">Reviews</p>
            </div>
          </div>
        </div>

        <div>
          <div className="card w-96 bg-base-200 shadow-xxl">
            <figure className="px-10 pt-10 text-4xl">{element3}</figure>
            <div className="card-body items-center text-center">
              <h2 className="text-4xl font-bold">100+ </h2>
              <p className="font-bold">Companies trust us</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummary;
