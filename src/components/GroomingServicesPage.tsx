import React from 'react';
import { Heart, Shield, Clock, MapPin, Phone, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export const GroomingServicesPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Professional Pet Grooming Services</h1>
        
        {/* Hero Section */}
        <div className="mb-12">
          <img
            src="https://images.unsplash.com/photo-1516734212186-65266f08a44a?auto=format&fit=crop&q=80&w=1024"
            alt="Pet Grooming"
            className="w-full h-[400px] object-cover rounded-lg shadow-lg mb-6"
          />
          <div className="bg-blue-50 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Expert Grooming Care</h2>
            <p className="text-gray-700 mb-4">
              Our professional groomers provide comprehensive grooming services to keep your pet looking and feeling their best.
              From basic baths to full-service grooming packages, we offer everything your pet needs to stay clean and healthy.
            </p>
          </div>
        </div>

        {/* Services */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Our Services</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Basic Bath</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Shampoo & Conditioning</li>
                <li>• Blow Dry</li>
                <li>• Brush Out</li>
                <li>• Ear Cleaning</li>
                <li>• Nail Trim</li>
              </ul>
              <div className="mt-4 space-y-2">
                <p className="font-semibold">From $40</p>
                <p className="text-sm text-gray-600">Required Deposit: $15</p>
                <Link
                  to="/checkout/grooming-basic"
                  className="block w-full bg-blue-500 text-white text-center px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors mt-3"
                >
                  Book Now
                </Link>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Full Grooming</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• All Basic Bath Services</li>
                <li>• Haircut</li>
                <li>• Style Trimming</li>
                <li>• Paw Pad Trimming</li>
                <li>• Sanitary Trim</li>
              </ul>
              <div className="mt-4 space-y-2">
                <p className="font-semibold">From $65</p>
                <p className="text-sm text-gray-600">Required Deposit: $25</p>
                <Link
                  to="/checkout/grooming-full"
                  className="block w-full bg-blue-500 text-white text-center px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors mt-3"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Policy */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Payment Policy</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <ul className="space-y-3 text-gray-700">
              <li>• Down payment required to secure your appointment</li>
              <li>• Remaining balance due at time of service</li>
              <li>• Deposit is refundable with 24-hour cancellation notice</li>
              <li>• All major payment methods accepted</li>
              <li>• Special package rates available for regular clients</li>
            </ul>
          </div>
        </div>

        {/* Additional Services */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Additional Services</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">À La Carte Services</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex justify-between">
                  <span>Nail Trim</span>
                  <span>$15</span>
                </li>
                <li className="flex justify-between">
                  <span>Teeth Brushing</span>
                  <span>$10</span>
                </li>
                <li className="flex justify-between">
                  <span>Ear Cleaning</span>
                  <span>$12</span>
                </li>
                <li className="flex justify-between">
                  <span>Paw Pad Trim</span>
                  <span>$15</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Special Treatments</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex justify-between">
                  <span>De-matting Treatment</span>
                  <span>$25+</span>
                </li>
                <li className="flex justify-between">
                  <span>Flea Treatment</span>
                  <span>$20</span>
                </li>
                <li className="flex justify-between">
                  <span>Medicated Bath</span>
                  <span>$30</span>
                </li>
                <li className="flex justify-between">
                  <span>De-shedding Treatment</span>
                  <span>$25+</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Why Choose Our Grooming Services?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-2 mb-3">
                <Shield className="h-6 w-6 text-blue-500" />
                <h3 className="text-xl font-semibold">Certified Groomers</h3>
              </div>
              <p className="text-gray-700">
                Our professional groomers are certified and experienced in handling all breeds and temperaments.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-2 mb-3">
                <Heart className="h-6 w-6 text-red-500" />
                <h3 className="text-xl font-semibold">Gentle Care</h3>
              </div>
              <p className="text-gray-700">
                We use gentle, pet-safe products and techniques to ensure your pet's comfort.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-2 mb-3">
                <Clock className="h-6 w-6 text-green-500" />
                <h3 className="text-xl font-semibold">Convenient Hours</h3>
              </div>
              <p className="text-gray-700">
                Flexible scheduling options to accommodate your busy lifestyle.
              </p>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Customer Reviews</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Star className="h-5 w-5 text-yellow-500" />
                <Star className="h-5 w-5 text-yellow-500" />
                <Star className="h-5 w-5 text-yellow-500" />
                <Star className="h-5 w-5 text-yellow-500" />
                <Star className="h-5 w-5 text-yellow-500" />
              </div>
              <p className="text-gray-700 italic mb-4">
                "My dog always looks amazing after his grooming sessions. The staff is so patient and caring!"
              </p>
              <p className="font-semibold">- Lisa M.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Star className="h-5 w-5 text-yellow-500" />
                <Star className="h-5 w-5 text-yellow-500" />
                <Star className="h-5 w-5 text-yellow-500" />
                <Star className="h-5 w-5 text-yellow-500" />
                <Star className="h-5 w-5 text-yellow-500" />
              </div>
              <p className="text-gray-700 italic mb-4">
                "Professional service and amazing results every time. My cat actually enjoys her grooming appointments!"
              </p>
              <p className="font-semibold">- David K.</p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-blue-50 p-6 rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-semibold mb-4">Book Your Appointment</h2>
          <div className="max-w-lg mx-auto space-y-4">
            <p className="text-gray-700 mb-4">
              Contact us today to schedule your pet's grooming appointment.
            </p>
            <div className="flex items-center justify-center gap-2">
              <Clock className="h-5 w-5 text-blue-500" />
              <p className="text-gray-700">Mon-Sat: 9am - 6pm</p>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Phone className="h-5 w-5 text-blue-500" />
              <p className="text-gray-700">(123) 456-7890</p>
            </div>
            <div className="flex items-center justify-center gap-2">
              <MapPin className="h-5 w-5 text-blue-500" />
              <p className="text-gray-700">123 Pet Street, Anytown, ST 12345</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};