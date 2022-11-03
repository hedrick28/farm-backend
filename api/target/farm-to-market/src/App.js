import React, { Suspense } from "react";
import "./App.css";
import Login from "./pages/login/Login";
import ForgotPassword from "./pages/forgotpassword/ForgotPassword";
import RegisterPage from "./pages/register/RegisterPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./scss/style.scss";
import { ToastContainer } from "react-toastify";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Profile from "./pages/retailer/Profile";
const Landing = React.lazy(() => import("./pages/landing/Landing"));
const DefaultLayout = React.lazy(() => import("./layout/DefaultLayout"));
const ProductDetails = React.lazy(() =>
  import("./pages/product/ProductDetails")
);

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Header />
      <Suspense>
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/ForgotPassword" element={<ForgotPassword />}></Route>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element={<DefaultLayout />} />
          <Route path="/details/product/:id" element={<ProductDetails />} />
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
