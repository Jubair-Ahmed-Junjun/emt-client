import React from "react";

const Complain = () => {
  return (
    <section
      style={{ height: "300px" }}
      className="p-5 bg-base-200 pt-5 text-base-content rounded mt-16"
    >
      <div className="flex flex-col g-5">
        <div>
          <h1 className="text-3xl text-center">LET'S STAY IN TOUCH</h1>
        </div>
        <div>
          <input
            type="text"
            placeholder="Type here"
            className="input w-full max-w-xs px-3 text-center"
          />
        </div>

        <div>
          <input type="submit" value="Submit" className="btn" />
        </div>
      </div>
    </section>
  );
};

export default Complain;
