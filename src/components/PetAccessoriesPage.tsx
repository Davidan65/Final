import React, { useState, useMemo } from 'react';
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';
import { Star, Filter, ShoppingBag } from 'lucide-react';

const petAccessories = [
  {
    id: 1,
    name: 'Deluxe Dog Collar',
    price: 19.99,
    description: 'Comfortable and durable collar with reflective strips for night safety',
    image: 'https://placehold.co/300x200',
    rating: 4.5,
    category: 'Collars & Leashes'
  },
  {
    id: 2,
    name: 'Interactive Cat Toy',
    price: 12.99,
    description: 'Electronic mouse toy with unpredictable movements',
    image: 'https://placehold.co/300x200',
    rating: 4.3,
    category: 'Toys'
  },
  {
    id: 3,
    name: 'Pet Grooming Brush',
    price: 15.99,
    description: 'Self-cleaning slicker brush for all coat types',
    image: 'https://placehold.co/300x200',
    rating: 4.7,
    category: 'Grooming'
  },
  {
    id: 4,
    name: 'Luxury Pet Bed',
    price: 49.99,
    description: 'Orthopedic foam bed with removable, washable cover',
    image: 'https://placehold.co/300x200',
    rating: 4.8,
    category: 'Beds'
  },
  {
    id: 5,
    name: 'Travel Water Bottle',
    price: 16.99,
    description: 'Portable water dispenser for walks and travel',
    image: 'https://placehold.co/300x200',
    rating: 4.4,
    category: 'Travel'
  },
  {
    id: 6,
    name: 'LED Light-up Collar',
    price: 24.99,
    description: 'USB rechargeable LED collar for night visibility',
    image: 'https://placehold.co/300x200',
    rating: 4.6,
    category: 'Collars & Leashes'
  },
  {
    id: 7,
    name: 'Cat Scratching Post',
    price: 29.99,
    description: 'Sisal rope post with dangling toy',
    image: 'https://placehold.co/300x200',
    rating: 4.5,
    category: 'Furniture'
  },
  {
    id: 8,
    name: 'Dog Training Clicker',
    price: 7.99,
    description: 'Professional training tool with wrist strap',
    image: 'https://placehold.co/300x200',
    rating: 4.2,
    category: 'Training'
  },
  {
    id: 9,
    name: 'Pet Nail Clippers',
    price: 13.99,
    description: 'Safety guard nail clippers with quick sensor',
    image: 'https://placehold.co/300x200',
    rating: 4.4,
    category: 'Grooming'
  },
  {
    id: 10,
    name: 'Automatic Ball Launcher',
    price: 89.99,
    description: 'Interactive ball throwing machine for dogs',
    image: 'https://placehold.co/300x200',
    rating: 4.7,
    category: 'Toys'
  },
  // Add 20 more accessories with similar structure
  // ... (items 11-30 with varied categories, prices, and descriptions)
];

// Add 20 more items to the array
for (let i = 11; i <= 30; i++) {
  const categories = ['Toys', 'Grooming', 'Beds', 'Collars & Leashes', 'Travel', 'Training', 'Furniture'];
  const randomCategory = categories[Math.floor(Math.random() * categories.length)];
  
  petAccessories.push({
    id: i,
    name: `Pet Accessory ${i}`,
    price: +(Math.random() * 50 + 9.99).toFixed(2),
    description: `High-quality pet accessory for your beloved pet. Perfect for daily use.`,
    image: 'https://placehold.co/300x200',
    rating: +(Math.random() * (5 - 4) + 4).toFixed(1),
    category: randomCategory
  });
}

export const PetAccessoriesPage: React.FC = () => {
  const { addItem, items } = useCart();
  const { isAuthenticated } = useAuth();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [sortBy, setSortBy] = useState<string>('name');
  const [quantities, setQuantities] = useState<{ [key: number]: number }>({});
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const isItemInCart = (id: number) => {
    return items.some(item => item.id === id);
  };

  const categories = ['All', ...new Set(petAccessories.map(accessory => accessory.category))];

  const filteredAndSortedAccessories = useMemo(() => {
    let filtered = petAccessories;
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(accessory => accessory.category === selectedCategory);
    }
    return filtered.sort((a, b) => {
      if (sortBy === 'price') return a.price - b.price;
      if (sortBy === 'rating') return (b.rating || 0) - (a.rating || 0);
      return a.name.localeCompare(b.name);
    });
  }, [selectedCategory, sortBy]);

  const currentAccessories = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredAndSortedAccessories.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredAndSortedAccessories, currentPage]);

  const totalPages = Math.ceil(filteredAndSortedAccessories.length / itemsPerPage);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="bg-blue-50 rounded-lg shadow-md p-6 mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Pet Accessories</h1>
        <p className="text-gray-700 mb-4">
          Enhance your pet's lifestyle with our premium selection of accessories. From comfortable beds to interactive toys,
          we have everything your pet needs to live their best life.
        </p>
        <div className="grid md:grid-cols-3 gap-4 text-gray-600">
          <div className="flex items-start gap-2">
            <Star className="w-5 h-5 text-yellow-500 mt-1" />
            <p>Top-rated products from trusted brands</p>
          </div>
          <div className="flex items-start gap-2">
            <ShoppingBag className="w-5 h-5 text-blue-500 mt-1" />
            <p>Wide selection for all pet types</p>
          </div>
          <div className="flex items-start gap-2">
            <Filter className="w-5 h-5 text-green-500 mt-1" />
            <p>Quality-tested accessories</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Browse Accessories</h2>
        <div className="flex flex-wrap gap-4 items-center">
          <div className="flex items-center gap-2">
            <Filter className="w-5 h-5 text-gray-600" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="border rounded-lg px-3 py-2 bg-white hover:border-blue-500 transition-all duration-200"
              aria-label="Filter by Category"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-gray-600" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border rounded-lg px-3 py-2 bg-white hover:border-blue-500 transition-all duration-200"
            >
              <option value="name">Sort by Name</option>
              <option value="price">Sort by Price</option>
              <option value="rating">Sort by Rating</option>
            </select>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {currentAccessories.map(accessory => (
          <div key={accessory.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative pb-[66.67%]">
              <img 
                src={accessory.image} 
                alt={accessory.name} 
                className="absolute top-0 left-0 w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h2 className="text-lg sm:text-xl font-semibold text-gray-900">{accessory.name}</h2>
                {accessory.rating && (
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600">{accessory.rating}</span>
                  </div>
                )}
              </div>
              <p className="text-sm text-blue-600 mb-2">{accessory.category}</p>
              <p className="text-sm sm:text-base text-gray-600 mb-4">{accessory.description}</p>
              <div className="flex flex-col items-start gap-3 relative">
                <span className="text-xl sm:text-2xl font-bold text-blue-600">${accessory.price}</span>
                {isItemInCart(accessory.id) && (
                  <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                    In Cart
                  </span>
                )}
                <div className="flex items-center gap-2 w-full justify-start">
                  <input
                    type="number"
                    min="1"
                    value={quantities[accessory.id] || 1}
                    onChange={(e) => {
                      const value = parseInt(e.target.value) || 1;
                      setQuantities(prev => ({ ...prev, [accessory.id]: value }));
                    }}
                    className="w-20 px-2 py-1 border rounded-lg text-center text-sm sm:text-base"
                  />
                  <button 
                    onClick={() => {
                      if (!isAuthenticated) {
                        alert('Please log in to add items to the cart.');
                        return;
                      }
                      const quantity = quantities[accessory.id] || 1;
                      for (let i = 0; i < quantity; i++) {
                        addItem(accessory.id, accessory.name, accessory.price);
                      }
                      setQuantities(prev => ({ ...prev, [accessory.id]: 1 }));
                    }}
                    className="w-32 px-3 sm:px-4 py-2 bg-blue-500 text-white text-sm sm:text-base rounded-lg hover:bg-blue-600 hover:shadow-md transform hover:scale-105 transition-all duration-200 whitespace-nowrap"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {totalPages > 1 && (
        <div className="mt-8 flex justify-center gap-4">
          <button
            onClick={() => {
              setCurrentPage(prev => Math.max(1, prev - 1));
              scrollToTop();
            }}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-blue-600 hover:shadow-md transform hover:scale-105 transition-all duration-200"
          >
            Previous
          </button>
          <span className="flex items-center px-4 font-medium">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => {
              setCurrentPage(prev => Math.min(totalPages, prev + 1));
              scrollToTop();
            }}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-blue-600 hover:shadow-md transform hover:scale-105 transition-all duration-200"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};
