import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.jpg";
import { routes } from "../../services";
import { FaShoppingBag, FaSignInAlt } from "react-icons/fa";
const Header = () => {
  return (
    <header>
      <nav className="bg-orange h-20 sticky top-0 text-white flex justify-around items-center px-5">
        <Link to={routes.home}>
          <img src={logo} alt="logo" className="h-16 cursor-pointer rounded-full" />
        </Link>
        <div className="flex justify-between flex-row">
          <span className="cursor-pointer flex flex-row items-center mx-4 ">
            <span>
              <FaSignInAlt />
            </span>
            <Link to={routes.login} className="mx-2 cursor-pointer">
              Login
            </Link>
          </span>
          <span className="cursor-pointer flex flex-row items-center mx-4 ">
            <FaShoppingBag />
            <Link to={routes.login} className="mx-2 cursor-pointer">
              Order
            </Link>
          </span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
