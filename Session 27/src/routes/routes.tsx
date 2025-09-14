import { createBrowserRouter } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import About from "../pages/About";

import Product from "../pages/Product";
import Detail from "../pages/Detail";
import TaskList from "../pages/TaskList";
import TaskDetail from "../pages/TaskDetail";

import Layout from "../components/Layout";
import Ex2 from "../components/Ex2";
import Ex3 from "../components/Ex3";
import BlogLayout from "../components/BlogLayout";
import Posts from "../pages/Posts";
import PostDetail from "../pages/PostDetail";
import ProductList from "../pages/ProductList";
import ProductDetail from "../pages/ProductDetail";
import LayoutEx06 from "../components/LayoutEx06";
import Homepage from "../pages/Homepage";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";

export const routers = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
  {
    path: "/products",
    element: <Ex2 />,
    children: [
      { path: "/products", element: <ProductList /> },
      { path: ":id", element: <ProductDetail /> },
    ],
  },
  {
    path: "/tasks",
    element: <Ex3 />,
    children: [
      { path: "/tasks", element: <TaskList /> },
      { path: ":id", element: <TaskDetail /> },
    ],
  },
  {
    path: "/blog",
    element: <BlogLayout />,
    children: [
      { path: "posts", element: <Posts /> },
      { path: "posts/:id", element: <PostDetail /> },
    ],
  },

  { path: "*", element: <NotFound /> },
  {
    path: "/ex06",
    element: <LayoutEx06 />,
    children: [
      { path: "/ex06", element: <Homepage /> },
      { path: "/ex06/product", element: <Product /> },
      { path: "/ex06/detail", element: <Detail /> },
    ],
  },
  {
    path: "/login",
    element: <LoginForm />,
  },
  {
    path: "/register",
    element: <RegisterForm />,
  }
]);
