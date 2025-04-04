import React from 'react';
import { Heart, Shield, Clock, MapPin, Phone } from 'lucide-react';

export const PetAdoptionPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Pet Adoption Services</h1>
        
        {/* Hero Section */}
        <div className="mb-12">
          <img
            src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&q=80&w=1024"
            alt="Happy adopted pets"
            className="w-full h-[400px] object-cover rounded-lg shadow-lg mb-6"
          />
          <div className="bg-blue-50 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Find Your Perfect Companion</h2>
            <p className="text-gray-700 mb-4">
              Our adoption process is designed to create perfect matches between pets and their forever homes.
              We take pride in our comprehensive approach to ensure both you and your new pet will have a happy life together.
            </p>
          </div>
        </div>

        {/* Adoption Process */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Our Adoption Process</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Step 1: Online Application</h3>
              <p className="text-gray-700">
                Browse our available pets online and submit your adoption application through our secure portal. Our team will review your application within 24-48 hours.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Step 2: Payment Processing</h3>
              <p className="text-gray-700">
                Once approved, complete the secure online payment process for adoption fees and any additional services you've selected.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Step 3: Virtual Consultation</h3>
              <p className="text-gray-700">
                Schedule a video call with our adoption specialists to discuss your preferences and learn more about your chosen pet's personality and needs.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Step 4: Home Delivery</h3>
              <p className="text-gray-700">
                Our team will coordinate the delivery of your new pet to your home, along with all necessary paperwork and care instructions.
              </p>
            </div>
          </div>
        </div>

        {/* Adoption Benefits */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Adoption Benefits</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-2 mb-3">
                <Heart className="h-6 w-6 text-red-500" />
                <h3 className="text-xl font-semibold">Health Checked</h3>
              </div>
              <p className="text-gray-700">
                All our pets are thoroughly health-checked, vaccinated, and microchipped.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-2 mb-3">
                <Shield className="h-6 w-6 text-blue-500" />
                <h3 className="text-xl font-semibold">Support</h3>
              </div>
              <p className="text-gray-700">
                Ongoing support and advice from our experienced team after adoption.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-2 mb-3">
                <Clock className="h-6 w-6 text-green-500" />
                <h3 className="text-xl font-semibold">Trial Period</h3>
              </div>
              <p className="text-gray-700">
                30-day adoption trial period to ensure a perfect match.
              </p>
            </div>
          </div>
        </div>

        {/* Adoption Fees */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Adoption Fees</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-md">
              <thead className="bg-blue-50">
                <tr>
                  <th className="px-6 py-3 text-left">Pet Type</th>
                  <th className="px-6 py-3 text-left">Age Range</th>
                  <th className="px-6 py-3 text-left">Fee Range</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-6 py-4">Dogs</td>
                  <td className="px-6 py-4">Puppy (0-1 year)</td>
                  <td className="px-6 py-4">$300-$400</td>
                </tr>
                <tr className="border-b">
                  <td className="px-6 py-4">Dogs</td>
                  <td className="px-6 py-4">Adult (1-7 years)</td>
                  <td className="px-6 py-4">$200-$300</td>
                </tr>
                <tr className="border-b">
                  <td className="px-6 py-4">Cats</td>
                  <td className="px-6 py-4">Kitten (0-1 year)</td>
                  <td className="px-6 py-4">$150-$200</td>
                </tr>
                <tr>
                  <td className="px-6 py-4">Cats</td>
                  <td className="px-6 py-4">Adult (1+ years)</td>
                  <td className="px-6 py-4">$100-$150</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-600 mt-4">
            * All adoption fees include vaccinations, microchipping, and spaying/neutering.
          </p>
        </div>

        {/* Contact Section */}
        <div className="bg-blue-50 p-6 rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-semibold mb-4">Ready to Adopt?</h2>
          <div className="max-w-lg mx-auto space-y-4">
            <p className="text-gray-700 mb-4">
              Visit us today to meet your potential new family member or contact us for more information.
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