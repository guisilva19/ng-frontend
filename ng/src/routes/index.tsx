import { Navigate, Route, Routes } from "react-router-dom";
import ContextProvider from "../context/AuthContext";
import DashBoard from "../pages/Dashboard/Dashboard";
import Register from "../pages/Register/Register";
import Session from "../pages/Session/Session";

const RoutesMain = () => {
  return (
    <ContextProvider>
      <Routes>
        <Route path="/session" element={<Session />} />;
        <Route path="/register" element={<Register />} />;
        <Route path="/dashboard" element={<DashBoard />} />;
        <Route path="*" element={<Navigate replace to="/session" />} />
      </Routes>
    </ContextProvider>
  );
};

export default RoutesMain;
