import React from 'react';

export const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">About Our Pet Store</h1>
        
        <div className="mb-12">
          <img
            src="https://images.unsplash.com/photo-1587560699334-cc4ff634909a?auto=format&fit=crop&q=80&w=1024"
            alt="Our Pet Store Front"
            className="w-full h-[400px] object-cover rounded-lg shadow-lg mb-6"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-700 mb-4">
              At our pet store, we're dedicated to connecting loving families with their perfect animal companions. 
              We believe that every pet deserves a loving home, and every family deserves the joy that comes from 
              pet ownership.
            </p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&q=80&w=500"
              alt="Happy Dog with Owner"
              className="w-full h-[300px] object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Pet Adoption</h3>
              <p className="text-gray-700">
                We carefully screen and care for all our animals, ensuring they're healthy and ready for their forever homes.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Pet Supplies</h3>
              <p className="text-gray-700">
                We stock premium food, toys, and accessories to keep your pets happy and healthy.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Expert Advice</h3>
              <p className="text-gray-700">
                Our knowledgeable staff provides guidance on pet care, nutrition, and behavior.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <img
              src="https://images.unsplash.com/photo-1612536057832-2ff7ead58194?auto=format&fit=crop&q=80&w=500"
              alt="Pet Store Team"
              className="w-full h-[300px] object-cover rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
            <p className="text-gray-700 mb-4">
              Our passionate team of animal lovers includes certified pet care specialists, veterinary technicians, 
              and experienced adoption counselors. We're here to help you every step of the way in your pet 
              ownership journey.
            </p>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Visit Us Today</h2>
          <p className="text-gray-700">
            We're located in the heart of the city and open seven days a week. Come meet our adorable animals 
            and let us help you find your perfect pet companion!
          </p>
        </div>
      </div>
    </div>
  );
};