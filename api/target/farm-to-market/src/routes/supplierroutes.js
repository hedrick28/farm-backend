import React from "react";
const Dashboard = React.lazy(() => import("../pages/supplier/Dashboard"));
const Profile = React.lazy(() => import("../pages/supplier/Profile"));

const routes = [
  { path: "/dashboard", exact: true, element: Dashboard },
  { path: "/profile", exact: true, element: Profile },
];

export default routes;
