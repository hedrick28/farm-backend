import React from "react";
//Admin pages
const Dashboard = React.lazy(() => import("./pages/admin/Dashboard"));
const Profile = React.lazy(() => import("./pages/admin/Profile"));

const routes = [
  { path: "/admin/dashboard", element: Dashboard },
  {
    path: "/admin/profile",
    element: Profile,
  },
];

export default routes;
