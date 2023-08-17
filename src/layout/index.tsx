import Footer from "./Footer";
import Header from "./Header";
import { LayoutProps } from "./Layout";

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <div className="md:container mx-auto md:mt-10 mt-5">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
