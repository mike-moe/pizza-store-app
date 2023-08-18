import React, { Suspense } from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { LoginPage, HomePage, RegisterPage, CheckoutPage } from "../../pages";
import { useAuth } from "../../context/AuthContext";
import { LoadingComponent, NotFound } from "../../components/common";
import { routes } from "../../services";

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
        path={routes.login}
        element={
          <Suspense fallback={<LoadingComponent />}>
            <LoginPage />
          </Suspense>
        }
      />
      <Route path={routes.register} element={<RegisterPage />} />
      <Route path="*" element={<NotFound />} />
      <Route element={<PrivateRoutes />}>
        <Route path={routes.home} element={<HomePage />} />
        <Route path={routes.checkout} element={<CheckoutPage />} />
      </Route>
    </Routes>
  );
};

export default RoutesComponent;
