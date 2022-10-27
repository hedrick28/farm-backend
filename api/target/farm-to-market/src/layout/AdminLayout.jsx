import React from "react";
import AdminContent from "../components/AdminContent";
import AdminSidebar from "../components/sidebar/AdminSidebar";
import SupplierContent from "../components/SupplierContent";

const AdminLayout = () => {
  const sample = true;
  return (
    <div className="d-flex default-bg">
      <AdminSidebar />
      {sample ? <AdminContent /> : <SupplierContent />}
    </div>
  );
};

export default AdminLayout;
