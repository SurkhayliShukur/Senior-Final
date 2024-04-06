import React from "react";
import { Dashboard, Customers, Products, Statistics } from "../layouts";

export const SIDEBAR_ROUTES = [
    {
        path: "/dashboard",
        name: "Dashboard",
        icon: <i className="bi bi-grid"/>,
        element: (props) => <Dashboard {...props} />
    },
    {
        path: "/customers",
        name: "Customers",
        icon: <i className="bi bi-person-video" />,
        element: (props) => <Customers {...props} />
    },
    {
        path: "/products",
        name: "Products",
        icon: <i className="bi bi-box-seam" />,
        element: (props) => <Products {...props} />
    },
    {
        path: "/statistics",
        name: "Statistics",
        icon: <i className="bi bi-bar-chart" />,
        element: (props) => <Statistics {...props} />
    },
]