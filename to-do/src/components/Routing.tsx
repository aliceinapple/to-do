import { Route, Routes } from "react-router-dom";
import AuthPage from "../pages/AuthPage";
import WelcomePage from "../pages/WelcomePage";
import MainPage from "../pages/MainPage";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/main" element={<MainPage />} />
      <Route path="/auth" element={<AuthPage />} />
    </Routes>
  );
};

export default Routing;
