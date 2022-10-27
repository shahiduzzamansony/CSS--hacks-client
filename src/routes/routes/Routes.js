import { createBrowserRouter } from "react-router-dom";
import Login from "../../forms/login/Login";
import Register from "../../forms/register/Register";
import Main from "../../layout/Main";
import Banner from "../../pages/banner/Banner";
import Blogs from "../../pages/Blogs/Blogs";
import Category from "../../pages/category/Category";
import Checkout from "../../pages/checkout/Checkout";
import Details from "../../pages/details/Details";
import Faq from "../../pages/Faq/Faq";
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
        loader: () =>
          fetch(
            "https://educational-assignment-ten-server.vercel.app/frameworks"
          ),
      },
      {
        path: "/",
        element: <Banner></Banner>,
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
          fetch(
            `https://educational-assignment-ten-server.vercel.app/details/${params.id}`
          ),
      },
      {
        path: "/checkout/:id",
        element: (
          <PrivateRoute>
            <Checkout></Checkout>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://educational-assignment-ten-server.vercel.app/details/${params.id}`
          ),
      },
      {
        path: "*",
        element: <div>Route matching: False</div>,
      },
      {
        path: "/blog",
        element: <Blogs></Blogs>,
      },
      {
        path: "/faq",
        element: <Faq></Faq>,
      },
    ],
  },
]);
