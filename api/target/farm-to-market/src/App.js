import React from "react";
import "./App.css";
import Login from "./pages/login/Login";
import ForgotPassword from "./pages/forgotpassword/ForgotPassword";
import RegisterPage from "./pages/register/RegisterPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./scss/style.scss";
import { ToastContainer } from "react-toastify";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import AddCropPage from "./pages/crop/AddCropPage";
import Profile from "./pages/profile/Profile";
const Landing = React.lazy(() => import("./pages/landing/Landing"));
const AdminLayout = React.lazy(() => import("./layout/AdminLayout"));

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Header />
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/ForgotPassword" element={<ForgotPassword />}></Route>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/addCrop" element={<AddCropPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<AdminLayout />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
