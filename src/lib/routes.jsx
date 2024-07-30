import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Layout from "../Layout";

const router = createBrowserRouter(
    [
        {
            path:'/',
            element: <Layout />,
            children: [
            {
                path: "home",
                element: <Home />
            }
        ]
        },
        {
            path: "/login",
            element: <Login />
        }
    ]
)

export default router;