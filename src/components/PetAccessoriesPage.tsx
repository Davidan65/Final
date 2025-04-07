import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

const scrollToTop = () => {
  window.scrollTo(0, 0);
};

type Accessory = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
};

const accessories: Accessory[] = [
  {
    id: 1,
    name: "Luxury Dog Collar",
    description: "Premium leather collar with brass hardware",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&q=80&w=500",
    category: "Collars & Leashes"
  },
  {
    id: 2,
    name: "Cozy Pet Bed",
    description: "Soft, washable bed with orthopedic foam",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=500",
    category: "Beds & Furniture"
  },
  {
    id: 3,
    name: "Interactive Cat Toy",
    description: "Electronic mouse with random movements",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&q=80&w=500",
    category: "Toys"
  },
  {
    id: 4,
    name: "Professional Grooming Brush",
    description: "Double-sided brush for all coat types",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1583511655826-05700442b31b?auto=format&fit=crop&q=80&w=500",
    category: "Grooming"
  },
  {
    id: 5,
    name: "Stylish Dog Sweater",
    description: "Warm knit sweater for cold weather",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=500",
    category: "Clothing"
  },
  {
    id: 6,
    name: "Automatic Water Fountain",
    description: "Filtered water fountain with LED indicator",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&q=80&w=500",
    category: "Feeding & Water"
  },
  {
    id: 7,
    name: "Travel Pet Carrier",
    description: "Airline-approved carrier with padding",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=500",
    category: "Travel"
  },
  {
    id: 8,
    name: "Dental Care Kit",
    description: "Complete kit for oral hygiene",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=500",
    category: "Health & Wellness"
  },
  {
    id: 9,
    name: "Bird Cage Accessories Set",
    description: "Swings, perches, and toys for birds",
    price: 44.99,
    image: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&q=80&w=500",
    category: "Bird Supplies"
  },
  {
    id: 10,
    name: "Fish Tank Decor Kit",
    description: "Artificial plants and ornaments",
    price: 32.99,
    image: "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&q=80&w=500",
    category: "Aquarium"
  },
  {
    id: 11,
    name: "Retractable Dog Leash",
    description: "16ft leash with anti-slip handle",
    price: 27.99,
    image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&q=80&w=500",
    category: "Collars & Leashes"
  },
  {
    id: 12,
    name: "Cat Climbing Tree",
    description: "Multi-level tree with scratching posts",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=500",
    category: "Beds & Furniture"
  },
  {
    id: 13,
    name: "Puzzle Treat Dispenser",
    description: "Mental stimulation toy for dogs",
    price: 22.99,
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&q=80&w=500",
    category: "Toys"
  },
  {
    id: 14,
    name: "Pet Nail Clippers",
    description: "Professional-grade nail trimmer",
    price: 18.99,
    image: "https://images.unsplash.com/photo-1583511655826-05700442b31b?auto=format&fit=crop&q=80&w=500",
    category: "Grooming"
  },
  {
    id: 15,
    name: "Raincoat for Dogs",
    description: "Waterproof coat with reflective strips",
    price: 31.99,
    image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=500",
    category: "Clothing"
  },
  {
    id: 16,
    name: "Automatic Pet Feeder",
    description: "Programmable feeder with timer",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&q=80&w=500",
    category: "Feeding & Water"
  },
  {
    id: 17,
    name: "Pet First Aid Kit",
    description: "Complete emergency care kit",
    price: 45.99,
    image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=500",
    category: "Health & Wellness"
  },
  {
    id: 18,
    name: "Bird Training Kit",
    description: "Training tools and treats for birds",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&q=80&w=500",
    category: "Bird Supplies"
  },
  {
    id: 19,
    name: "Aquarium Cleaning Set",
    description: "Complete tank maintenance kit",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&q=80&w=500",
    category: "Aquarium"
  },
  {
    id: 20,
    name: "GPS Pet Tracker",
    description: "Real-time location tracking device",
    price: 99.99,
    image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&q=80&w=500",
    category: "Tech Accessories"
  },
  {
    id: 21,
    name: "Memory Foam Pet Mattress",
    description: "Therapeutic bed for senior pets",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=500",
    category: "Beds & Furniture"
  },
  {
    id: 22,
    name: "Fetch Ball Set",
    description: "Durable balls with launcher",
    price: 25.99,
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&q=80&w=500",
    category: "Toys"
  },
  {
    id: 23,
    name: "Pet Shampoo & Conditioner",
    description: "Natural ingredients for sensitive skin",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1583511655826-05700442b31b?auto=format&fit=crop&q=80&w=500",
    category: "Grooming"
  },
  {
    id: 24,
    name: "Winter Pet Boots",
    description: "Set of 4 waterproof boots",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=500",
    category: "Clothing"
  },
  {
    id: 25,
    name: "Smart Pet Bowl",
    description: "Portion control with app integration",
    price: 54.99,
    image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&q=80&w=500",
    category: "Feeding & Water"
  },
  {
    id: 26,
    name: "Pet Backpack Carrier",
    description: "Ventilated hiking backpack",
    price: 64.99,
    image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=500",
    category: "Travel"
  },
  {
    id: 27,
    name: "Pet Vitamins Set",
    description: "Complete daily supplement pack",
    price: 37.99,
    image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=500",
    category: "Health & Wellness"
  },
  {
    id: 28,
    name: "Bird Bath Fountain",
    description: "Solar-powered bath with filter",
    price: 42.99,
    image: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&q=80&w=500",
    category: "Bird Supplies"
  },
  {
    id: 29,
    name: "LED Aquarium Light",
    description: "Programmable full-spectrum light",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&q=80&w=500",
    category: "Aquarium"
  },
  {
    id: 30,
    name: "Pet Camera",
    description: "Wi-Fi camera with treat dispenser",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&q=80&w=500",
    category: "Tech Accessories"
  }
];

export const PetAccessoriesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const { addItem } = useCart();

  const filteredAccessories = accessories.filter(accessory => {
    const matchesCategory = selectedCategory === 'All' || accessory.category === selectedCategory;
    const matchesSearch = accessory.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         accessory.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
              health, and happiness. From essential everyday items to luxury pet products, we have everything
              you need to pamper your furry friend.
            </p>
          </div>
        </div>

        {/* Accessories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredAccessories.map((accessory) => (
            <div key={accessory.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <img
                src={accessory.image}
                alt={accessory.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold">{accessory.name}</h3>
                  <span className="text-blue-600 font-bold">${accessory.price}</span>
                </div>
                <p className="text-gray-600 text-sm mb-4">{accessory.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{accessory.category}</span>
                  <button
                    onClick={() => handleAddToCart(accessory)}
                    className="flex items-center gap-2 bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors"
                  >
                    <ShoppingBag className="h-4 w-4" />
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};