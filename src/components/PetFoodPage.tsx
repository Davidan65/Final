import { useState, useEffect, useMemo } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useCart } from '../contexts/CartContext';
import { Filter, Star, ShoppingBag, Shield, Heart, Plus, Edit, Trash2 } from 'lucide-react';
import { Spinner } from './Spinner';

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
  const { addItem, items, removeItem } = useCart();
  const { user } = useAuth();
  const [petFoods, setPetFoods] = useState<PetFood[]>([]);
  const [isAdding, setIsAdding] = useState(false);
  const [editingFood, setEditingFood] = useState<PetFood | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
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
    let mounted = true;

    const loadPetFoods = async () => {
      try {
        const API_URL = 'https://final-2-1yn4.onrender.com';
        console.log('Fetching pet foods from:', API_URL);
        
        const response = await fetch(`${API_URL}/api/pet-food`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          credentials: 'include',
          mode: 'cors'
        });

        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(`Failed to fetch pet food: ${response.status} ${response.statusText}\n${errorText}`);
        }

        const data = await response.json();
        
        if (!Array.isArray(data)) {
          throw new Error('Invalid response format: expected an array of pet foods');
        }

        if (mounted) {
          setPetFoods(data);
          setIsLoading(false);
        }
      } catch (error) {
        console.error('Error loading pet foods:', error);
        if (mounted) {
          setPetFoods([]);
          setIsLoading(false);
        }
      }
    };

    loadPetFoods();
    scrollToTop();

    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    scrollToTop();
  }, [currentPage]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    try {
      const token = localStorage.getItem('token');
      const API_URL = 'https://final-2-1yn4.onrender.com';
      const url = editingFood 
        ? `${API_URL}/api/pet-food/${editingFood.id}`
        : `${API_URL}/api/pet-food`;
      
      const response = await fetch(url, {
        method: editingFood ? 'PUT' : 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error(`Failed to save pet food: ${response.status} ${response.statusText}`);
      }

      // Fetch the updated list
      const fetchResponse = await fetch(`${API_URL}/api/pet-food`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        credentials: 'include'
      });

      if (!fetchResponse.ok) {
        throw new Error(`Failed to fetch updated pet food: ${fetchResponse.status} ${fetchResponse.statusText}`);
      }

      const data = await fetchResponse.json();
      setPetFoods(data);
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
    } catch (error) {
      console.error('Error saving pet food:', error);
    } finally {
      setIsSaving(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!window.confirm('Are you sure you want to delete this item?')) return;
    
    try {
      const token = localStorage.getItem('token');
      const API_URL = 'https://final-2-1yn4.onrender.com';
      const response = await fetch(`${API_URL}/api/pet-food/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.ok) {
        // Fetch the updated list
        const fetchResponse = await fetch(`${API_URL}/api/pet-food`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          credentials: 'include'
        });

        if (fetchResponse.ok) {
          const data = await fetchResponse.json();
          setPetFoods(data);
        }
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
    if (!id) return false;
    console.log('Checking if item is in cart:', { id, items });
    return items.some(item => item.id === id.toString());
  };

  const handleAddToCart = (food: PetFood) => {
    if (!food || !food.id) {
      console.log('Invalid food item:', food);
      return;
    }
    
    console.log('Adding/removing from cart:', { food, isInCart: isItemInCart(food.id) });
    
    if (isItemInCart(food.id)) {
      removeItem(food.id.toString());
    } else {
      addItem(food.id.toString(), food.name, food.price);
    }
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
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full relative z-50">
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
                  disabled={isSaving}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 flex items-center gap-2"
                  disabled={isSaving}
                >
                  {isSaving ? (
                    <>
                      <Spinner size="small" color="text-white" />
                      <span>Saving...</span>
                    </>
                  ) : (
                    editingFood ? 'Update' : 'Add'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      
      {/* Products Grid */}
      {isLoading ? (
        <div className="flex justify-center items-center min-h-[400px]">
          <Spinner size="large" />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          {currentPetFoods.map((food) => (
            <div key={food.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full">
              <div className="relative h-48">
                <img
                  src={food.image.startsWith('https://encrypted-tbn') 
                    ? `https://images.weserv.nl/?url=${encodeURIComponent(food.image)}&w=300&h=200` 
                    : food.image}
                  alt={food.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=300&h=200';
                    target.onerror = null;
                  }}
                  crossOrigin="anonymous"
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
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-2">{food.name}</h3>
                <div className="flex-grow">
                  <p className="text-gray-600 mb-2 line-clamp-3">{food.description}</p>
                  <p className="text-lg font-bold text-blue-600 mb-2">${food.price.toFixed(2)}</p>
                </div>
                <div className="mt-auto">
                  <button
                    onClick={() => handleAddToCart(food)}
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
                  >
                    {isItemInCart(food.id) ? 'Remove from Cart' : 'Add to Cart'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
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