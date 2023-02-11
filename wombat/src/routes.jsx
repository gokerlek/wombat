import * as React from "react";

import paths from "./paths.js";
import NoMatch from "./pages/NoMatch.jsx";
import AuthLayout from "./layouts/auth.jsx";
import MainLayout from "./layouts/main.jsx";
import Home from "./pages/Home.jsx";

let routes = [
  {
    element: <AuthLayout />,
    children: [{ path: paths.createMenu, element: <NoMatch /> }],
  },

  {
    element: <MainLayout />,
    children: [{ path: paths.main, element: <Home /> }],
  },
  {
    path: "*",
    element: <NoMatch />,
  },
];

export default routes;
