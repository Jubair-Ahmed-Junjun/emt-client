import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../firebase.init";

const AddReview = () => {
  const [authUser] = useAuthState(auth);
  const [loading, setLoading] = useState(false);

  const handleForm = async (event) => {
    event.preventDefault();
    setLoading(true);
    const name = authUser.displayName;
    const rating = event.target.rating.value;
    const message = event.target.message.value;

    const review = {
      name,
      rating,
      message,
    };

    await fetch(`http://localhost:5000/review`, {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          event.target.reset();
          toast.success("Thank you for your Review.");
        }
      });
    setLoading(false);
  };

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-lg">
        <h2 className=" text-center text-primary text-4xl mb-5 uppercase">
          add a review
        </h2>
        <form onSubmit={handleForm}>
          <div className="form-control w-full max-w-lg mt-1">
            <label className="label">
              <span className="label-text">Rating:</span>
            </label>
            <input
              required
              type="number"
              name="rating"
              placeholder="between 0 to 5"
              className="input input-bordered input-primary w-full max-w-lg"
            />
          </div>
          <div className="form-control w-full max-w-lg mt-1">
            <label className="label">
              <span className="label-text">Short Message:</span>
            </label>
            <input
              required
              type="text"
              name="message"
              className="input input-bordered input-primary w-full max-w-lg"
            />
          </div>
          <button
            className={` btn btn-primary mt-10 w-full ${loading && "loading"}`}
          >
            {loading ? "" : "add"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddReview;
