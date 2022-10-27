import React from "react";
import AdminContent from "../components/AdminContent";
import Supplier from "../components/SupplierContent";
import AdminSidebar from "../components/sidebar/AdminSidebar";
import Magsasaka from "../components/RetailerContent";
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
    return (
      <div className="d-flex default-bg">
        <Magsasaka />
      </div>
    );
  } else if (userInfo && userInfo.data.role === "supplier") {
    return (
      <div className="d-flex default-bg">
        <Supplier />
      </div>
    );
  }
};

export default AdminLayout;
