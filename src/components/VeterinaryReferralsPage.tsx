import React from 'react';
import { Heart, Shield, Clock, MapPin, Phone, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const scrollToTop = () => {
  window.scrollTo(0, 0);
};

export const VeterinaryReferralsPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Veterinary Referral Services</h1>
        
        {/* Hero Section */}
        <div className="mb-12">
          <img
            src="https://images.unsplash.com/photo-1516900448138-898720b936c7?auto=format&fit=crop&q=80&w=1024"
            alt="Veterinary Care"
            className="w-full h-[400px] object-cover rounded-lg shadow-lg mb-6"
          />
          <div className="bg-blue-50 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Expert Veterinary Care Network</h2>
            <p className="text-gray-700 mb-4">
              We partner with the best veterinary clinics in the area to ensure your pet receives top-quality medical care.
              Our referral service connects you with specialized veterinary care tailored to your pet's specific needs.
            </p>
          </div>
        </div>

        {/* Our Network */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Our Veterinary Network</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-2 mb-3">
                <Shield className="h-6 w-6 text-blue-500" />
                <h3 className="text-xl font-semibold">Certified Specialists</h3>
              </div>
              <p className="text-gray-700">
                Our network includes board-certified veterinarians specializing in various areas of pet health care.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-2 mb-3">
                <Heart className="h-6 w-6 text-red-500" />
                <h3 className="text-xl font-semibold">Emergency Care</h3>
              </div>
              <p className="text-gray-700">
                24/7 access to emergency veterinary services through our trusted partner clinics.
              </p>
              <div className="mt-4 space-y-2">
                <p className="font-semibold">Consultation Fee: $75</p>
                <p className="text-sm text-gray-600">Required Deposit: $30</p>
                <Link
                  to="/checkout/vet-consultation"
                  onClick={scrollToTop}
                  className="block w-full bg-blue-700 text-white text-center px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors mt-3"
                >
                  Book Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Specialized Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">General Medicine</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Routine Check-ups</li>
                <li>• Vaccinations</li>
                <li>• Preventive Care</li>
                <li>• Health Certificates</li>
              </ul>
              <div className="mt-4 space-y-2">
                <p className="font-semibold">From $75</p>
                <p className="text-sm text-gray-600">Required Deposit: $25</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Surgery</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Spay/Neuter</li>
                <li>• Orthopedic Surgery</li>
                <li>• Dental Surgery</li>
                <li>• Soft Tissue Surgery</li>
              </ul>
              <div className="mt-4 space-y-2">
                <p className="font-semibold">From $200</p>
                <p className="text-sm text-gray-600">Required Deposit: $100</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Specialized Care</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Cardiology</li>
                <li>• Dermatology</li>
                <li>• Oncology</li>
                <li>• Rehabilitation</li>
              </ul>
              <div className="mt-4 space-y-2">
                <p className="font-semibold">From $300</p>
                <p className="text-sm text-gray-600">Required Deposit: $150</p>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Policy */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Payment Policy</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <ul className="space-y-3 text-gray-700">
              <li>• Down payment required to schedule specialized services</li>
              <li>• Remaining balance due at time of service</li>
              <li>• Deposit is fully refundable with 72-hour cancellation notice</li>
              <li>• Multiple payment options available including payment plans</li>
              <li>• Insurance claims assistance provided</li>
            </ul>
          </div>
        </div>

        {/* Referral Process */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Referral Process</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <ol className="space-y-4">
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center">1</span>
                <div>
                  <h4 className="font-semibold">Initial Consultation</h4>
                  <p className="text-gray-700">Meet with our staff to discuss your pet's health concerns.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center">2</span>
                <div>
                  <h4 className="font-semibold">Specialist Selection</h4>
                  <p className="text-gray-700">We'll match you with the most appropriate specialist for your pet's needs.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center">3</span>
                <div>
                  <h4 className="font-semibold">Appointment Scheduling</h4>
                  <p className="text-gray-700">We'll coordinate with the specialist's office to schedule your appointment.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center">4</span>
                <div>
                  <h4 className="font-semibold">Follow-up Care</h4>
                  <p className="text-gray-700">We'll ensure proper follow-up care and communication between all parties.</p>
                </div>
              </li>
            </ol>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">What Pet Parents Say</h2>
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
                "The referral process was seamless, and the specialist they recommended was excellent. My dog received the best care possible."
              </p>
              <p className="font-semibold">- Emily R.</p>
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
                "I was worried about finding the right specialist for my cat's condition, but their referral service made it easy and stress-free."
              </p>
              <p className="font-semibold">- Mark T.</p>
            </div>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="mb-12 bg-red-50 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2 text-red-700">
            <Phone className="h-6 w-6" />
            24/7 Emergency Contact
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2">Emergency Hotline</h3>
              <p className="text-xl font-bold text-red-700 mb-2">(800) 555-0123</p>
              <p className="text-sm text-gray-700">Available 24 hours for urgent care needs</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Emergency Services</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Immediate medical attention</li>
                <li>• Critical care facilities</li>
                <li>• Emergency surgery</li>
                <li>• Poison control</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Clinic Finder */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Find a Clinic Near You</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold mb-3">Downtown Pet Hospital</h3>
              <div className="space-y-2 text-gray-700">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <p>123 Main St, Downtown</p>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <p>(555) 123-4567</p>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <p>Open 24/7</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold mb-3">Westside Veterinary Clinic</h3>
              <div className="space-y-2 text-gray-700">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <p>456 West Ave, Westside</p>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <p>(555) 234-5678</p>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <p>8am - 8pm Daily</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold mb-3">Eastside Animal Hospital</h3>
              <div className="space-y-2 text-gray-700">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <p>789 East Blvd, Eastside</p>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <p>(555) 345-6789</p>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <p>7am - 10pm Daily</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-blue-50 p-6 rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-semibold mb-4">Need a Veterinary Referral?</h2>
          <div className="max-w-lg mx-auto space-y-4">
            <p className="text-gray-700 mb-4">
              Contact us today to discuss your pet's healthcare needs and get connected with the right specialist.
            </p>
            <div className="flex items-center justify-center gap-2">
              <Clock className="h-5 w-5 text-blue-500" />
              <p className="text-gray-700">Available 24/7 for Emergency Referrals</p>
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