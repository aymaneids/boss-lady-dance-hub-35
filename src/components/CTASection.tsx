
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTASection: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-800"></div>
      
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-40 h-40 bg-white rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-gold-400 rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-purple-300 rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">Ready to Join the Boss Lady Family?</h2>
          <p className="text-xl text-purple-100 mb-10">
            Enrollment is now open for all age groups. Secure your spot and begin your journey to dance excellence!
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/join" className="btn-secondary flex items-center justify-center">
              <span>Apply Now</span>
              <ArrowRight size={18} className="ml-2" />
            </Link>
            
            <Link to="/programs" className="px-6 py-3 bg-transparent border-2 border-white text-white font-medium rounded-md hover:bg-white/10 transition-colors duration-300">
              Explore Programs
            </Link>
          </div>
          
          <p className="mt-8 text-purple-200 text-sm">
            Limited spots available. Registration closes June 30th.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
