import React from "react";
import Home from "../utilities/Container/Home/Home";
import Cart from "./Container/Cart/Cart";

export const routes = [
  {
    path: "/",
    exact: true,
    main: (routeProps) => <Home {...routeProps} />,
  },
  {
    path: "/cart",
    exact: true,
    main: (routeProps) => <Cart {...routeProps} />,
  },
];
