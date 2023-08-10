import { BrowserRouter } from "react-router-dom";
import AuthProvider from "../context/AuthContext";
import Header from "../layout/Header";
import RoutesComponent from "./routes";

function App() {
  
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Header />
          <RoutesComponent />
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
