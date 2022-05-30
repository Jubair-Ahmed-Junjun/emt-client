import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import Loading from "../Components/Loading";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  const [authUser] = useAuthState(auth);
  const [isAdmin, loading] = useAdmin(authUser);

  if (loading) {
    return;
  }

  // const {
  //   data: user,
  //   isLoading,
  //   error,
  // } = useQuery(["usersByEmail", authUser?.email], () =>
  //   fetch(
  //     `https://damp-eyrie-12250.herokuapp.com/usersByEmail?email=${authUser?.email}`
  //   ).then((res) => res.json())
  // );

  // if (error) {
  //   toast.error(error.message);
  // }
  // if (isLoading) {
  //   return <Loading />;
  // }

  return (
    <div className="px-5">
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content mt-10 lg:mt-16">
          <label
            htmlFor="my-drawer-2"
            className="btn btn-sm btn-primary drawer-button  lg:hidden flex mb-5"
          >
            Open Sidebar
          </label>
          <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            <li>
              <Link to="/dashboard">My Profile</Link>
            </li>
            {isAdmin || (
              <>
                <li>
                  <Link to="/dashboard/my-order">My Order</Link>
                </li>
                <li>
                  <Link to="/dashboard/add-review">Add Review</Link>
                </li>
              </>
            )}
            {isAdmin && (
              <>
                <li>
                  <Link to="/dashboard/manage-all-order">Manage All Order</Link>
                </li>
                <li>
                  <Link to="/dashboard/add-product">Add Product</Link>
                </li>
                <li>
                  <Link to="/dashboard/make-admin">Make Admin</Link>
                </li>
                <li>
                  <Link to="/dashboard/manage-product">Manage Product</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
