import React from "react";
import Home from "../utilities/Container/Home/Home";

export const routes = [
  {
    path: "/",
    exact: true,
    main: (routeProps) => <Home {...routeProps} />,
  },
];
