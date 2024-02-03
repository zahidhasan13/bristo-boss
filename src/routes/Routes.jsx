import { createBrowserRouter } from "react-router-dom";
import AddItems from "../Pages/AdminDashBoard/AddItems";
import AdminHome from "../Pages/AdminDashBoard/AdminHome";
import AllUsers from "../Pages/AdminDashBoard/AllUsers";
import ManageBookings from "../Pages/AdminDashBoard/ManageBookings";
import ManageItems from "../Pages/AdminDashBoard/ManageItems";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import MenuPage from "../Pages/MenuPage/MenuPage";
import OrderFood from "../Pages/OrderFood/OrderFood/OrderFood";
import SignUp from "../Pages/SignUp/SignUp";
import AddReview from "../Pages/UserDashBoard/AddReview";
import MyBooking from "../Pages/UserDashBoard/MyBooking";
import MyCart from "../Pages/UserDashBoard/MyCart";
import PaymentHistory from "../Pages/UserDashBoard/PaymentHistory";
import Reservation from "../Pages/UserDashBoard/Reservation";
import UserHome from "../Pages/UserDashBoard/UserHome";
import Main from "../layout/Main";
import UserDashBoard from "../layout/UserDashBoard";
import AdminRoute from "./AdminRoute";
import PrivateRouter from "./PrivateRouter";
import Payment from "../Pages/UserDashBoard/Payment";
import ContactUs from "../Pages/ContactUs/ContactUs";
import UpdateItem from "../Pages/AdminDashBoard/UpdateItem";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "menu",
        element: <MenuPage></MenuPage>,
      },
      {
        path: "order/:category",
        element: <OrderFood></OrderFood>,
      },
      {
        path: "contact",
        element: <ContactUs></ContactUs>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRouter>
        <UserDashBoard></UserDashBoard>
      </PrivateRouter>
    ),
    children: [
      {
        path: "userhome",
        element: <UserHome></UserHome>,
      },
      {
        path: "reservation",
        element: <Reservation></Reservation>,
      },
      {
        path: "paymenthistory",
        element: <PaymentHistory></PaymentHistory>,
      },
      {
        path: "mycart",
        element: (
          <PrivateRouter>
            <MyCart></MyCart>
          </PrivateRouter>
        ),
      },
      {
        path: "payment",
        element: <Payment></Payment>,
      },
      {
        path: "addreview",
        element: <AddReview></AddReview>,
      },
      {
        path: "mybooking",
        element: <MyBooking></MyBooking>,
      },
      {
        path: "adminhome",
        element: (
          <AdminRoute>
            <AdminHome></AdminHome>
          </AdminRoute>
        ),
      },
      {
        path: "additems",
        element: (
          <AdminRoute>
            <AddItems></AddItems>
          </AdminRoute>
        ),
      },
      {
        path: "updateitem/:id",
        element: (
          <AdminRoute>
            <UpdateItem></UpdateItem>
          </AdminRoute>
        ),
      },
      {
        path: "manageitems",
        element: (
          <AdminRoute>
            <ManageItems></ManageItems>
          </AdminRoute>
        ),
      },
      {
        path: "managebookings",
        element: (
          <AdminRoute>
            <ManageBookings></ManageBookings>
          </AdminRoute>
        ),
      },
      {
        path: "allusers",
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
      },
    ],
  },
  {
    path: "login",
    element: <Login></Login>,
  },
  {
    path: "signup",
    element: <SignUp></SignUp>,
  },
]);

export default router;
