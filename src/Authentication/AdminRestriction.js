import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../firebase.init";
import useAdmin from "../hooks/useAdmin";

const AdminRestriction = ({ children }) => {
  const [authUser, authLoading] = useAuthState(auth);
  const [isAdmin, loading] = useAdmin(authUser);
  const location = useLocation();

  if (loading || authLoading) {
    return;
  }

  if (isAdmin) {
    return (
      <Navigate to="/dashboard" state={{ from: location }} replace></Navigate>
    );
  }
  return children;
};

export default AdminRestriction;
