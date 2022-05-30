import React from "react";

const Complain = () => {
  return (
    <section
      style={{ height: "350px" }}
      className="p-5 bg-base-200 pt-5 text-base-content rounded mt-16"
    >
      <div className="flex flex-col content-center">
        <div>
          <h1 className="text-3xl text-primary font-bold text-center">
            Complaints/Suggestion Box
          </h1>
        </div>
        <form className="w-full max-w-sm">
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                for="inline-full-name"
              >
                Full Name
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                type="text"
                placeholder="Type here"
                className="input w-full max-w-xs"
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                for="inline-password"
              >
                Describe
              </label>
            </div>
            <textarea
              className="textarea"
              placeholder="You can say anything.."
            ></textarea>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3"></div>
            <label className="md:w-2/3 block text-gray-500 font-bold">
              <input className="mr-2 leading-tight" type="checkbox" />
              <span className="text-sm">Send me your feedback!</span>
            </label>
          </div>
          <div className="md:flex md:items-center">
            <div className="md:w-1/3"></div>
            <div className="md:w-2/3">
              <button
                className="shadow bg-primary hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="button"
              >
                Send
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Complain;
