import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Heart, Shield, Clock, Check } from 'lucide-react';

type Pet = {
  id: number;
  name: string;
  type: string;
  breed: string;
  age: string;
  price: number;
  image: string;
  health_status?: string;
  vaccinated?: boolean;
  microchipped?: boolean;
  spayed_neutered?: boolean;
};

interface AdoptPageProps {
  pets: Pet[];
}

export const AdoptPage: React.FC<AdoptPageProps> = ({ pets }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const pet = pets.find((p) => p.id === Number(id));

  if (!pet) {
    return <div className="text-center p-8">Pet not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="relative aspect-[4/3]">
          <img
            src={pet.image}
            alt={pet.name}
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </div>
        <div className="p-8">
          <h1 className="text-3xl font-bold mb-4">{pet.name}</h1>
          <div className="bg-green-50 inline-block px-3 py-1 rounded-full text-green-700 text-sm font-medium mb-4">
            <span className="flex items-center gap-1">
              <Shield className="w-4 h-4" />
              {pet.health_status || "Healthy"}
            </span>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <p className="text-gray-600">Type</p>
              <p className="font-semibold">{pet.type}</p>
            </div>
            <div>
              <p className="text-gray-600">Breed</p>
              <p className="font-semibold">{pet.breed}</p>
            </div>
            <div>
              <p className="text-gray-600">Age</p>
              <p className="font-semibold">{pet.age}</p>
            </div>
            <div>
              <p className="text-gray-600">Price</p>
              <p className="font-semibold">${pet.price}</p>
            </div>
          </div>
          <div className="mb-6 bg-blue-50 p-4 rounded-lg">
            <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <Check className="w-5 h-5 text-blue-500" />
              Medical Information
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <div className={`w-4 h-4 rounded-full ${pet.vaccinated ? 'bg-green-500' : 'bg-gray-300'}`} />
                <span>Vaccinated</span>
              </div>
              <div className="flex items-center gap-2">
                <div className={`w-4 h-4 rounded-full ${pet.microchipped ? 'bg-green-500' : 'bg-gray-300'}`} />
                <span>Microchipped</span>
              </div>
              <div className="flex items-center gap-2">
                <div className={`w-4 h-4 rounded-full ${pet.spayed_neutered ? 'bg-green-500' : 'bg-gray-300'}`} />
                <span>Spayed/Neutered</span>
              </div>
            </div>
          </div>
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <Heart className="w-5 h-5 text-red-500" />
              About {pet.name}
            </h2>
            <p className="text-gray-800 mb-4">{pet.name} is a loving {pet.age.toLowerCase()} {pet.breed} {pet.type.toLowerCase()} looking for a forever home. With a friendly personality and gentle nature, {pet.name} would make a perfect companion for any family.</p>
          </div>
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <Clock className="w-5 h-5 text-blue-500" />
              Adoption Timeline
            </h2>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center flex-shrink-0">1</div>
                <div>
                  <h3 className="font-medium">Meet and Greet</h3>
                  <p className="text-gray-600 text-sm">Schedule a visit to meet {pet.name} in person</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center flex-shrink-0">2</div>
                <div>
                  <h3 className="font-medium">Application Review</h3>
                  <p className="text-gray-600 text-sm">We'll review your adoption application within 24-48 hours</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center flex-shrink-0">3</div>
                <div>
                  <h3 className="font-medium">Welcome Home</h3>
                  <p className="text-gray-600 text-sm">Complete the adoption process and welcome {pet.name} to their forever home</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <button
              onClick={() => navigate(-1)}
              className="w-full sm:w-auto bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 hover:shadow-md transform hover:scale-105 transition-all duration-200"
            >
              Back
            </button>
            <Link
              to={`/checkout/${pet.id}`}
              className="w-full sm:w-auto bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 hover:shadow-md transform hover:scale-105 transition-all duration-200 text-center"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};