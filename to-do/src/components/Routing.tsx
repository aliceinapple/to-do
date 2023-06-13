import { Route, Routes, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import AuthPage from "../pages/AuthPage";
import WelcomePage from "../pages/WelcomePage";
import MainPage from "../pages/MainPage";

const Routing = () => {
  const navigate = useNavigate();
  const isSignedIn = localStorage.getItem("token");

  useEffect(() => {
    if (isSignedIn) {
      navigate("/main");
    }
    if (!isSignedIn && location.pathname === "/main") {
      navigate("/");
    }
  }, [isSignedIn, navigate]);

  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/welcome" element={<WelcomePage />} />
      <Route path="/main" element={<MainPage />} />
      <Route path="/auth" element={<AuthPage />} />
    </Routes>
  );
};

export default Routing;
