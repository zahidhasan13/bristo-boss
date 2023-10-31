import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home";
import MenuPage from "../Pages/MenuPage/MenuPage";
import OrderFood from "../Pages/OrderFood/OrderFood/OrderFood";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: "menu",
          element: <MenuPage></MenuPage>
        },
        {
          path: "order/:category",
          element: <OrderFood></OrderFood>
        }
      ]
    },
    {
      path: "login",
      element: <Login></Login>
    },
    {
      path: "signup",
      element: <SignUp></SignUp>
    },
  ]);

  export default router;