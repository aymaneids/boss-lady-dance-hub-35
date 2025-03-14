
import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Home } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const NotFound: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6 py-24 text-center">
          <div className="max-w-md mx-auto">
            <h1 className="gradient-text text-8xl font-bold mb-6">404</h1>
            <p className="text-2xl text-gray-600 dark:text-gray-300 mb-8">Oops! We couldn't find that page.</p>
            <p className="text-gray-500 dark:text-gray-400 mb-10">
              The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
            
            <Link to="/" className="btn-primary inline-flex items-center">
              <Home size={18} className="mr-2" />
              Return to Home
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
