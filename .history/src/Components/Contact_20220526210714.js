import React from "react";

const Contact = () => {
  return (
    <div className=" bg-base-100 flex justify-center py-20">
      <div className=" w-full max-w-lg">
        <h2 className=" text-center text-primary text-4xl mb-5 uppercase">
          Contact Us
        </h2>
        <form action="">
          <div className="form-control w-full max-w-lg mt-1">
            <label className="label">
              <span className="label-text">Your Email:</span>
            </label>
            <input
              required
              type="email"
              name="email"
              className="input input-bordered input-primary w-full max-w-lg"
            />
          </div>
          <div className="form-control w-full max-w-lg">
            <label className="label">
              <span className="label-text">Message:</span>
            </label>
            <textarea className="textarea textarea-primary w-full max-w-lg"></textarea>
          </div>
          <button className={` btn btn-primary mt-10 w-full`}>Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
