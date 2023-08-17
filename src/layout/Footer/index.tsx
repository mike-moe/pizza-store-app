import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white py-8 h-48">
      <div className="flex justify-center space-x-4">
        <Link to="#" className="text-gray-500 hover:text-blue-500">
          <FaFacebookSquare />
        </Link>
        <Link to="#" className="text-gray-500 hover:text-blue-500">
          <FaTwitterSquare />
        </Link>
        <Link to="#" className="text-gray-500 hover:text-blue-500">
          <FaLinkedin />
        </Link>
        <Link to="#" className="text-gray-500 hover:text-blue-500">
          <FaInstagramSquare />
        </Link>
      </div>
      <div className="flex justify-center mt-4 space-x-6">
        <Link to="/terms" className="text-gray-500 hover:text-blue-500">
          Terms &amp; Conditions
        </Link>
        <Link to="/privacy" className="text-gray-500 hover:text-blue-500">
          Privacy Policy
        </Link>
      </div>
      <div className="text-center mt-8 text-gray-500">&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
