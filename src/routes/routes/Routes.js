import { createBrowserRouter } from "react-router-dom";
import Login from "../../forms/login/Login";
import Register from "../../forms/register/Register";
import Main from "../../layout/Main";
import Category from "../../pages/category/Category";
import Checkout from "../../pages/checkout/Checkout";
import Details from "../../pages/details/Details";
import Framework from "../../pages/Frameworks/Framework/Framework";
import Home from "../../pages/Home/Home";
import PrivateRoute from "../privateRoute/PrivateRoute";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/framework",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/frameworks"),
      },
      {
        path: "/category/:id",
        element: <Category></Category>,
      },
      {
        path: "/framework",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/details/:id",
        element: <Details></Details>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/details/${params.id}`),
      },
      {
        path: "/checkout/:id",
        element: (
          <PrivateRoute>
            <Checkout></Checkout>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/details/${params.id}`),
      },
    ],
  },
]);
