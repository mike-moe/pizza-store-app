import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { LoginPage, HomePage, RegisterPage } from "../../pages";
import { useAuth } from "../../context/AuthContext";

const PrivateRoutes = () => {
  const { authenticated } = useAuth();
  if (!authenticated) {
    return <Navigate to={"/login"} replace />;
  }
  return <Outlet />;
};
const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route element={<PrivateRoutes />}>
        <Route path="/" element={<HomePage />} />
      </Route>
    </Routes>
  );
};

export default RoutesComponent;
