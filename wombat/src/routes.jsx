import * as React from "react";

import paths from "./paths.js";
import NoMatch from "./pages/NoMatch.jsx";
import AuthLayout from "./layouts/auth.jsx";
import Login from "./pages/auth/Login.jsx";
import Code from "./pages/auth/Code.jsx";
import MainLayout from "./layouts/main.jsx";
import BranchSelection from "./pages/BranchSelection.jsx";
import Orders from "./pages/Orders.jsx";
import FirmProfile from "./pages/FirmProfile.jsx";
import ProductManagement from "./pages/ProductManagement.jsx";
import IngredientOptions from "./pages/IngredientOptions.jsx";

let routes = [
  {
    element: <AuthLayout />,
    children: [
      { path: paths.main, element: <Login /> },
      { path: paths.code, element: <Code /> },
    ],
  },

  {
    element: <MainLayout />,
    children: [
      { path: paths.branchSelection, element: <BranchSelection /> },
      { path: paths.orders, element: <Orders /> },
      { path: paths.firmProfile, element: <FirmProfile /> },
      { path: paths.productManagement, element: <ProductManagement /> },
      { path: paths.ingredientOptions, element: <IngredientOptions /> },
    ],
  },
  {
    path: "*",
    element: <NoMatch />,
  },
];

export default routes;
