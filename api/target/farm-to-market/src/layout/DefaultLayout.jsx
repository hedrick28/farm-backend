import React from "react";
import AdminContent from "../components/AdminContent";
import Supplier from "../components/RetailerContent";
import AdminSidebar from "../components/sidebar/AdminSidebar";
import Magsasaka from "../components/SupplierContent";
import { getUserInfo } from "../services/userInf";

const AdminLayout = () => {
  const userInfo = getUserInfo();
  const sample = true;
  if (userInfo && userInfo.data.role === "admin") {
    return (
      <div className="d-flex default-bg">
        <AdminSidebar />
        <AdminContent />
      </div>
    );
  } else if (userInfo && userInfo.data.role === "magsasaka") {
    <div className="d-flex default-bg">
      <Magsasaka />
    </div>;
  } else if (userInfo && userInfo.data.role === "supplier") {
    <Supplier />;
  }
};

export default AdminLayout;
