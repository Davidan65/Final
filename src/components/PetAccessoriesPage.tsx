import React, { useState } from 'react';
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';
import { Filter, Star, Info, ShoppingBag, Shield, Heart } from 'lucide-react';

type PetAccessory = {
  id: number;
  name: string;
  category: string;
  description: string;
  price: number;
  image: string;
  brand?: string;
  features?: string[];
};

const petAccessories: PetAccessory[] = [
  {
    id: 1,
    name: "Luxury Dog Collar",
    category: "Collars & Leashes",
    description: "Premium leather collar with brass hardware",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&q=80&w=500",
    brand: "PetStyle",
    features: ["Genuine Leather", "Adjustable Size"]
  },
  {
    id: 2,
    name: "Cat Grooming Brush",
    category: "Grooming",
    description: "Self-cleaning slicker brush for cats",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&q=80&w=500",
    brand: "PurrFect",
    features: ["Self-Cleaning", "Soft Bristles"]
  },
  {
    id: 3,
    name: "Interactive Dog Toy",
    category: "Toys",
    description: "Treat-dispensing puzzle toy for mental stimulation",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&q=80&w=500",
    brand: "PawPlay",
    features: ["Durable", "Interactive"]
  },
  {
    id: 4,
    name: "Pet Water Fountain",
    category: "Feeding",
    description: "Filtered water fountain with quiet operation",
    price: 44.99,
    image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&q=80&w=500",
    brand: "AquaPet",
    features: ["Filtered", "LED Indicator"]
  },
  {
    id: 5,
    name: "Cozy Pet Bed",
    category: "Bedding",
    description: "Orthopedic memory foam pet bed",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&q=80&w=500",
    brand: "ComfortPaws",
    features: ["Memory Foam", "Washable Cover"]
  },
  {
    id: 6,
    name: "Cat Scratching Post",
    category: "Furniture",
    description: "Tall sisal rope scratching post with perch",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&q=80&w=500",
    brand: "ScratchMaster",
    features: ["Sisal Rope", "Stable Base"]
  },
  {
    id: 7,
    name: "Dog Training Clicker",
    category: "Training",
    description: "Professional dog training clicker with wrist strap",
    price: 9.99,
    image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&q=80&w=500",
    brand: "TrainPro",
    features: ["Loud Click", "Ergonomic Design"]
  },
  {
    id: 8,
    name: "Pet Carrier Backpack",
    category: "Travel",
    description: "Ventilated pet carrier backpack for small pets",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&q=80&w=500",
    brand: "PetVoyage",
    features: ["Ventilated", "Comfortable"]
  },
  {
    id: 9,
    name: "Automatic Pet Feeder",
    category: "Feeding",
    description: "Programmable automatic pet feeder with timer",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&q=80&w=500",
    brand: "SmartFeed",
    features: ["Programmable", "Large Capacity"]
  },
  {
    id: 10,
    name: "Pet Grooming Kit",
    category: "Grooming",
    description: "Complete grooming kit with scissors and combs",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&q=80&w=500",
    brand: "GroomPro",
    features: ["Professional Grade", "Complete Set"]
  },
  // Add more accessories here...
];

export const PetAccessoriesPage: React.FC = () => {
  const { addItem } = useCart();
  const { isAuthenticated } = useAuth();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', ...new Set(petAccessories.map(item => item.category))];

  const filteredAccessories = selectedCategory === 'all'
    ? petAccessories
    : petAccessories.filter(item => item.category === selectedCategory);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Pet Accessories</h1>
          <p className="text-gray-600 mb-4">Find the perfect accessories for your beloved pets</p>
        </div>

        <div className="flex items-center space-x-2 mb-4 md:mb-0">
          <Filter className="w-5 h-5 text-gray-500" />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {categories.map(category => (
              <option key={category} value={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredAccessories.map(item => (
          <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="relative">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-2 right-2 bg-white rounded-full p-1.5 shadow-md">
                <Heart className="w-5 h-5 text-red-500" />
              </div>
            </div>

            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <span className="text-lg font-bold text-blue-600">${item.price.toFixed(2)}</span>
              </div>

              <p className="text-gray-600 text-sm mb-3">{item.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {item.features?.map(feature => (
                  <span
                    key={feature}
                    className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              <button
                onClick={() => addItem(item.id, item.name, item.price)}
                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center gap-2"
                disabled={!isAuthenticated}
              >
                <ShoppingBag className="w-5 h-5" />
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};