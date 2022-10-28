import React from "react";
const Dashboard = React.lazy(() => import("../pages/retailer/Dashboard"));
const Profile = React.lazy(() => import("../pages/retailer/Profile"));
const routes = [
  { path: "/dashboard", exact: true, element: Dashboard },
  { path: "/profile", element: Profile },
];

export default routes;
