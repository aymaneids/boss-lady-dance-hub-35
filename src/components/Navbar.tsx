
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();

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

  const NavLinks = () => (
    <>
      {navLinks.map((link, index) => (
        <Link key={index} to={link.href} className="nav-link text-gray-800 dark:text-gray-200">
          {link.text}
        </Link>
      ))}
      <Link to="/join" className="btn-primary">
        Join Us
      </Link>
    </>
  );

  const MobileNavLinks = ({ onLinkClick }: { onLinkClick?: () => void }) => (
    <div className="flex flex-col space-y-4 py-4">
      {navLinks.map((link, index) => (
        <Link 
          key={index} 
          to={link.href} 
          className="text-lg py-2 border-b border-gray-100 dark:border-gray-800 text-gray-800"
          onClick={onLinkClick}
        >
          {link.text}
        </Link>
      ))}
      <Link 
        to="/join" 
        className="btn-primary text-center mt-4" 
        onClick={onLinkClick}
      >
        Join Us
      </Link>
    </div>
  );

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-white'}`}>
      <nav className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-display font-bold gradient-text">BOSS LADY</span>
          <span className="text-xs font-medium uppercase tracking-widest">Dance Co</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLinks />
        </div>

        {/* Mobile Navigation with Sheet */}
        {isMobile && (
          <Sheet>
            <SheetTrigger asChild>
              <button 
                className="md:hidden text-gray-800 dark:text-gray-200 hover:text-purple-500 dark:hover:text-purple-400 transition-colors" 
                aria-label="Open menu"
              >
                <Menu size={24} />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[350px]">
              <div className="mt-8 px-2">
                <MobileNavLinks onLinkClick={() => document.body.click()} />
              </div>
            </SheetContent>
          </Sheet>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
