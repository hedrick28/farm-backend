import "./App.css";
import Login from "./pages/login/Login";
import ForgotPassword from "./pages/forgotpassword/ForgotPassword";
import RegisterPage from "./pages/register/RegisterPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./scss/style.scss";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <ToastContainer />
          <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/ForgotPassword" element={<ForgotPassword />}></Route>
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
