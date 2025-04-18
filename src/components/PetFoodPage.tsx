import { useState, useEffect, useMemo } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useCart } from '../contexts/CartContext';
import { Filter, Star, ShoppingBag, Shield, Heart, Plus, Edit, Trash2 } from 'lucide-react';

interface PetFood {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  brand: string;
  weight: string;
  ingredients: string[];
  nutritionalInfo: {
    protein: string;
    fat: string;
    fiber: string;
    moisture: string;
  };
}

const scrollToTop = () => {
  window.scrollTo(0, 0);
};

export const PetFoodPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const { addItem, items } = useCart();
  const { isAuthenticated, user } = useAuth();
  const [petFoods, setPetFoods] = useState<PetFood[]>([]);
  const [isAdding, setIsAdding] = useState(false);
  const [editingFood, setEditingFood] = useState<PetFood | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    image: '',
    category: '',
    weight: ''
  });
  const itemsPerPage = 8;

  useEffect(() => {
    fetchPetFoods();
    scrollToTop();
  }, []);

  useEffect(() => {
    scrollToTop();
  }, [currentPage]);

  const fetchPetFoods = async () => {
    try {
      const response = await fetch('http://localhost:5002/api/pet-food');
      const data = await response.json();
      setPetFoods(data);
    } catch (error) {
      console.error('Error fetching pet foods:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const url = editingFood 
        ? `http://localhost:5002/api/pet-food/${editingFood.id}`
        : 'http://localhost:5002/api/pet-food';
      
      const response = await fetch(url, {
        method: editingFood ? 'PUT' : 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        await fetchPetFoods();
        setIsAdding(false);
        setEditingFood(null);
        setFormData({
          name: '',
          description: '',
          price: '',
          image: '',
          category: '',
          weight: ''
        });
      }
    } catch (error) {
      console.error('Error saving pet food:', error);
    }
  };

  const handleDelete = async (id: number) => {
    if (!window.confirm('Are you sure you want to delete this item?')) return;
    
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`http://localhost:5002/api/pet-food/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.ok) {
        await fetchPetFoods();
      }
    } catch (error) {
      console.error('Error deleting pet food:', error);
    }
  };

  const handleEdit = (food: PetFood) => {
    setEditingFood(food);
    setFormData({
      name: food.name,
      description: food.description,
      price: food.price.toString(),
      image: food.image,
      category: food.category,
      weight: food.weight
    });
  };

  const filteredPetFoods = useMemo(() => {
    return petFoods.filter(food => {
      const matchesCategory = selectedCategory === 'All' || food.category === selectedCategory;
      const matchesSearch = food.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           food.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [petFoods, selectedCategory, searchTerm]);

  const currentPetFoods = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredPetFoods.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredPetFoods, currentPage]);

  const totalPages = Math.ceil(filteredPetFoods.length / itemsPerPage);

  const isItemInCart = (id: number) => {
    return items.some(item => item.id === id);
  };

  const handleAddToCart = (food: PetFood) => {
    addItem(food.id, food.name, food.price);
  };

  // Get unique categories
  const categories = ['All', ...new Set(petFoods.map(f => f.category))];

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
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="border rounded-lg px-3 py-2 bg-white hover:border-blue-500 transition-all duration-200"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-gray-600" />
            <input
              type="text"
              placeholder="Search pet food..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border rounded-lg px-3 py-2 bg-white hover:border-blue-500 transition-all duration-200"
            />
          </div>
          {user?.role === 'admin' && (
            <button
              onClick={() => {
                setIsAdding(true);
                setEditingFood(null);
                setFormData({
                  name: '',
                  description: '',
                  price: '',
                  image: '',
                  category: '',
                  weight: ''
                });
              }}
              className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
            >
              <Plus className="w-5 h-5" />
              Add New Food
            </button>
          )}
        </div>
      </div>

      {/* Add/Edit Form */}
      {(isAdding || editingFood) && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4">
              {editingFood ? 'Edit Pet Food' : 'Add New Pet Food'}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Description</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Price</label>
                <input
                  type="number"
                  step="0.01"
                  value={formData.price}
                  onChange={(e) => setFormData({...formData, price: e.target.value})}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Image URL</label>
                <input
                  type="url"
                  value={formData.image}
                  onChange={(e) => setFormData({...formData, image: e.target.value})}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Category</label>
                <input
                  type="text"
                  value={formData.category}
                  onChange={(e) => setFormData({...formData, category: e.target.value})}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Weight</label>
                <input
                  type="text"
                  value={formData.weight}
                  onChange={(e) => setFormData({...formData, weight: e.target.value})}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  onClick={() => {
                    setIsAdding(false);
                    setEditingFood(null);
                  }}
                  className="px-4 py-2 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                  {editingFood ? 'Update' : 'Add'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {currentPetFoods.map(food => (
          <div key={food.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative pb-[66.67%]">
              <img 
                src={food.image} 
                alt={food.name} 
                className="absolute top-0 left-0 w-full h-full object-cover"
                loading="lazy"
              />
              {user?.role === 'admin' && (
                <div className="absolute top-2 right-2 flex gap-2">
                  <button
                    onClick={() => handleEdit(food)}
                    className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600"
                  >
                    <Edit className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(food.id)}
                    className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h2 className="text-lg sm:text-xl font-semibold text-gray-900">{food.name}</h2>
              </div>
              <p className="text-sm sm:text-base text-gray-600 mb-2">{food.description}</p>
              <div className="text-sm text-gray-500 mb-4">
                <p>Weight: {food.weight}</p>
              </div>
              <div className="flex flex-col items-start gap-3 relative">
                <span className="text-xl sm:text-2xl font-bold text-blue-600">${food.price.toFixed(2)}</span>
                <button 
                  onClick={() => handleAddToCart(food)}
                  disabled={!isAuthenticated || isItemInCart(food.id)}
                  className={`w-32 px-3 sm:px-4 py-2 rounded-lg ${
                    !isAuthenticated || isItemInCart(food.id)
                      ? 'bg-gray-300 cursor-not-allowed'
                      : 'bg-blue-500 text-white hover:bg-blue-600'
                  }`}
                >
                  {!isAuthenticated
                    ? 'Login to Add'
                    : isItemInCart(food.id)
                    ? 'Added to Cart'
                    : 'Add to Cart'}
                </button>
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