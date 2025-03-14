
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [{
    text: "Home",
    href: "/"
  }, {
    text: "About",
    href: "/about"
  }, {
    text: "Programs",
    href: "/programs"
  }, {
    text: "Events",
    href: "/events"
  }, {
    text: "Gallery",
    href: "/gallery"
  }, {
    text: "Contact",
    href: "/contact"
  }];

  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 dark:bg-black/90 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-display font-bold gradient-text">BOSS LADY</span>
          <span className="text-xs font-medium uppercase tracking-widest">Dance Co</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, index) => <Link key={index} to={link.href} className="nav-link">
              {link.text}
            </Link>)}

          <Link to="/join" className="btn-primary">
            Join Us
          </Link>
        </div>

        {/* Mobile Navigation Toggle */}
        <button className="md:hidden text-gray-700 dark:text-gray-200 hover:text-purple-500 dark:hover:text-purple-400 transition-colors" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'} bg-white dark:bg-gray-900 shadow-lg absolute top-full left-0 right-0`}>
        <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
          {navLinks.map((link, index) => <Link key={index} to={link.href} className="text-lg py-2 border-b border-gray-100 dark:border-gray-800" onClick={() => setIsMenuOpen(false)}>
              {link.text}
            </Link>)}
          <Link to="/join" className="btn-primary text-center" onClick={() => setIsMenuOpen(false)}>
            Join Us
          </Link>
        </div>
      </div>
    </header>;
};

export default Navbar;
