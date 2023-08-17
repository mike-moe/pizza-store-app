import { Navigate } from "react-router";
import { LoginContainer } from "../../containers";
import { useAuth } from "../../context/AuthContext";

const LoginPage = () => {
  const { authenticated } = useAuth();
  if (authenticated) {
    return <Navigate to={"/"} replace />;
  }
  return (
    <div className="w-full flex flex-shrink justify-center py-8 md:py-14">
      <LoginContainer />
    </div>
  );
};

export default LoginPage;
