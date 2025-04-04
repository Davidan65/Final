import React from 'react';
import { Heart, Shield, Clock, MapPin, Phone, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export const PetTrainingPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Pet Training Programs</h1>
        
        {/* Hero Section */}
        <div className="mb-12">
          <img
            src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&q=80&w=1024"
            alt="Pet Training"
            className="w-full h-[400px] object-cover rounded-lg shadow-lg mb-6"
          />
          <div className="bg-blue-50 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Professional Pet Training</h2>
            <p className="text-gray-700 mb-4">
              Our certified trainers use positive reinforcement techniques to help your pet develop good behaviors
              and strengthen the bond between you and your furry friend. Whether you're dealing with basic obedience
              or specific behavioral issues, we're here to help.
            </p>
          </div>
        </div>

        {/* Training Programs */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Training Programs</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Puppy Basics</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Socialization</li>
                <li>• Basic Commands</li>
                <li>• Potty Training</li>
                <li>• Leash Training</li>
                <li>• 6 Weekly Sessions</li>
              </ul>
              <div className="mt-4 space-y-2">
                <p className="font-semibold">$199</p>
                <p className="text-sm text-gray-600">Required Deposit: $50</p>
                <Link
                  to="/checkout/training-puppy"
                  className="block w-full bg-blue-500 text-white text-center px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors mt-3"
                >
                  Book Now
                </Link>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Adult Dog Training</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Advanced Commands</li>
                <li>• Behavior Modification</li>
                <li>• Off-leash Training</li>
                <li>• Problem Solving</li>
                <li>• 8 Weekly Sessions</li>
              </ul>
              <div className="mt-4 space-y-2">
                <p className="font-semibold">$299</p>
                <p className="text-sm text-gray-600">Required Deposit: $75</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Specialized Training</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Anxiety Management</li>
                <li>• Aggression Control</li>
                <li>• Service Dog Training</li>
                <li>• Therapy Dog Prep</li>
                <li>• Custom Program Length</li>
              </ul>
              <div className="mt-4 space-y-2">
                <p className="font-semibold">From $399</p>
                <p className="text-sm text-gray-600">Required Deposit: $100</p>
              </div>
            </div>
          </div>
        </div>

        {/* Training Methods */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Our Training Approach</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-2 mb-3">
                <Heart className="h-6 w-6 text-red-500" />
                <h3 className="text-xl font-semibold">Positive Reinforcement</h3>
              </div>
              <p className="text-gray-700">
                We use reward-based training methods to encourage good behavior and build confidence in your pet.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-2 mb-3">
                <Shield className="h-6 w-6 text-blue-500" />
                <h3 className="text-xl font-semibold">Certified Trainers</h3>
              </div>
              <p className="text-gray-700">
                Our professional trainers are certified and experienced in various training methodologies.
              </p>
            </div>
          </div>
        </div>

        {/* Payment Policy */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Payment Policy</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <ul className="space-y-3 text-gray-700">
              <li>• Down payment is required to secure your booking</li>
              <li>• Remaining balance due at the first session</li>
              <li>• Deposit is refundable up to 48 hours before the first session</li>
              <li>• We accept credit cards, debit cards, and digital payments</li>
            </ul>
          </div>
        </div>

        {/* Class Schedule */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Class Schedule</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <table className="w-full">
              <thead className="bg-blue-50">
                <tr>
                  <th className="px-4 py-2 text-left">Program</th>
                  <th className="px-4 py-2 text-left">Days</th>
                  <th className="px-4 py-2 text-left">Times</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-4 py-2">Puppy Basics</td>
                  <td className="px-4 py-2">Mon & Wed</td>
                  <td className="px-4 py-2">10am, 2pm, 6pm</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2">Adult Training</td>
                  <td className="px-4 py-2">Tue & Thu</td>
                  <td className="px-4 py-2">11am, 3pm, 7pm</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Specialized</td>
                  <td className="px-4 py-2">By Appointment</td>
                  <td className="px-4 py-2">Flexible</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Success Stories */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Success Stories</h2>
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
                "The transformation in our puppy's behavior has been amazing. The trainers are patient and effective!"
              </p>
              <p className="font-semibold">- James W.</p>
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
                "We were struggling with our dog's anxiety, but the specialized training program made a huge difference."
              </p>
              <p className="font-semibold">- Sarah L.</p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-blue-50 p-6 rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-semibold mb-4">Start Training Today</h2>
          <div className="max-w-lg mx-auto space-y-4">
            <p className="text-gray-700 mb-4">
              Contact us to schedule a consultation or sign up for a training program.
            </p>
            <div className="flex items-center justify-center gap-2">
              <Clock className="h-5 w-5 text-blue-500" />
              <p className="text-gray-700">Training Hours: Mon-Sat: 9am - 7pm</p>
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