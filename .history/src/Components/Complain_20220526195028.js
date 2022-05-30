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
        type="text"
        placeholder="Type here"
        className="input w-full max-w-xs"
      />

      <br />
      <button className="btn btn-wide py-3">Send</button>
    </section>
  );
};

export default Complain;
