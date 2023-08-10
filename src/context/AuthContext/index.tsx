import { createContext, useContext, useState } from "react";
type AuthContextProps = {
  children?: React.ReactNode;
};
type AuthProviderProps = {
  authenticated: boolean;
  setAuthenticated: (value: boolean) => void;
};
const initialValues = {
  authenticated: false,
  setAuthenticated: (value: boolean) => {},
};
const AuthContext = createContext<AuthProviderProps>(initialValues);
export const useAuth = () => {
  return useContext(AuthContext);
};
const AuthProvider = ({ children }: AuthContextProps) => {
  const [authenticated, setAuthenticated] = useState<boolean>(initialValues.authenticated);
  return <AuthContext.Provider value={{ authenticated, setAuthenticated }}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
