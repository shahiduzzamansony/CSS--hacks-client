import { createBrowserRouter } from "react-router-dom";
import Login from "../../forms/login/Login";
import Register from "../../forms/register/Register";
import Main from "../../layout/Main";
import Category from "../../pages/category/Category";
import Framework from "../../pages/Frameworks/Framework/Framework";
import Home from "../../pages/Home/Home";
import PrivateRoute from "../privateRoute/PrivateRoute";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/category/:id",
        element: (
          <PrivateRoute>
            <Category></Category>
          </PrivateRoute>
        ),
      },
      {
        path: "/framework/:id",
        element: <Framework></Framework>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);
