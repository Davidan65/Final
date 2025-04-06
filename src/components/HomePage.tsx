import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Shield, Star, Dog, Cat, Bird, Fish, PawPrint } from 'lucide-react';

export const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative min-h-[500px] bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&q=80&w=1920')", backgroundPosition: "center 40%" }}>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="container mx-auto px-4 relative h-full flex items-center">
          <div className="text-center w-full">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">Welcome to PetPal</h1>
            <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
              Your one-stop destination for pet adoption, premium pet food, and professional pet services.
            </p>
            <div className="flex justify-center gap-4">
              <Link
                to="/adopt"
                className="bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-all duration-200 transform hover:scale-105"
              >
                Adopt a Pet
              </Link>
              <Link
                to="/services"
                className="bg-white text-blue-700 border-2 border-blue-700 px-6 py-3 rounded-lg hover:bg-blue-50 transition-all duration-200 transform hover:scale-105"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Pet Categories */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Find Your Perfect Companion</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Dog, label: 'Dogs', path: '/adopt?type=Dog' },
              { icon: Cat, label: 'Cats', path: '/adopt?type=Cat' },
              { icon: Bird, label: 'Birds', path: '/adopt?type=Bird' },
              { icon: Fish, label: 'Fish', path: '/adopt?type=Fish' },
            ].map((category) => (
              <Link
                key={category.label}
                to={category.path}
                className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-lg transition-all duration-200 transform hover:scale-105"
              >
                <category.icon className="w-12 h-12 mx-auto mb-4 text-blue-500" />
                <h3 className="text-xl font-semibold">{category.label}</h3>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Pet Grooming',
                description: 'Professional grooming services for all breeds',
                path: '/services/grooming',
                icon: PawPrint,
              },
              {
                title: 'Training Programs',
                description: 'Expert training for better pet behavior',
                path: '/services/training',
                icon: Star,
              },
              {
                title: 'Veterinary Care',
                description: 'Quality healthcare for your pets',
                path: '/services/veterinary',
                icon: Shield,
              },
            ].map((service) => (
              <Link
                key={service.title}
                to={service.path}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-200"
              >
                <service.icon className="w-10 h-10 text-blue-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Premium Pet Food</h2>
          <div className="text-center mb-8">
            <Link
              to="/food"
              className="inline-flex items-center text-blue-500 hover:text-blue-600 font-semibold"
            >
              <Heart className="w-5 h-5 mr-2" />
              Shop Quality Pet Food
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};