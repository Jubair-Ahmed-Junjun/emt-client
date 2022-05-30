import { Route, Routes } from "react-router-dom";
import RequireAuth from "./Authentication/RequireAuth";
import Navbar from "./Components/Navbar";
import Blog from "./Pages/Blog/Blog";
import Dashboard from "./Dashboard/Dashboard";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Purchase from "./Pages/Purchase/Purchase";
import Signup from "./Pages/Signup/Signup";
import MyProfile from "./Dashboard/MyProfile";
import MyOrder from "./Dashboard/MyOrder";
import AddReview from "./Dashboard/AddReview";
import Footer from "./Components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Payment from "./Dashboard/Payment";
import ManageAllorder from "./Dashboard/ManageAllorder";
import AddProduct from "./Dashboard/AddProduct";
import MakeAdmin from "./Dashboard/MakeAdmin";
import ManageProduct from "./Dashboard/ManageProduct";
import RequireAdmin from "./Authentication/RequireAdmin";
import AdminRestriction from "./Authentication/AdminRestriction";

function App() {
  return (
    <div className=" lg:max-w-7xl mx-auto">
      <Navbar />
      <div className=" pt-16">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/portfolio" element={<Portfolio />}></Route>
          <Route
            path="/dashboard"
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          >
            <Route index element={<MyProfile />} />
            <Route
              path="my-order"
              element={
                <AdminRestriction>
                  <MyOrder />
                </AdminRestriction>
              }
            />
            <Route
              path="add-review"
              element={
                <AdminRestriction>
                  <AddReview />
                </AdminRestriction>
              }
            />
            <Route
              path="manage-all-order"
              element={
                <RequireAdmin>
                  <ManageAllorder />
                </RequireAdmin>
              }
            />
            <Route
              path="add-product"
              element={
                <RequireAdmin>
                  <AddProduct />
                </RequireAdmin>
              }
            />
            <Route
              path="make-admin"
              element={
                <RequireAdmin>
                  <MakeAdmin />
                </RequireAdmin>
              }
            />
            <Route
              path="manage-product"
              element={
                <RequireAdmin>
                  <ManageProduct />
                </RequireAdmin>
              }
            />
            <Route path="payment/:id" element={<Payment />} />
          </Route>
          <Route
            path="/purchase/:partsId"
            element={
              <RequireAuth>
                <Purchase />
              </RequireAuth>
            }
          ></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
        </Routes>
        <ToastContainer />
      </div>
      <Footer />
    </div>
  );
}

export default App;
