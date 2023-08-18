import { Navigate } from "react-router";
import { LoginContainer } from "../../containers";
import { useAuth } from "../../context/AuthContext";

const LoginPage = () => {
  const { authenticated } = useAuth();
  if (authenticated) {
    return <Navigate to={"/"} replace />;
  }
  return (
    <div className="w-full flex flex-grow justify-center">
      <LoginContainer />
    </div>
  );
};

export default LoginPage;
