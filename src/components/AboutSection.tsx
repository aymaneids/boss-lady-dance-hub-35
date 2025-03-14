
import React, { useEffect, useRef } from 'react';
import { Trophy, Heart, Star } from 'lucide-react';

const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => {
      observer.observe(el);
    });
    
    return () => {
      elements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  const features = [
    {
      icon: <Trophy className="h-10 w-10 text-purple-500" />,
      title: "Award-Winning",
      description: "Our team has competed and won at regional and national dance competitions."
    },
    {
      icon: <Heart className="h-10 w-10 text-purple-500" />,
      title: "Passionate Instructors",
      description: "Experienced coaches who bring out the best in every dancer."
    },
    {
      icon: <Star className="h-10 w-10 text-purple-500" />,
      title: "Excellence in Performance",
      description: "Training that focuses on technique, precision, and showmanship."
    }
  ];

  return (
    <section ref={sectionRef} id="content-section" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 reveal opacity-0" style={{ transitionDelay: '0.1s' }}>
          <h2 className="section-heading">About Boss Lady Dance Co</h2>
          <p className="section-subheading">
            Empowering young dancers through discipline, technique, and team spirit.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="reveal opacity-0" style={{ transitionDelay: '0.3s' }}>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-64 h-64 bg-purple-200 rounded-lg -z-10"></div>
              <div className="absolute -bottom-4 -right-4 w-64 h-64 bg-gold-200 rounded-lg -z-10"></div>
              <div className="relative h-full w-full overflow-hidden rounded-lg shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1050&q=80"
                  alt="Dance team performance"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="space-y-6 reveal opacity-0" style={{ transitionDelay: '0.5s' }}>
            <h3 className="text-3xl font-bold font-display">Our Story</h3>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Founded with a vision to create a premier dance team that challenges and inspires young dancers, Boss Lady Dance Co has grown from a small local team to a renowned competitive dance company.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Our mission is to nurture talent, build confidence, and develop leadership skills through the discipline of dance. We believe in hard work, dedication, and the transformative power of artistic expression.
            </p>
            
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="text-center p-4 rounded-lg transition-all hover:shadow-lg">
                  <div className="inline-flex items-center justify-center p-3 bg-purple-100 dark:bg-purple-900 rounded-full mb-4">
                    {feature.icon}
                  </div>
                  <h4 className="font-bold text-lg mb-2">{feature.title}</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
