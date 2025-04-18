import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Dog, Cat, Bird, Fish, ChevronLeft, ChevronRight } from 'lucide-react';

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

interface PetListProps {
  pets: Pet[];
}

export const PetList: React.FC<PetListProps> = ({ pets }) => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const typeFilter = queryParams.get('type');
  
  const [filteredPets, setFilteredPets] = useState<Pet[]>([]);
  const [selectedType, setSelectedType] = useState<string | null>(typeFilter);
  const [currentPage, setCurrentPage] = useState(1);
  
  // Define pets per page (4 columns x 2 rows = 8 pets per page)
  const petsPerPage = 8;

  useEffect(() => {
    // Filter pets based on the type parameter in the URL
    if (typeFilter) {
      setSelectedType(typeFilter);
      setFilteredPets(pets.filter(pet => pet.type === typeFilter));
    } else {
      setFilteredPets(pets);
    }
    // Reset to first page when filters change
    setCurrentPage(1);
  }, [typeFilter, pets]);

  const handleTypeFilter = (type: string | null) => {
    setSelectedType(type);
    if (type) {
      setFilteredPets(pets.filter(pet => pet.type === type));
    } else {
      setFilteredPets(pets);
    }
  };

  const PetTypeIcon = ({ type }: { type: string }) => {
    switch (type) {
      case "Dog": return <Dog className="w-6 h-6" />;
      case "Cat": return <Cat className="w-6 h-6" />;
      case "Bird": return <Bird className="w-6 h-6" />;
      case "Fish": return <Fish className="w-6 h-6" />;
      default: return null;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Adopt a Pet</h1>
      
      {/* Filter buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        <button
          onClick={() => handleTypeFilter(null)}
          className={`px-4 py-2 rounded-full ${!selectedType ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
        >
          All Pets
        </button>
        {["Dog", "Cat", "Bird", "Fish"].map(type => (
          <button
            key={type}
            onClick={() => handleTypeFilter(type)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full ${selectedType === type ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            <PetTypeIcon type={type} />
            <span>{type}s</span>
          </button>
        ))}
      </div>

      {/* Pet grid */}
      {filteredPets.length > 0 ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredPets
              .slice((currentPage - 1) * petsPerPage, currentPage * petsPerPage)
              .map(pet => (
                <Link 
                  to={`/adopt/${pet.id}`} 
                  key={pet.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="relative aspect-square">
                    <img 
                      src={pet.image} 
                      alt={pet.name} 
                      className="absolute inset-0 w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-1">{pet.name}</h3>
                    <p className="text-gray-600 mb-2">{pet.breed}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-500">{pet.age}</span>
                      <span className="font-bold text-blue-600">${pet.price}</span>
                    </div>
                    <div className="mt-3 flex items-center gap-2">
                      <PetTypeIcon type={pet.type} />
                      <span className="text-sm text-gray-500">{pet.type}</span>
                    </div>
                    <div className="mt-4">
                      <button className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-200">
                        Adopt Now
                      </button>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
          
          {/* Pagination controls */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className={`flex items-center justify-center p-2 rounded-full ${currentPage === 1 ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
              aria-label="Previous page"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <div className="text-gray-700">
              Page {currentPage} of {Math.ceil(filteredPets.length / petsPerPage)}
            </div>
            
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, Math.ceil(filteredPets.length / petsPerPage)))}
              disabled={currentPage >= Math.ceil(filteredPets.length / petsPerPage)}
              className={`flex items-center justify-center p-2 rounded-full ${currentPage >= Math.ceil(filteredPets.length / petsPerPage) ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
              aria-label="Next page"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </>
      ) : (
        <div className="text-center py-12">
          <p className="text-xl text-gray-600">No pets found matching your criteria.</p>
        </div>
      )}
    </div>
  );
};