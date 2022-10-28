import React from "react";
const Dashboard = React.lazy(() => import("../pages/retailer/Dashboard"));
const Profile = React.lazy(() => import("../pages/retailer/Profile"));
const EditCropPage = React.lazy(() => import("../pages/crop/EditCropPage"));
const CropPage = React.lazy(() => import("../pages/crop/CropPage"));
const AddPRoduct = React.lazy(() => import("../pages/retailer/AddProduct"));
const Products = React.lazy(() => import("../pages/retailer/Products"));
const routes = [
  { path: "/dashboard", exact: true, element: Dashboard },
  { path: "/profile", element: Profile },
  { path: "/editCrop/:id", element: EditCropPage },
  { path: "/crops", element: CropPage },
  { path: "/product/add", element: AddPRoduct },
  { path: "/products", element: Products },
];

export default routes;
