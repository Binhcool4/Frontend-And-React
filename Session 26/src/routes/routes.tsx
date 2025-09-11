import { createBrowserRouter } from "react-router-dom";
import ProductDetail from "../components/ProductDetail";
import Student from "../pages/Student";
import Students from "../components/Student";
import NotFound from "../pages/NotFound";
import Login from "../components/Login";
import Account from "../components/Account";
import PrivateRouter from "../components/PrivateRouter";
import Teams from "../components/Teams";
import TeamsIndex from "../components/TeamsIndex";
import Team from "../components/Team";
import React from "react";
const LazyLoadComp = React.lazy(() => import("../components/LazyLoadComp"));
export const routers = createBrowserRouter([
  {
    path: "/teams",
    element: <Teams />,
    children: [
      { index: true, element: <TeamsIndex /> },
      { path: ":teamId", element: <Team /> },
    ],
  },
  {
    path: "/product/:id",
    element: <ProductDetail />,
  },
  {
    path: "/student",
    element: <Student />,
  },
  {
    path: "/student/:name",
    element: <Students />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/account",
    element: (
      <PrivateRouter>
        <Account />
      </PrivateRouter>
    ),
  },
  {
    path: "/lazy",
    element: (
      <React.Suspense fallback={<div>Loading...</div>}>
        <LazyLoadComp />
      </React.Suspense>
    ),
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);