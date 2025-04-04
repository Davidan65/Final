import React from 'react';
import { Heart, Award, Star, Clock, MapPin, Phone, Shield, Users } from 'lucide-react';

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

        {/* Our Story Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <div className="bg-blue-50 p-6 rounded-lg shadow-md">
            <p className="text-gray-700 mb-4">
              Founded in 1995, our pet store began as a small family-owned business with a simple mission: to help pets find their forever homes. 
              Over the past 25+ years, we've grown into a trusted community fixture, serving thousands of families and their beloved pets.
            </p>
            <p className="text-gray-700">
              What sets us apart is our unwavering commitment to animal welfare and exceptional customer service. 
              Every member of our team shares a deep passion for animals and a dedication to helping families make informed decisions about pet adoption and care.
            </p>
          </div>
        </div>

        {/* Mission and Values */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Heart className="h-6 w-6 text-red-500 mt-1" />
                <p className="text-gray-700">
                  We're dedicated to connecting loving families with their perfect animal companions, ensuring every pet finds a caring home.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Shield className="h-6 w-6 text-blue-500 mt-1" />
                <p className="text-gray-700">
                  We maintain the highest standards of animal care and ethical practices in the industry.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Users className="h-6 w-6 text-green-500 mt-1" />
                <p className="text-gray-700">
                  We build lasting relationships with our community through education and support.
                </p>
              </div>
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&q=80&w=500"
              alt="Happy Dog with Owner"
              className="w-full h-[300px] object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Services Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                <Heart className="h-5 w-5 text-red-500" />
                Pet Adoption
              </h3>
              <p className="text-gray-700">
                Comprehensive health checks, microchipping, and adoption counseling to ensure successful matches.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                <Award className="h-5 w-5 text-blue-500" />
                Premium Supplies
              </h3>
              <p className="text-gray-700">
                Carefully selected premium foods, toys, and accessories from trusted brands worldwide.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                <Shield className="h-5 w-5 text-green-500" />
                Expert Care
              </h3>
              <p className="text-gray-700">
                Professional grooming, training classes, and veterinary partnerships for complete pet care.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-12 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-6">Meet Our Expert Team</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <img
                src="https://images.unsplash.com/photo-1612536057832-2ff7ead58194?auto=format&fit=crop&q=80&w=500"
                alt="Pet Store Team"
                className="w-full h-[300px] object-cover rounded-lg shadow-lg mb-4"
              />
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Award className="h-6 w-6 text-blue-500 mt-1" />
                <div>
                  <h3 className="font-semibold">Certified Professionals</h3>
                  <p className="text-gray-700">Our team includes certified pet care specialists and veterinary technicians.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Heart className="h-6 w-6 text-red-500 mt-1" />
                <div>
                  <h3 className="font-semibold">Passionate Animal Lovers</h3>
                  <p className="text-gray-700">Every team member is dedicated to providing the best care for your pets.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Star className="h-6 w-6 text-yellow-500 mt-1" />
                <div>
                  <h3 className="font-semibold">Ongoing Education</h3>
                  <p className="text-gray-700">Regular training to stay updated with the latest in pet care and animal welfare.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Customer Testimonials */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">What Our Customers Say</h2>
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
                "The team went above and beyond to help us find our perfect companion. Their knowledge and care made the adoption process smooth and enjoyable."
              </p>
              <p className="font-semibold">- Sarah Johnson</p>
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
                "Best pet store in the area! The staff is incredibly knowledgeable and always ready to help with any questions about pet care."
              </p>
              <p className="font-semibold">- Michael Thompson</p>
            </div>
          </div>
        </div>

        {/* Visit Us Section */}
        <div className="bg-blue-50 p-6 rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-semibold mb-4">Visit Us Today</h2>
          <div className="max-w-lg mx-auto space-y-4">
            <div className="flex items-center justify-center gap-2">
              <MapPin className="h-5 w-5 text-blue-500" />
              <p className="text-gray-700">123 Pet Street, Anytown, ST 12345</p>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Clock className="h-5 w-5 text-blue-500" />
              <p className="text-gray-700">Open 7 days a week | Mon-Fri: 9am-8pm | Sat: 10am-6pm | Sun: 11am-5pm</p>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Phone className="h-5 w-5 text-blue-500" />
              <p className="text-gray-700">(123) 456-7890</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};