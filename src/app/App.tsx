import Layout from "../layout";
import RoutesComponent from "./routes";
import {BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <RoutesComponent />
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
