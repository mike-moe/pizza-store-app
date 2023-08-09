import { Route, Routes } from "react-router-dom";
import { LoginPage, HomePage, RegisterPage } from "../../pages";
const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
};

export default RoutesComponent;
