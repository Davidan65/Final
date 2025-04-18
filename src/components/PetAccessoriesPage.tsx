import { useState, useEffect, useMemo } from 'react';
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';

const scrollToTop = () => {
  window.scrollTo(0, 0);
};

interface Accessory {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
}

export const PetAccessoriesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const { addItem, items } = useCart();
  const { isAuthenticated } = useAuth();
  const [accessories, setAccessories] = useState<Accessory[]>([]);
  const itemsPerPage = 8;

  useEffect(() => {
    const fetchAccessories = async () => {
      try {
        const response = await fetch('http://localhost:5002/api/accessories');
        const data = await response.json();
        setAccessories(data);
      } catch (error) {
        console.error('Error fetching accessories:', error);
      }
    };

    fetchAccessories();
    scrollToTop();
  }, []);

  useEffect(() => {
    scrollToTop();
  }, [currentPage]);

  const filteredAccessories = useMemo(() => {
    return accessories.filter(accessory => {
      const matchesCategory = selectedCategory === 'All' || accessory.category === selectedCategory;
      const matchesSearch = accessory.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           accessory.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [accessories, selectedCategory, searchTerm]);

  const currentAccessories = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredAccessories.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredAccessories, currentPage]);

  const totalPages = Math.ceil(filteredAccessories.length / itemsPerPage);

  const isItemInCart = (id: number) => {
    return items.some(item => item.id === id);
  };

  const handleAddToCart = (accessory: Accessory) => {
    addItem(accessory.id, accessory.name, accessory.price);
  };

  // Get unique categories
  const categories = ['All', ...new Set(accessories.map(a => a.category))];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Pet Accessories</h1>

        {/* Search and Filter Section */}
        <div className="mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="w-full md:w-1/3">
            <input
              type="text"
              placeholder="Search accessories..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="w-full md:w-1/3">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Hero Section */}
        <div className="mb-12">
          <img
            src="https://images.unsplash.com/photo-1583511655826-05700442b31b?auto=format&fit=crop&q=80&w=1024"
            alt="Pet Accessories"
            className="w-full h-[400px] object-cover rounded-lg shadow-lg mb-6"
          />
          <div className="bg-blue-50 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Quality Pet Accessories</h2>
            <p className="text-gray-700 mb-4">
              Discover our wide selection of premium pet accessories designed to enhance your pet's comfort,
              health, and happiness. From essential care items to luxury pet products, we have everything
              your pet needs to live their best life.
            </p>
          </div>
        </div>

        {/* Accessories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 px-4 sm:px-6">
          {currentAccessories.map((accessory) => (
            <div key={accessory.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative">
                <img 
                  src={accessory.image} 
                  alt={accessory.name}
                  className="w-full h-48 sm:h-56 object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://via.placeholder.com/300x200?text=No+Image';
                  }}
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{accessory.name}</h3>
                  <p className="text-gray-600 mb-2">{accessory.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold">${accessory.price.toFixed(2)}</span>
                    <button
                      onClick={() => handleAddToCart(accessory)}
                      disabled={!isAuthenticated || isItemInCart(accessory.id)}
                      className={`px-4 py-2 rounded-md ${
                        !isAuthenticated || isItemInCart(accessory.id)
                          ? 'bg-gray-300 cursor-not-allowed'
                          : 'bg-blue-600 hover:bg-blue-700 text-white'
                      }`}
                    >
                      {!isAuthenticated
                        ? 'Login to Add'
                        : isItemInCart(accessory.id)
                        ? 'Added to Cart'
                        : 'Add to Cart'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-8 flex justify-center">
            <nav className="flex items-center space-x-2">
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-3 py-1 rounded-md bg-gray-200 disabled:opacity-50"
              >
                Previous
              </button>
              <span className="px-3 py-1">
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-3 py-1 rounded-md bg-gray-200 disabled:opacity-50"
              >
                Next
              </button>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
};