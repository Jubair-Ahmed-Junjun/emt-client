import { async } from "@firebase/util";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Loading from "../Components/Loading";
import auth from "../firebase.init";

const MyProfile = () => {
  const [loading, setLoading] = useState(false);
  const [authUser] = useAuthState(auth);
  const [disable, setDisable] = useState(true);

  const {
    data: user,
    isLoading,
    error,
    refetch,
  } = useQuery(["updateUserInfo", authUser?.email], () =>
    fetch(
      `https://damp-eyrie-12250.herokuapp.com/usersByEmail?email=${authUser?.email}`
    ).then((res) => res.json())
  );

  if (error) {
    toast.error(error.message);
  }
  if (isLoading) {
    return <Loading />;
  }

  const handleForm = async (event) => {
    event.preventDefault();
    setLoading(true);

    const mobile = event.target.mobile.value;

    await fetch(`http://localhost:5000/usersByEmail?email=${user.email}`, {
      method: "put",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ mobile }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Updated");
          refetch();
        }
      });
    event.target.reset();
    setLoading(false);
  };

  return (
    <div className="flex justify-center">
      <div className=" w-full max-w-lg">
        <h2 className=" text-center text-primary text-4xl mb-5 uppercase">
          My Profile
        </h2>
        <div className="card w-full max-w-lg bg-base-200 shadow-xl mx-auto">
          <div className="card-body">
            <p>Name: {user.name}</p>
            <p>Email: {user.email} </p>
            <p>Role: {user.role || "user"} </p>
            <p>Mobile: {user.mobile || "none"} </p>
          </div>
        </div>
        <h3 className=" text-center text-primary text-2xl mt-10 uppercase">
          update your info below
        </h3>
        <form onSubmit={handleForm}>
          <div className="form-control w-full max-w-lg">
            <label className="label">
              <span className="label-text">Your Name:</span>
            </label>
            <input
              type="text"
              value={user.name || "none"}
              disabled
              className="input input-bordered input-primary w-full max-w-lg"
            />
          </div>
          <div className="form-control w-full max-w-lg mt-1">
            <label className="label">
              <span className="label-text">Your Email:</span>
            </label>
            <input
              type="email"
              value={user.email}
              disabled
              className="input input-bordered input-primary w-full max-w-lg"
            />
          </div>
          <div className="form-control w-full max-w-lg mt-1">
            <label className="label">
              <span className="label-text">Role:</span>
            </label>
            <input
              type="text"
              value={user.role}
              disabled
              className="input input-bordered input-primary w-full max-w-lg"
            />
          </div>
          <div className="form-control w-full max-w-lg mt-1">
            <label className="label">
              <span className="label-text">Mobile:</span>
            </label>
            <input
              onChange={() => setDisable(false)}
              required
              type="text"
              defaultValue={user.mobile}
              name="mobile"
              placeholder="Mobile"
              className="input input-bordered input-primary w-full max-w-lg"
            />
          </div>

          <button
            disabled={disable}
            className={` btn btn-primary w-full mt-10 ${loading && "loading"}`}
          >
            {loading ? "" : "Update"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default MyProfile;
