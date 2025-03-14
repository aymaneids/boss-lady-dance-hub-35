
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="mb-6">
              <Link to="/" className="flex items-center space-x-2">
                <span className="text-2xl font-display font-bold gradient-text">BOSS LADY</span>
                <span className="text-xs font-medium uppercase tracking-widest text-gray-400">Dance Co</span>
              </Link>
            </div>
            <p className="text-gray-400 mb-6">
              Empowering young dancers through discipline, excellence, and artistic expression since 2015.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors" aria-label="YouTube">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-gray-800 pb-2">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/programs" className="text-gray-400 hover:text-white transition-colors">Programs & Classes</Link>
              </li>
              <li>
                <Link to="/events" className="text-gray-400 hover:text-white transition-colors">Events & Competitions</Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-400 hover:text-white transition-colors">Photo Gallery</Link>
              </li>
              <li>
                <Link to="/join" className="text-gray-400 hover:text-white transition-colors">Join the Team</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-gray-800 pb-2">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={18} className="text-purple-400 mr-3 mt-1" />
                <span className="text-gray-400">123 Dance Avenue, Los Angeles, CA 90001</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-purple-400 mr-3" />
                <span className="text-gray-400">(123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-purple-400 mr-3" />
                <span className="text-gray-400">info@bossladydanceco.com</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-gray-800 pb-2">Studio Hours</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span className="text-gray-400">Monday - Friday</span>
                <span className="text-white">3:00 PM - 9:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-400">Saturday</span>
                <span className="text-white">9:00 AM - 5:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-400">Sunday</span>
                <span className="text-white">Closed</span>
              </li>
            </ul>
            
            <div className="mt-6 pt-6 border-t border-gray-800">
              <Link to="/contact" className="inline-block px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>&copy; {currentYear} Boss Lady Dance Co. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
