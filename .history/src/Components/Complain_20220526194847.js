import React from "react";

const Complain = () => {
  return (
    <section
      style={{ height: "250px" }}
      className="p-5 bg-base-200 text-base-content rounded mt-16"
      id="subs"
    >
      <h1 className="text-3xl text-center">LET'S STAY IN TOUCH</h1>
      <input
        className="form-control me-2 text-white"
        type="search"
        placeholder="Enter mail"
        aria-label="Search"
      />
      <br />
      <button className="btn btn-outline-success btn-warning" type="submit">
        Send
      </button>
    </section>
  );
};

export default Complain;
