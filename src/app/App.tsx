import { BrowserRouter } from "react-router-dom";
import AuthProvider from "../context/AuthContext";
import Header from "../layout/Header";
import RoutesComponent from "./routes";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
function App() {
  const queryClient = new QueryClient()
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <AuthProvider>
            <Header />
            <RoutesComponent />
          </AuthProvider>
          <ReactQueryDevtools initialIsOpen={false} />
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

export default App;
