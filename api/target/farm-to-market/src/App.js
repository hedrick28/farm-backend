import "./App.css";
import Login from "./pages/login/Login";
import ForgotPassword from "./pages/forgotpassword/ForgotPassword";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/ForgotPassword" element={<ForgotPassword />}></Route>
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
