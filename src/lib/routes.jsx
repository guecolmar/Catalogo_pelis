import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Layout from "../Layout";
import DetalleProducto from "../pages/DetalleProducto";
import FormAdd from "../pages/FormAdd";

const router = createBrowserRouter (
    [
        {
            path:'/',
            element: <Layout />,
            children: [
            {
                path: "home",
                element: <Home />
            },
            {
                path: "home:id",
                element: <DetalleProducto />
            },
            {
                path: "addpelis",
                element: <FormAdd />
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