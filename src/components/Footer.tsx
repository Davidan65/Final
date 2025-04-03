import React from 'react';
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-500 text-white py-8 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                <a href="mailto:info@petstore.com" className="hover:text-blue-200 transition-colors">
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
                <a href="/" className="hover:text-blue-200 transition-colors">Home</a>
              </li>
              <li>
                <a href="/pet-food" className="hover:text-blue-200 transition-colors">Pet Food</a>
              </li>
              <li>
                <a href="/about" className="hover:text-blue-200 transition-colors">About Us</a>
              </li>
              <li>
                <a href="/cart-checkout" className="hover:text-blue-200 transition-colors">Shopping Cart</a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-blue-200 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-blue-200 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a 
                href="mailto:info@petstore.com" 
                className="hover:text-blue-200 transition-colors"
                aria-label="Email"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-400 mt-8 pt-6 text-center">
          <p>&copy; {new Date().getFullYear()} Pet Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};