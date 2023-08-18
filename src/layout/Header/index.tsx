import React, { useState, useEffect, useRef, ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/images/logo.jpg";
import { routes } from "../../services";
import { FaRegUserCircle, FaShoppingBag, FaShoppingCart, FaSignInAlt, FaUserAlt } from "react-icons/fa";
import { ButtonComponent } from "../../components/common";
import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase";
import { useAuth } from "../../context/AuthContext";
const Header = () => {
  const { authenticated } = useAuth();
  const location = useLocation();
  console.log(location);
  return (
    <header>
      <nav className="bg-orange h-20 sticky top-0 text-white flex justify-around items-center px-5">
        <Link to={routes.home}>
          <img src={logo} alt="logo" className="h-16 cursor-pointer rounded-full hover:scale-110 p-1 transition-all" />
        </Link>
        <div className="flex justify-between flex-row">
          {authenticated ? (
            <>
              <span className="cursor-pointer flex flex-row items-center mx-4 ">
                <FaShoppingBag />
                <Link to={routes.login} className="mx-2 cursor-pointer">
                  Order
                </Link>
              </span>
              <UserItems />
            </>
          ) : location.pathname !== "/login" ? (
            <>
              <span className="cursor-pointer flex flex-row items-center mx-4 ">
                <Link to={routes.login} className="mx-2 cursor-pointer">
                  <button className="bg-transparent hover:scale-110 py-1 px-2 transition-all flex items-center justify-between outline border-white rounded">
                    <span className="mr-2">
                      <FaRegUserCircle />
                    </span>
                    <span className="uppercase">Login</span>
                  </button>
                </Link>
                <Link to={routes.checkout} className="mx-2 cursor-pointer">
                  <button className="bg-transparent hover:scale-110 py-1 px-2 transition-all flex items-center justify-between outline border-white rounded">
                    <span className="mr-2">
                      <FaShoppingCart />
                    </span>
                    <span className="uppercase">Cart</span>
                  </button>
                </Link>
              </span>
            </>
          ) : null}
        </div>
      </nav>
    </header>
  );
};
export const UserItems = () => {
  const { setAuthenticated } = useAuth();

  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = () => {
    setIsOpen(false);
  };
  const signOutHandler = async () => {
    try {
      await signOut(auth).then(() => {
        setAuthenticated(false);
      });
    } catch (error) {
      console.log(error);
    }
  };
  const options: ReactNode[] = [
    <ButtonComponent
      onClick={signOutHandler}
      type="button"
      className="bg-transparent  border-none hover:scale-110 font-bold p-2"
      children={
        <div className="flex row-auto items-center justify-center">
          <span className="ml-2">Logout</span>
        </div>
      }
    />,
  ];
  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current?.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <>
      <div className="relative inline-block text-left" ref={dropdownRef}>
        <div>
          <button
            type="button"
            className="inline-flex outline justify-center border-white  p-3 bg-transparent rounded-full text-sm font-medium"
            id="options-menu"
            aria-haspopup="true"
            onClick={toggleDropdown}
          >
            <FaUserAlt />
          </button>
        </div>

        {isOpen && (
          <div
            className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <div className="py-1" role="none">
              {options.map((option: React.ReactNode, index: number) => (
                <div key={index} onClick={handleOptionSelect} className="block px-4 py-2 text-sm text-gray-700 w-full text-left" role="menuitem">
                  {option}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default Header;
