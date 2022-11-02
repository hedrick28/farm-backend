import React from "react";
//Admin pages
const Dashboard = React.lazy(() => import("../pages/admin/Dashboard"));
const Profile = React.lazy(() => import("../pages/admin/Profile"));
const Tips = React.lazy(() => import("../pages/admin/Tips"));
const AddTip = React.lazy(() => import("../pages/admin/AddTip"));
const TipDetails = React.lazy(() => import("../pages/admin/TipDetails"));
const UpdateTip = React.lazy(() => import("../pages/admin/UpdateTip"));

const routes = [
  { path: "/dashboard", element: Dashboard },
  {
    path: "/profile",
    element: Profile,
  },
  { path: "/tips", element: Tips },
  { path: "/create/tip", element: AddTip },
  { path: "/tip/details/:id", element: TipDetails },
  { path: "/tip/edit/:id", element: UpdateTip },
];

export default routes;
