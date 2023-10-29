import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home";
import MenuPage from "../Pages/MenuPage/MenuPage";


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
        }
      ]
    },
  ]);

  export default router;