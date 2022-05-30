import React from "react";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Loading from "./Loading";

const Review = () => {
  const {
    data: reviews,
    isLoading,
    error,
  } = useQuery("reviews", () =>
    fetch(`http://localhost:5000/review`).then((res) => res.json())
  );
  if (error) {
    toast.error(error.message);
  }
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className=" px-5 mb-20">
      <h2 className=" text-center text-primary text-4xl mb-5 uppercase">
        customer review
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {reviews &&
          reviews.map((review, key) => (
            <div key={key} className="card w-full bg-base-200 shadow-xl">
              <div className="card-body text-center">
                <div className="avatar placeholder justify-center">
                  <div className="bg-neutral-focus text-neutral-content rounded-full w-24">
                    <span className="text-3xl uppercase font-bold">
                      {review.name[0]}
                    </span>
                  </div>
                </div>
                <h2 className="text-xl mt-2 font-bold text-center">
                  {review.name}
                </h2>
                <p>
                  Ratings:{" "}
                  <span className=" text-xl text-White">{review.rating}</span>
                </p>
                <p>{review.message}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Review;
