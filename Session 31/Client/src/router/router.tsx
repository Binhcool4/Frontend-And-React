import { createBrowserRouter } from "react-router-dom";
import Layout from "../component/Layout";

export const router = createBrowserRouter([
    {
        path: "/list-post",
        element: <Layout></Layout>
    }
])