import React from "react";

const Portfolio = () => {
  return (
    <div className=" flex justify-center min-h-screen ">
      <div className=" absolute top-1/3">
        <div className=" lg:w-fit w-screen bg-base-200 shadow-xl rounded-xl">
          <div className="flex">
            <div className=" p-3 lg:p-10 flex-1">
              <h2 className=" lg:text-xl">Name: </h2>
              <h2 className=" lg:text-xl">Email:</h2>
              <h2 className=" lg:text-xl">Educational Background:</h2>
            </div>
            <div className=" p-3 lg:p-10 flex-1">
              <h2 className=" lg:text-xl">Moniruzzaman </h2>
              <h2 className=" lg:text-xl">moniruzzaman.shakib.1@gmail.com</h2>
              <h2 className=" lg:text-xl">
                Student of Electrical and Electronic Engineering
                <br />
                level-2 semester-I
              </h2>
            </div>
          </div>
          <div className="text-center">live site link</div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
