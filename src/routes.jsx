import * as React from "react";

import { paths } from "./paths.js";
import NoMatch from "./pages/NoMatch.jsx";
import MainLayout from "./layouts/main.jsx";
import CreateLayout from "./layouts/create.jsx";
import Home from "./pages/Home.jsx";
import Jobs from "./pages/jobs/index.jsx";
import Details from "./pages/jobs/Details.jsx";
import CreateJob from "./pages/CreateJob.jsx";
import AuthLayout from "./layouts/auth.jsx";
import Login from "./pages/auth/Login.jsx";
import SignUp from "./pages/auth/SignUp.jsx";
import ForgotPassword from "./pages/auth/ForgotPassword.jsx";
import BeforeStarted from "./pages/auth/BeforeStarted.jsx";

let routes = [
  {
    element: <AuthLayout />,
    children: [
      { path: paths.login, element: <Login /> },
      { path: paths.signup, element: <SignUp /> },
      { path: paths.forgot_password, element: <ForgotPassword /> },
      { path: paths.before_start, element: <BeforeStarted /> },
    ],
  },
  {
    element: <MainLayout />,
    children: [
      { path: paths.main, element: <Home /> },
      { path: paths.jobs, element: <Jobs /> },
      { path: paths.candidates, element: <Home /> },
      { path: paths.talent_pools, element: <Home /> },
      { path: paths.reports, element: <Home /> },
      { path: paths.campaigns, element: <Home /> },
      { path: paths.settings, element: <Home /> },
    ],
  },
  {
    element: <MainLayout full />,
    children: [{ path: paths.job_details, element: <Details /> }],
  },
  {
    element: <CreateLayout />,
    children: [{ path: paths.create_job, element: <CreateJob /> }],
  },
  {
    path: "*",
    element: <NoMatch />,
  },
];

export default routes;
