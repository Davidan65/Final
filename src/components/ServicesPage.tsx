import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Star, PawPrint, Heart, MapPin, Phone } from 'lucide-react';

const scrollToTop = () => {
  window.scrollTo(0, 0);
};

export const ServicesPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Our Pet Services</h1>
        
        {/* Hero Section */}
        <div className="mb-12">
          <img
            src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=1024"
            alt="Pet Services"
            className="w-full h-[400px] object-cover rounded-lg shadow-lg mb-6"
          />
          <div className="bg-blue-50 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Comprehensive Pet Care Services</h2>
            <p className="text-gray-700 mb-4">
              At PetPal, we offer a wide range of professional services designed to keep your pets healthy, happy, and well-cared for.
              From grooming to training to veterinary care, our team of experts is dedicated to providing the highest quality services for your beloved companions.
            </p>
          </div>
        </div>

        {/* Grooming Services */}
        <div className="mb-12 bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center gap-3 mb-4">
            <PawPrint className="h-8 w-8 text-blue-500" />
            <h2 className="text-2xl font-semibold">Pet Grooming Services</h2>
          </div>
          <p className="text-gray-700 mb-6">
            Our professional groomers provide comprehensive grooming services to keep your pet looking and feeling their best.
            From basic baths to full-service grooming packages, we offer everything your pet needs to stay clean and healthy.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Basic Bath</h3>
              <ul className="space-y-1 text-gray-700 mb-4">
                <li>• Shampoo & Conditioning</li>
                <li>• Blow Dry & Brush Out</li>
                <li>• Ear Cleaning & Nail Trim</li>
              </ul>
              <p className="font-semibold">From $40</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Full Grooming</h3>
              <ul className="space-y-1 text-gray-700 mb-4">
                <li>• All Basic Bath Services</li>
                <li>• Haircut & Style Trimming</li>
                <li>• Paw Pad & Sanitary Trim</li>
              </ul>
              <p className="font-semibold">From $65</p>
            </div>
          </div>
          <div className="text-center">
            <Link
              to="/grooming-services"
              onClick={scrollToTop}
              className="inline-block bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-all duration-200 transform hover:scale-105"
            >
              View Grooming Services
            </Link>
          </div>
        </div>

        {/* Training Programs */}
        <div className="mb-12 bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center gap-3 mb-4">
            <Star className="h-8 w-8 text-blue-500" />
            <h2 className="text-2xl font-semibold">Pet Training Programs</h2>
          </div>
          <p className="text-gray-700 mb-6">
            Our certified trainers use positive reinforcement techniques to help your pet develop good behaviors
            and strengthen the bond between you and your furry friend. Whether you're dealing with basic obedience
            or specific behavioral issues, we're here to help.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Puppy Basics</h3>
              <ul className="space-y-1 text-gray-700 mb-4">
                <li>• Socialization</li>
                <li>• Basic Commands</li>
                <li>• 6 Weekly Sessions</li>
              </ul>
              <p className="font-semibold">$199</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Adult Dog Training</h3>
              <ul className="space-y-1 text-gray-700 mb-4">
                <li>• Advanced Commands</li>
                <li>• Behavior Modification</li>
                <li>• 8 Weekly Sessions</li>
              </ul>
              <p className="font-semibold">$299</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Specialized Training</h3>
              <ul className="space-y-1 text-gray-700 mb-4">
                <li>• Anxiety Management</li>
                <li>• Aggression Control</li>
                <li>• Custom Program</li>
              </ul>
              <p className="font-semibold">From $399</p>
            </div>
          </div>
          <div className="text-center">
            <Link
              to="/pet-training"
              onClick={scrollToTop}
              className="inline-block bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-all duration-200 transform hover:scale-105"
            >
              View Training Programs
            </Link>
          </div>
        </div>

        {/* Veterinary Care */}
        <div className="mb-12 bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="h-8 w-8 text-blue-500" />
            <h2 className="text-2xl font-semibold">Veterinary Referral Services</h2>
          </div>
          <p className="text-gray-700 mb-6">
            We partner with the best veterinary clinics in the area to ensure your pet receives top-quality medical care.
            Our referral service connects you with specialized veterinary care tailored to your pet's specific needs.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">General Medicine</h3>
              <ul className="space-y-1 text-gray-700 mb-4">
                <li>• Routine Check-ups</li>
                <li>• Vaccinations</li>
                <li>• Preventive Care</li>
              </ul>
              <p className="font-semibold">From $75</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Surgery</h3>
              <ul className="space-y-1 text-gray-700 mb-4">
                <li>• Spay/Neuter</li>
                <li>• Orthopedic Surgery</li>
                <li>• Dental Surgery</li>
              </ul>
              <p className="font-semibold">From $200</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Emergency Care</h3>
              <ul className="space-y-1 text-gray-700 mb-4">
                <li>• 24/7 Emergency Services</li>
                <li>• Critical Care</li>
                <li>• Urgent Treatment</li>
              </ul>
              <p className="font-semibold">Consultation Fee: $75</p>
            </div>
          </div>
          <div className="text-center">
            <Link
              to="/veterinary-referrals"
              onClick={scrollToTop}
              className="inline-block bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-all duration-200 transform hover:scale-105"
            >
              View Veterinary Services
            </Link>
          </div>
        </div>

        {/* Pet Adoption */}
        <div className="mb-12 bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center gap-3 mb-4">
            <Heart className="h-8 w-8 text-red-500" />
            <h2 className="text-2xl font-semibold">Pet Adoption Services</h2>
          </div>
          <p className="text-gray-700 mb-6">
            Our adoption process is designed to create perfect matches between pets and their forever homes.
            We take pride in our comprehensive approach to ensure both you and your new pet will have a happy life together.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Adoption Process</h3>
              <ul className="space-y-1 text-gray-700 mb-4">
                <li>• Online Application</li>
                <li>• Virtual Consultation</li>
                <li>• Home Delivery</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Adoption Benefits</h3>
              <ul className="space-y-1 text-gray-700 mb-4">
                <li>• Health Checked Pets</li>
                <li>• Ongoing Support</li>
                <li>• 30-day Trial Period</li>
              </ul>
            </div>
          </div>
          <div className="text-center">
            <Link
              to="/pet-adoption"
              onClick={scrollToTop}
              className="inline-block bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-all duration-200 transform hover:scale-105"
            >
              View Adoption Services
            </Link>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-blue-50 p-6 rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-semibold mb-4">Have Questions?</h2>
          <div className="max-w-lg mx-auto space-y-4">
            <p className="text-gray-700 mb-4">
              Contact us today to learn more about our services or to schedule an appointment.
            </p>
            <div className="flex items-center justify-center gap-2">
              <MapPin className="h-5 w-5 text-blue-500" />
              <p className="text-gray-700">123 Pet Street, Anytown, ST 12345</p>
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