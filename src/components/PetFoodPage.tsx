import React, { useState, useMemo } from 'react';
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';
import { Filter, Star, Info, ShoppingBag, Shield, Heart } from 'lucide-react';

type PetFood = {
  id: number;
  name: string;
  type: string;
  description: string;
  price: number;
  image: string;
  rating?: number;
  brand?: string;
  features?: string[];
  lifestage?: string;
  weight?: string;
};

const scrollToTop = () => {
  window.scrollTo(0, 0);
};

const petFoods: PetFood[] = [
  {
    id: 1,
    name: "Premium Dog Kibble",
    type: "Dog",
    description: "High-quality dry food for adult dogs with balanced nutrition",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?auto=format&fit=crop&q=80&w=500",
    brand: "Royal Canin",
    features: ["Balanced Nutrition", "High Protein"],
    lifestage: "Adult",
    weight: "15 lbs"
  },
  {
    id: 2,
    name: "Gourmet Cat Food",
    type: "Cat",
    description: "Premium wet food with real fish and chicken pieces",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&q=80&w=500",
    brand: "Fancy Feast",
    features: ["Real Meat", "Grain Free"],
    lifestage: "Adult",
    weight: "5.5 oz x 24"
  },
  {
    id: 3,
    name: "Bird Seed Mix",
    type: "Bird",
    description: "Nutrient-rich seed blend for all types of pet birds",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1622861431942-7ef7ca828018?auto=format&fit=crop&q=80&w=500",
    brand: "Wild Harvest",
    features: ["Mixed Seeds", "Added Vitamins"],
    lifestage: "All Ages",
    weight: "4 lbs"
  },
  {
    id: 4,
    name: "Tropical Fish Flakes",
    type: "Fish",
    description: "Color-enhancing flakes for vibrant aquarium fish",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1584473457406-6240486418e9?auto=format&fit=crop&q=80&w=500",
    brand: "Tetra",
    features: ["Color Enhancing", "Easy Digestion"],
    lifestage: "All Ages",
    weight: "2.2 oz"
  },
  {
    id: 5,
    name: "Puppy Growth Formula",
    type: "Dog",
    description: "Specially formulated kibble for growing puppies",
    price: 54.99,
    image: "https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?auto=format&fit=crop&q=80&w=500",
    brand: "Hill's Science",
    features: ["DHA for Brain Development", "Small Kibble Size"],
    lifestage: "Puppy",
    weight: "12 lbs"
  },
  {
    id: 6,
    name: "Senior Cat Diet",
    type: "Cat",
    description: "Easy-to-digest food for older cats with added vitamins",
    price: 44.99,
    image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&q=80&w=500",
    brand: "Purina Pro Plan",
    features: ["Joint Support", "Digestive Health"],
    lifestage: "Senior",
    weight: "7 lbs"
  },
  {
    id: 7,
    name: "Exotic Bird Pellets",
    type: "Bird",
    description: "Complete nutrition for parrots and exotic birds",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1622861431942-7ef7ca828018?auto=format&fit=crop&q=80&w=500",
    brand: "Kaytee",
    features: ["Natural Colors", "No Artificial Preservatives"],
    lifestage: "Adult",
    weight: "3 lbs"
  },
  {
    id: 8,
    name: "Marine Fish Diet",
    type: "Fish",
    description: "Premium pellets for marine aquarium fish",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1584473457406-6240486418e9?auto=format&fit=crop&q=80&w=500",
    brand: "API",
    features: ["Slow Sinking", "Rich in Protein"],
    lifestage: "Adult",
    weight: "7 oz"
  },
  {
    id: 9,
    name: "Large Breed Dog Food",
    type: "Dog",
    description: "Specialized nutrition for large breed adult dogs",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?auto=format&fit=crop&q=80&w=500",
    brand: "Blue Buffalo",
    features: ["Joint Health", "Lean Muscle Support"],
    lifestage: "Adult",
    weight: "30 lbs"
  },
  {
    id: 10,
    name: "Indoor Cat Formula",
    type: "Cat",
    description: "Balanced nutrition for indoor cats with hairball control",
    price: 42.99,
    image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&q=80&w=500",
    brand: "Iams",
    features: ["Hairball Control", "Weight Management"],
    lifestage: "Adult",
    weight: "10 lbs"
  },
  {
    id: 11,
    name: "Finch Food Blend",
    type: "Bird",
    description: "Special seed mix for finches and small birds",
    price: 16.99,
    image: "https://images.unsplash.com/photo-1622861431942-7ef7ca828018?auto=format&fit=crop&q=80&w=500",
    brand: "Pennington",
    features: ["High Energy", "Premium Seeds"],
    lifestage: "All Ages",
    weight: "5 lbs"
  },
  {
    id: 12,
    name: "Goldfish Pellets",
    type: "Fish",
    description: "Floating pellets specially formulated for goldfish",
    price: 18.99,
    image: "https://images.unsplash.com/photo-1584473457406-6240486418e9?auto=format&fit=crop&q=80&w=500",
    brand: "Aqueon",
    features: ["Clear Water Formula", "Color Enhancing"],
    lifestage: "All Ages",
    weight: "5.8 oz"
  },
  {
    id: 13,
    name: "Grain-Free Dog Food",
    type: "Dog",
    description: "Premium grain-free formula with real meat as first ingredient",
    price: 64.99,
    image: "https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?auto=format&fit=crop&q=80&w=500",
    brand: "Taste of the Wild",
    features: ["Grain Free", "Novel Proteins"],
    lifestage: "Adult",
    weight: "28 lbs"
  },
  {
    id: 14,
    name: "Kitten Formula",
    type: "Cat",
    description: "Nutrient-rich food specially formulated for growing kittens",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&q=80&w=500",
    brand: "Royal Canin",
    features: ["Brain Development", "Immune Support"],
    lifestage: "Kitten",
    weight: "7 lbs"
  },
  {
    id: 15,
    name: "Canary Seed Mix",
    type: "Bird",
    description: "Premium seed blend for canaries with added vitamins",
    price: 21.99,
    image: "https://images.unsplash.com/photo-1622861431942-7ef7ca828018?auto=format&fit=crop&q=80&w=500",
    brand: "Kaytee",
    features: ["Vitamin Enriched", "No Fillers"],
    lifestage: "All Ages",
    weight: "2 lbs"
  },
  {
    id: 16,
    name: "Betta Fish Food",
    type: "Fish",
    description: "Premium floating pellets for bettas with natural ingredients",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1584473457406-6240486418e9?auto=format&fit=crop&q=80&w=500",
    brand: "Fluval",
    features: ["Color Enhancing", "High Protein"],
    lifestage: "Adult",
    weight: "1.2 oz"
  },
  {
    id: 17,
    name: "Weight Management Dog Food",
    type: "Dog",
    description: "Low-calorie formula for weight control with satisfying fiber",
    price: 56.99,
    image: "https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?auto=format&fit=crop&q=80&w=500",
    brand: "Hill's Science Diet",
    features: ["Weight Control", "Lean Protein"],
    lifestage: "Adult",
    weight: "25 lbs"
  },
  {
    id: 18,
    name: "Urinary Health Cat Food",
    type: "Cat",
    description: "Specialized formula for urinary tract health",
    price: 48.99,
    image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&q=80&w=500",
    brand: "Purina ONE",
    features: ["pH Balance", "Low Magnesium"],
    lifestage: "Adult",
    weight: "16 lbs"
  },
  {
    id: 19,
    name: "Parakeet Formula",
    type: "Bird",
    description: "Complete diet for parakeets with fruits and vegetables",
    price: 23.99,
    image: "https://images.unsplash.com/photo-1622861431942-7ef7ca828018?auto=format&fit=crop&q=80&w=500",
    brand: "ZuPreem",
    features: ["Natural Flavors", "Balanced Nutrition"],
    lifestage: "Adult",
    weight: "2.25 lbs"
  },
  {
    id: 20,
    name: "Cichlid Pellets",
    type: "Fish",
    description: "Color-enhancing pellets for all cichlids",
    price: 27.99,
    image: "https://images.unsplash.com/photo-1584473457406-6240486418e9?auto=format&fit=crop&q=80&w=500",
    brand: "Hikari",
    features: ["Color Enhancing", "Floating Pellets"],
    lifestage: "All Ages",
    weight: "8.8 oz"
  },
  {
    id: 21,
    name: "Senior Dog Formula",
    type: "Dog",
    description: "Easy-to-digest formula for senior dogs with joint support",
    price: 52.99,
    image: "https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?auto=format&fit=crop&q=80&w=500",
    brand: "Purina Pro Plan",
    features: ["Joint Health", "Brain Function"],
    lifestage: "Senior",
    weight: "18 lbs"
  },
  {
    id: 22,
    name: "Sensitive Stomach Cat Food",
    type: "Cat",
    description: "Gentle formula for cats with sensitive digestion",
    price: 45.99,
    image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&q=80&w=500",
    brand: "Hill's Science Diet",
    features: ["Easy Digestion", "Prebiotic Fiber"],
    lifestage: "Adult",
    weight: "13 lbs"
  },
  {
    id: 23,
    name: "Cockatiel Food",
    type: "Bird",
    description: "Premium seed and pellet blend for cockatiels",
    price: 25.99,
    image: "https://images.unsplash.com/photo-1622861431942-7ef7ca828018?auto=format&fit=crop&q=80&w=500",
    brand: "Kaytee",
    features: ["Omega-3 Rich", "Probiotics"],
    lifestage: "Adult",
    weight: "4.5 lbs"
  },
  {
    id: 24,
    name: "Bottom Feeder Tablets",
    type: "Fish",
    description: "Sinking tablets for bottom feeding fish",
    price: 15.99,
    image: "https://images.unsplash.com/photo-1584473457406-6240486418e9?auto=format&fit=crop&q=80&w=500",
    brand: "API",
    features: ["Fast Sinking", "Complete Nutrition"],
    lifestage: "All Ages",
    weight: "3.7 oz"
  },
  {
    id: 25,
    name: "Small Breed Dog Food",
    type: "Dog",
    description: "Specially formulated kibble for small breed dogs",
    price: 47.99,
    image: "https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?auto=format&fit=crop&q=80&w=500",
    brand: "Royal Canin",
    features: ["Small Kibble", "Dental Care"],
    lifestage: "Adult",
    weight: "14 lbs"
  },
  {
    id: 26,
    name: "Dental Health Cat Food",
    type: "Cat",
    description: "Crunchy kibble that helps reduce tartar buildup",
    price: 43.99,
    image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&q=80&w=500",
    brand: "Science Diet",
    features: ["Tartar Control", "Fresh Breath"],
    lifestage: "Adult",
    weight: "9 lbs"
  },
  {
    id: 27,
    name: "Lovebird Food",
    type: "Bird",
    description: "Balanced diet for lovebirds with dried fruits",
    price: 22.99,
    image: "https://images.unsplash.com/photo-1622861431942-7ef7ca828018?auto=format&fit=crop&q=80&w=500",
    brand: "Wild Harvest",
    features: ["Fruit Enriched", "Shell Free"],
    lifestage: "All Ages",
    weight: "3 lbs"
  },
  {
    id: 28,
    name: "Tropical Fish Granules",
    type: "Fish",
    description: "Slow-sinking granules for tropical fish",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1584473457406-6240486418e9?auto=format&fit=crop&q=80&w=500",
    brand: "Tetra",
    features: ["Multi-Vitamin", "Clear Water"],
    lifestage: "All Ages",
    weight: "3.52 oz"
  },
  {
    id: 29,
    name: "Hypoallergenic Dog Food",
    type: "Dog",
    description: "Limited ingredient diet for dogs with food sensitivities",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?auto=format&fit=crop&q=80&w=500",
    brand: "Blue Buffalo",
    features: ["Limited Ingredients", "Novel Protein"],
    lifestage: "Adult",
    weight: "22 lbs"
  },
  {
    id: 30,
    name: "Weight Control Cat Food",
    type: "Cat",
    description: "Low-calorie formula for overweight cats",
    price: 41.99,
    image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&q=80&w=500",
    brand: "Purina Pro Plan",
    features: ["L-Carnitine", "High Fiber"],
    lifestage: "Adult",
    weight: "12 lbs"
  },
  {
    id: 31,
    name: "Budgie Blend",
    type: "Bird",
    description: "Complete seed mix for budgerigars",
    price: 18.99,
    image: "https://images.unsplash.com/photo-1622861431942-7ef7ca828018?auto=format&fit=crop&q=80&w=500",
    brand: "Pennington",
    features: ["Calcium Rich", "Fresh Mix"],
    lifestage: "All Ages",
    weight: "3 lbs"
  },
  {
    id: 32,
    name: "Discus Fish Food",
    type: "Fish",
    description: "Premium granules for discus fish",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1584473457406-6240486418e9?auto=format&fit=crop&q=80&w=500",
    brand: "Seachem",
    features: ["Color Intensity", "Growth Formula"],
    lifestage: "Adult",
    weight: "3.5 oz"
  },
  {
    id: 33,
    name: "Active Dog Formula",
    type: "Dog",
    description: "High-protein formula for active and working dogs",
    price: 62.99,
    image: "https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?auto=format&fit=crop&q=80&w=500",
    brand: "Eukanuba",
    features: ["High Energy", "Muscle Support"],
    lifestage: "Adult",
    weight: "33 lbs"
  },
  {
    id: 34,
    name: "Grain-Free Cat Food",
    type: "Cat",
    description: "Grain-free recipe with real meat and vegetables",
    price: 46.99,
    image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&q=80&w=500",
    brand: "Wellness",
    features: ["Grain Free", "All Natural"],
    lifestage: "Adult",
    weight: "11 lbs"
  },
  {
    id: 35,
    name: "Parrot Food",
    type: "Bird",
    description: "Large parrot food with nuts and dried fruits",
    price: 32.99,
    image: "https://images.unsplash.com/photo-1622861431942-7ef7ca828018?auto=format&fit=crop&q=80&w=500",
    brand: "ZuPreem",
    features: ["Large Pieces", "Natural Ingredients"],
    lifestage: "Adult",
    weight: "5 lbs"
  },
  {
    id: 36,
    name: "Koi Pond Pellets",
    type: "Fish",
    description: "Floating pellets for koi and pond fish",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1584473457406-6240486418e9?auto=format&fit=crop&q=80&w=500",
    brand: "TetraPond",
    features: ["Floating Type", "Growth Formula"],
    lifestage: "All Ages",
    weight: "4.85 lbs"
  },
  {
    id: 37,
    name: "Dental Care Dog Food",
    type: "Dog",
    description: "Special kibble texture for dental health",
    price: 53.99,
    image: "https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?auto=format&fit=crop&q=80&w=500",
    brand: "Pedigree",
    features: ["Dental Health", "Fresh Breath"],
    lifestage: "Adult",
    weight: "20 lbs"
  },
  {
    id: 38,
    name: "Limited Ingredient Cat Food",
    type: "Cat",
    description: "Simple recipe for cats with food sensitivities",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&q=80&w=500",
    brand: "Natural Balance",
    features: ["Limited Ingredients", "Novel Protein"],
    lifestage: "Adult",
    weight: "10 lbs"
  },
  {
    id: 39,
    name: "Dove Food Mix",
    type: "Bird",
    description: "Premium seed mix for doves and pigeons",
    price: 20.99,
    image: "https://images.unsplash.com/photo-1622861431942-7ef7ca828018?auto=format&fit=crop&q=80&w=500",
    brand: "Kaytee",
    features: ["High Protein", "Balanced Diet"],
    lifestage: "All Ages",
    weight: "5 lbs"
  },
  {
    id: 40,
    name: "Algae Wafers",
    type: "Fish",
    description: "Sinking wafers for algae-eating fish",
    price: 16.99,
    image: "https://images.unsplash.com/photo-1584473457406-6240486418e9?auto=format&fit=crop&q=80&w=500",
    brand: "Hikari",
    features: ["Vegetable Based", "Sinking Type"],
    lifestage: "All Ages",
    weight: "2.89 oz"
  }
];

export const PetFoodPage: React.FC = () => {
  const { addItem, items } = useCart();
  const { isAuthenticated } = useAuth();
  const [selectedType, setSelectedType] = useState<string>('All');
  const [sortBy, setSortBy] = useState<string>('name');
  const [quantities, setQuantities] = useState<{ [key: number]: number }>({});
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const isItemInCart = (id: number) => {
    return items.some(item => item.id === id);
  };

  const petTypes = ['All', ...new Set(petFoods.map(food => food.type))];

  const filteredAndSortedFoods = useMemo(() => {
    let filtered = petFoods;
    if (selectedType !== 'All') {
      filtered = filtered.filter(food => food.type === selectedType);
    }
    return filtered.sort((a, b) => {
      if (sortBy === 'price') return a.price - b.price;
      if (sortBy === 'rating') return (b.rating || 0) - (a.rating || 0);
      return a.name.localeCompare(b.name);
    });
  }, [selectedType, sortBy]);

  const currentFoods = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredAndSortedFoods.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredAndSortedFoods, currentPage]);

  const totalPages = Math.ceil(filteredAndSortedFoods.length / itemsPerPage);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="bg-blue-50 rounded-lg shadow-md p-6 mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Quality Pet Nutrition</h1>
        <p className="text-gray-700 mb-4">
          We understand that your pets are family, and their nutrition matters. Our carefully curated selection of premium pet foods is chosen to provide the best possible nutrition for your beloved companions at every life stage.
        </p>
        <div className="grid md:grid-cols-3 gap-4 text-gray-600">
          <div className="flex items-start gap-2">
            <Shield className="w-5 h-5 text-blue-500 mt-1" />
            <p>Premium quality ingredients from trusted brands</p>
          </div>
          <div className="flex items-start gap-2">
            <Heart className="w-5 h-5 text-red-500 mt-1" />
            <p>Tailored nutrition for every life stage</p>
          </div>
          <div className="flex items-start gap-2">
            <Star className="w-5 h-5 text-yellow-500 mt-1" />
            <p>Vet-recommended formulas</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Browse Pet Food</h2>
        <div className="flex flex-wrap gap-4 items-center">
          <div className="flex items-center gap-2">
            <Filter className="w-5 h-5 text-gray-600" />
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="border rounded-lg px-3 py-2 bg-white hover:border-blue-500 transition-all duration-200"
            >
              {petTypes.map(type => (
                <option key={type} value={type}>{type}</option>
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
        {currentFoods.map(food => (
          <div key={food.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative pb-[66.67%]">
              <img 
                src={food.image} 
                alt={food.name} 
                className="absolute top-0 left-0 w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h2 className="text-lg sm:text-xl font-semibold text-gray-900">{food.name}</h2>
                {food.rating && (
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600">{food.rating}</span>
                  </div>
                )}
              </div>
              {food.brand && (
                <p className="text-sm text-blue-600 mb-2">{food.brand}</p>
              )}
              <p className="text-sm sm:text-base text-gray-600 mb-2">{food.description}</p>
              {food.features && (
                <ul className="text-sm text-gray-600 mb-2 list-disc list-inside">
                  {food.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              )}
              <div className="text-sm text-gray-500 mb-4">
                <p>Weight: {food.weight || 'N/A'}</p>
                <p>Life Stage: {food.lifestage || 'Adult'}</p>
              </div>
              <div className="flex flex-col items-start gap-3 relative">
                <span className="text-xl sm:text-2xl font-bold text-blue-600">${food.price}</span>
                {isItemInCart(food.id) && (
                  <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                    In Cart
                  </span>
                )}
                <div className="flex items-center gap-2 w-full justify-start">
                  <input
                    type="number"
                    min="1"
                    value={quantities[food.id] || 1}
                    onChange={(e) => {
                      const value = parseInt(e.target.value) || 1;
                      setQuantities(prev => ({ ...prev, [food.id]: value }));
                    }}
                    className="w-20 px-2 py-1 border rounded-lg text-center text-sm sm:text-base"
                  />
                  <button 
                    onClick={() => {
                      if (!isAuthenticated) {
                        alert('Please log in to add items to the cart.');
                        return;
                      }
                      const quantity = quantities[food.id] || 1;
                      for (let i = 0; i < quantity; i++) {
                        addItem(food.id, food.name, food.price);
                      }
                      setQuantities(prev => ({ ...prev, [food.id]: 1 }));
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