import React from "react";
import AdminContent from "../components/AdminContent";
import SupplierContent from "../components/SupplierContent";

const AdminLayout = () => {
  const sample = true;
  return <div>{sample ? <AdminContent /> : <SupplierContent />}</div>;
};

export default AdminLayout;
