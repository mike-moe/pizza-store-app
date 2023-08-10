import React from "react";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 ">
      <h1 className="text-4xl font-semibold mb-4">Oops! Page Not Found</h1>
      <p className="text-lg text-gray-600 mb-8">It seems you're lost in the sauce.</p>
      <Link to="/" className="px-4 py-2 outline  text-orange font-bold rounded-md hover:bg-gray-200 transition duration-300">
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
