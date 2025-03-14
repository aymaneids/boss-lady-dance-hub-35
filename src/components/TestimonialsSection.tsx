
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      quote: "Boss Lady Dance Co has transformed my daughter's confidence both on and off the dance floor. The instructors are exceptional.",
      author: "Michelle R.",
      role: "Parent of Junior Elite dancer",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1124&q=80"
    },
    {
      quote: "The team spirit and discipline my child has learned here extends beyond dance into academics and personal growth.",
      author: "David T.",
      role: "Parent of Teen Performance dancer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1124&q=80"
    },
    {
      quote: "As a senior dancer, I've grown so much technically and personally through the mentorship of our incredible coaches.",
      author: "Kayla S.",
      role: "Senior Company dancer",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1124&q=80"
    },
  ];

  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000);

    return () => clearInterval(interval);
  }, [current]);

  const nextTestimonial = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setTimeout(() => {
      setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
      setIsAnimating(false);
    }, 500);
  };

  const prevTestimonial = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setTimeout(() => {
      setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
      setIsAnimating(false);
    }, 500);
  };

  return (
    <section className="py-20 bg-purple-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 reveal opacity-0">
          <h2 className="section-heading">What Our Community Says</h2>
          <p className="section-subheading">
            Hear from our dancers and their parents about their experience with Boss Lady Dance Co.
          </p>
        </div>

        <div className="max-w-5xl mx-auto relative">
          <div className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 opacity-10">
            <Quote size={120} className="text-purple-500" />
          </div>
          
          <div className="relative overflow-hidden bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12">
            <div className={`flex flex-col md:flex-row gap-8 transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
              <div className="md:w-1/3 flex justify-center">
                <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-purple-200 dark:border-purple-700 shadow-lg">
                  <img 
                    src={testimonials[current].image} 
                    alt={testimonials[current].author} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="md:w-2/3 flex flex-col justify-center">
                <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 italic mb-6">
                  "{testimonials[current].quote}"
                </p>
                <div>
                  <h4 className="text-lg font-bold">{testimonials[current].author}</h4>
                  <p className="text-purple-500 dark:text-purple-400">{testimonials[current].role}</p>
                </div>
              </div>
            </div>
            
            <div className="absolute top-1/2 -left-4 transform -translate-y-1/2">
              <button 
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-white dark:bg-gray-700 shadow-md text-gray-600 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} />
              </button>
            </div>
            
            <div className="absolute top-1/2 -right-4 transform -translate-y-1/2">
              <button 
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-white dark:bg-gray-700 shadow-md text-gray-600 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
          
          <div className="mt-8 flex justify-center space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${index === current ? 'bg-purple-500' : 'bg-gray-300 dark:bg-gray-600'}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
