import React, { Suspense } from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { LoginPage, HomePage, RegisterPage } from "../../pages";
import { useAuth } from "../../context/AuthContext";
import { LoadingComponent, NotFound } from "../../components/common";

const PrivateRoutes = () => {
  const { authenticated } = useAuth();
  // if (!authenticated) {
  //   return <Navigate to={"/login"} replace />;
  // }
  return <Outlet />;
};
const RoutesComponent = () => {
  return (
    <Routes>
      <Route
        path="/login"
        element={
          <Suspense fallback={<LoadingComponent />}>
            <LoginPage />
          </Suspense>
        }
      />

      <Route path="/register" element={<RegisterPage />} />
      <Route path="*" element={<NotFound />} />
      <Route element={<PrivateRoutes />}>
        <Route path="/" element={<HomePage />} />
      </Route>
    </Routes>
  );
};

export default RoutesComponent;
