import { BrowserRouter } from "react-router-dom";
import AuthProvider from "../context/AuthContext";
import Header from "../layout/Header";
import RoutesComponent from "./routes";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Footer from "../layout/Footer";
import { CheckoutProvider } from "../context/Checkout";
function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <AuthProvider>
            <Header />
            <CheckoutProvider>
              <RoutesComponent />
            </CheckoutProvider>
            <Footer />
          </AuthProvider>
          {/* <ReactQueryDevtools initialIsOpen={false} /> */}
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

export default App;
