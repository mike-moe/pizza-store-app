import Layout from "../layout";
import Header from "../layout/Header";
import RoutesComponent from "./routes";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Layout> */}
        <Header />
        <RoutesComponent />
        {/* </Layout> */}
      </BrowserRouter>
    </>
  );
}

export default App;
