import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

type Pet = {
  id: number;
  name: string;
  type: string;
  breed: string;
  age: string;
  price: number;
  image: string;
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
          <div className="mb-6">
            <p className="text-gray-600 mb-2">About {pet.name}</p>
            <p className="text-gray-800">{pet.name} is a loving {pet.age.toLowerCase()} {pet.breed} {pet.type.toLowerCase()} looking for a forever home. With a friendly personality and gentle nature, {pet.name} would make a perfect companion for any family.</p>
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <button
              onClick={() => navigate(-1)}
              className="w-full sm:w-auto bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition-colors"
            >
              Back
            </button>
            <Link
              to={`/checkout/${pet.id}`}
              className="w-full sm:w-auto bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors text-center"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};