
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      
      <div className="pt-28 pb-16 bg-gradient-to-r from-purple-600 to-purple-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <span className="inline-block px-4 py-1 mb-6 text-xs uppercase tracking-wider font-semibold bg-white text-purple-600 rounded-full">Get in Touch</span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-display">Contact Us</h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            We'd love to hear from you. Reach out with questions about our programs, enrollment, or performances.
          </p>
        </div>
      </div>
      
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 gradient-text">Send Us a Message</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Fill out the form below and we'll get back to you as soon as possible. We aim to respond to all inquiries within 24-48 hours.
              </p>
              
              <ContactForm />
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-6 gradient-text">Contact Information</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Have questions or want to learn more about our programs? Reach out to us directly or visit our studio.
              </p>
              
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 shadow-lg mb-8">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300">
                        <MapPin size={24} />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium">Our Location</h3>
                      <p className="mt-1 text-gray-600 dark:text-gray-400">
                        123 Dance Avenue<br />
                        Los Angeles, CA 90001<br />
                        United States
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300">
                        <Phone size={24} />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium">Phone</h3>
                      <p className="mt-1 text-gray-600 dark:text-gray-400">
                        Main: (123) 456-7890<br />
                        Enrollment: (123) 456-7891
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300">
                        <Mail size={24} />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium">Email</h3>
                      <p className="mt-1 text-gray-600 dark:text-gray-400">
                        General: info@bossladydanceco.com<br />
                        Enrollment: join@bossladydanceco.com
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300">
                        <Clock size={24} />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium">Office Hours</h3>
                      <p className="mt-1 text-gray-600 dark:text-gray-400">
                        Monday - Friday: 3:00 PM - 9:00 PM<br />
                        Saturday: 9:00 AM - 5:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
              <div className="flex space-x-4 mb-8">
                <a href="#" className="flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 text-white hover:from-purple-600 hover:to-purple-700 transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 text-white hover:from-purple-600 hover:to-purple-700 transition-colors">
                  <Facebook size={20} />
                </a>
              </div>
              
              <div className="rounded-xl overflow-hidden h-80 shadow-lg">
                {/* Here you would normally embed a Google Map */}
                <div className="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                  <p className="text-gray-500 dark:text-gray-400">Google Map Embed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
