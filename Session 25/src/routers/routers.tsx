import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";
import Detail from "../pages/Detail";
import Product from "../pages/Product";
import HomePage from "../pages/HomePage";
import Ex6 from "../pages/Ex06";



import ListUser from "../component/ListUser";
import UserDetail from "../component/UserDetail";

export const routers = createBrowserRouter([
  {
    path: "/",
    element: <Ex6 />,
  },
  {
    path: "/list-user",
    element: <ListUser />,
  },
  {
    path: "/user-detail/:id",
    element: <UserDetail />,
  },
  {
    path: "/detail",
    element: <Detail />,
  },
  {
    path: "/product",
    element: <Product />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/home-page",
    element: <HomePage />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
