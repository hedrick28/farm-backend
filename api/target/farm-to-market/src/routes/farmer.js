import React from "react";
const Dashboard = React.lazy(() => import("../pages/retailer/Dashboard"));
const Profile = React.lazy(() => import("../pages/retailer/Profile"));
const AddPRoduct = React.lazy(() => import("../pages/retailer/AddProduct"));
const Products = React.lazy(() => import("../pages/retailer/Products"));
const Details = React.lazy(() => import("../pages/retailer/Details"));
const EditProduct = React.lazy(() => import("../pages/retailer/EditProduct"));
const routes = [
  { path: "/dashboard", exact: true, element: Dashboard },
  { path: "/profile", element: Profile },
  { path: "/product/add", element: AddPRoduct },
  { path: "/products", element: Products },
  { path: "/product/details/:id", element: Details },
  { path: "/product/edit/:id", element: EditProduct },
];

export default routes;
