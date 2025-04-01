import React, { useState } from 'react';
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';

type PetFood = {
  id: number;
  name: string;
  type: string;
  description: string;
  price: number;
  image: string;
};

const petFoods: PetFood[] = [
  {
    id: 1,
    name: "Premium Dog Kibble",
    type: "Dog",
    description: "High-quality dry food for adult dogs with balanced nutrition",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?auto=format&fit=crop&q=80&w=500"
  },
  {
    id: 2,
    name: "Gourmet Cat Food",
    type: "Cat",
    description: "Premium wet food with real fish and chicken pieces",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&q=80&w=500"
  },
  {
    id: 3,
    name: "Bird Seed Mix",
    type: "Bird",
    description: "Nutrient-rich seed blend for all types of pet birds",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1622861431942-7ef7ca828018?auto=format&fit=crop&q=80&w=500"
  },
  {
    id: 4,
    name: "Tropical Fish Flakes",
    type: "Fish",
    description: "Color-enhancing flakes for vibrant aquarium fish",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1584473457406-6240486418e9?auto=format&fit=crop&q=80&w=500"
  },
  {
    id: 5,
    name: "Puppy Growth Formula",
    type: "Dog",
    description: "Specially formulated kibble for growing puppies",
    price: 54.99,
    image: "https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?auto=format&fit=crop&q=80&w=500"
  },
  {
    id: 6,
    name: "Senior Cat Diet",
    type: "Cat",
    description: "Easy-to-digest food for older cats with added vitamins",
    price: 44.99,
    image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&q=80&w=500"
  },
  {
    id: 7,
    name: "Exotic Bird Pellets",
    type: "Bird",
    description: "Complete nutrition for parrots and exotic birds",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1622861431942-7ef7ca828018?auto=format&fit=crop&q=80&w=500"
  },
  {
    id: 8,
    name: "Marine Fish Diet",
    type: "Fish",
    description: "Premium pellets for marine aquarium fish",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1584473457406-6240486418e9?auto=format&fit=crop&q=80&w=500"
  },
  {
    id: 9,
    name: "Large Breed Dog Food",
    type: "Dog",
    description: "Specialized nutrition for large breed adult dogs",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?auto=format&fit=crop&q=80&w=500"
  },
  {
    id: 10,
    name: "Indoor Cat Formula",
    type: "Cat",
    description: "Balanced nutrition for indoor cats with hairball control",
    price: 42.99,
    image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&q=80&w=500"
  },
  {
    id: 11,
    name: "Finch Food Blend",
    type: "Bird",
    description: "Special seed mix for finches and small birds",
    price: 16.99,
    image: "https://images.unsplash.com/photo-1622861431942-7ef7ca828018?auto=format&fit=crop&q=80&w=500"
  },
  {
    id: 12,
    name: "Goldfish Pellets",
    type: "Fish",
    description: "Floating pellets specially formulated for goldfish",
    price: 18.99,
    image: "https://images.unsplash.com/photo-1584473457406-6240486418e9?auto=format&fit=crop&q=80&w=500"
  }
];

export const PetFoodPage: React.FC = () => {
  const { addItem, items } = useCart();
  const { isAuthenticated } = useAuth();
  
  const isItemInCart = (id: number) => {
    return items.some(item => item.id === id);
  };
  const [quantities, setQuantities] = useState<{ [key: number]: number }>({});
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Pet Food</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
        {petFoods.map(food => (
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
              <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">{food.name}</h2>
              <p className="text-sm sm:text-base text-gray-600 mb-4">{food.description}</p>
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
                    className="w-32 px-3 sm:px-4 py-2 bg-blue-500 text-white text-sm sm:text-base rounded-lg hover:bg-blue-600 transition-colors whitespace-nowrap"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};