import React from "react";
const Dashboard = React.lazy(() => import("./pages/supplier/Dashboard"));
const Profile = React.lazy(() => import("./pages/supplier/Profile"));

const routes = [
  { path: "/farmer/dashboard", exact: true, element: Dashboard },
  { path: "farmer/profile", exact: true, element: Profile },
];

export default routes;
