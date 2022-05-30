import React from "react";

const Complain = () => {
  return (
    <section
      style={{ height: "250px" }}
      className="my-5 container bg-secondary rounded-3 d-flex justify-content-center align-items-center"
      id="subs"
    >
      <div className="form-control w-50">
        <label className="label">
          <span className="label-text ">Your Email</span>
        </label>
        <label className="input-group input-group-vertical">
          <span>Email</span>
          <input
            type="text"
            placeholder="info@site.com"
            className="input input-bordered"
          />
        </label>
      </div>
    </section>
  );
};

export default Complain;
