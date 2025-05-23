import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, Phone, MapPin, Clock } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className="bg-blue-700 text-white py-8 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                <span>(123) 456-7890</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                <a href="mailto:info@petstore.com" className="hover:text-blue-300 transition-colors">
                  info@petstore.com
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-5 w-5 mt-1" />
                <span>123 Pet Street<br />Anytown, ST 12345</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" onClick={scrollToTop} className="hover:text-blue-300 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/pet-food" onClick={scrollToTop} className="hover:text-blue-300 transition-colors">Pet Food</Link>
              </li>
              <li>
                <Link to="/about" onClick={scrollToTop} className="hover:text-blue-300 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/cart-checkout" onClick={scrollToTop} className="hover:text-blue-300 transition-colors">Shopping Cart</Link>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Business Hours</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <div>
                  <p>Monday - Friday: 9am - 8pm</p>
                  <p>Saturday: 10am - 6pm</p>
                  <p>Sunday: 11am - 5pm</p>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <h4 className="font-semibold mb-2">Services</h4>
              <ul className="space-y-1">
                <li>
                  <Link to="/pet-adoption" onClick={scrollToTop} className="hover:text-blue-300 transition-colors">Pet Adoption</Link>
                </li>
                <li>
                  <Link to="/veterinary-referrals" onClick={scrollToTop} className="hover:text-blue-300 transition-colors">Veterinary Referrals</Link>
                </li>
                <li>
                  <Link to="/grooming-services" onClick={scrollToTop} className="hover:text-blue-300 transition-colors">Grooming Services</Link>
                </li>
                <li>
                  <Link to="/pet-training" onClick={scrollToTop} className="hover:text-blue-300 transition-colors">Pet Training</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Social Media and Mission */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4 mb-6">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-blue-300 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-blue-300 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Our Mission</h4>
              <p className="text-sm">
                Providing the best care and products for your beloved pets.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};