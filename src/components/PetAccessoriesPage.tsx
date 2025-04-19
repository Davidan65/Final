import { useState, useEffect, useMemo } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useCart } from '../contexts/CartContext';
import { Filter, Star, ShoppingBag, Shield, Heart, Plus, Edit, Trash2 } from 'lucide-react';

interface Accessory {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  brand?: string;
  material?: string;
  size?: string;
  color?: string;
}

const scrollToTop = () => {
  window.scrollTo(0, 0);
};

export const PetAccessoriesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const { addItem, items, removeItem } = useCart();
  const { user } = useAuth();
  const [accessories, setAccessories] = useState<Accessory[]>([]);
  const [isAdding, setIsAdding] = useState(false);
  const [editingAccessory, setEditingAccessory] = useState<Accessory | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    image: '',
    category: '',
    material: '',
    size: '',
    color: ''
  });
  const itemsPerPage = 8;

  useEffect(() => {
    fetchAccessories();
    scrollToTop();
  }, []);

  useEffect(() => {
    scrollToTop();
  }, [currentPage]);

  const fetchAccessories = async () => {
    try {
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      console.log('Fetching accessories from:', `${API_URL}/api/accessories`);
      const response = await fetch(`${API_URL}/api/accessories`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });
      console.log('Response status:', response.status);
      if (!response.ok) {
        throw new Error(`Failed to fetch accessories: ${response.status} ${response.statusText}`);
      }
      const data = await response.json();
      console.log('Received data:', data);
      setAccessories(data);
    } catch (error) {
      console.error('Error fetching accessories:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      const url = editingAccessory 
        ? `${API_URL}/api/accessories/${editingAccessory._id}`
        : `${API_URL}/api/accessories`;
      
      const response = await fetch(url, {
        method: editingAccessory ? 'PUT' : 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        await fetchAccessories();
        setIsAdding(false);
        setEditingAccessory(null);
        setFormData({
          name: '',
          description: '',
          price: '',
          image: '',
          category: '',
          material: '',
          size: '',
          color: ''
        });
      }
    } catch (error) {
      console.error('Error saving accessory:', error);
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this item?')) return;
    
    try {
      const token = localStorage.getItem('token');
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      const response = await fetch(`${API_URL}/api/accessories/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.ok) {
        await fetchAccessories();
      }
    } catch (error) {
      console.error('Error deleting accessory:', error);
    }
  };

  const handleEdit = (accessory: Accessory) => {
    setEditingAccessory(accessory);
    setFormData({
      name: accessory.name,
      description: accessory.description,
      price: accessory.price.toString(),
      image: accessory.image,
      category: accessory.category,
      material: accessory.material || '',
      size: accessory.size || '',
      color: accessory.color || ''
    });
  };

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

  const isItemInCart = (id: string) => {
    // Convert string ID to number for comparison
    const numericId = parseInt(id);
    return items.some(item => item.id === numericId);
  };

  const handleAddToCart = (accessory: Accessory) => {
    // Convert string ID to number for cart operations
    const numericId = parseInt(accessory._id);
    if (isItemInCart(accessory._id)) {
      removeItem(numericId);
    } else {
      addItem(numericId, accessory.name, accessory.price);
    }
  };

  // Get unique categories
  const categories = ['All', ...new Set(accessories.map(a => a.category))];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="bg-blue-50 rounded-lg shadow-md p-6 mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Premium Pet Accessories</h1>
        <p className="text-gray-700 mb-4">
          Discover our carefully curated selection of high-quality pet accessories designed for comfort, style, and durability. From cozy beds to stylish collars, we have everything your pet needs.
        </p>
        <div className="grid md:grid-cols-3 gap-4 text-gray-600">
          <div className="flex items-start gap-2">
            <Shield className="w-5 h-5 text-blue-500 mt-1" />
            <p>Premium quality materials and craftsmanship</p>
          </div>
          <div className="flex items-start gap-2">
            <Heart className="w-5 h-5 text-red-500 mt-1" />
            <p>Comfort and safety first</p>
          </div>
          <div className="flex items-start gap-2">
            <Star className="w-5 h-5 text-yellow-500 mt-1" />
            <p>Vet-approved designs</p>
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
              placeholder="Search accessories..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border rounded-lg px-3 py-2 bg-white hover:border-blue-500 transition-all duration-200"
            />
          </div>
          {user?.role === 'admin' && (
            <button
              onClick={() => {
                setIsAdding(true);
                setEditingAccessory(null);
                setFormData({
                  name: '',
                  description: '',
                  price: '',
                  image: '',
                  category: '',
                  material: '',
                  size: '',
                  color: ''
                });
              }}
              className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
            >
              <Plus className="w-5 h-5" />
              Add New Accessory
            </button>
          )}
        </div>
      </div>

      {/* Add/Edit Form */}
      {(isAdding || editingAccessory) && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full relative z-50">
            <h2 className="text-2xl font-bold mb-4">
              {editingAccessory ? 'Edit Accessory' : 'Add New Accessory'}
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
                <label className="block text-sm font-medium text-gray-700">Material</label>
                <input
                  type="text"
                  value={formData.material}
                  onChange={(e) => setFormData({...formData, material: e.target.value})}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Size</label>
                <input
                  type="text"
                  value={formData.size}
                  onChange={(e) => setFormData({...formData, size: e.target.value})}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Color</label>
                <input
                  type="text"
                  value={formData.color}
                  onChange={(e) => setFormData({...formData, color: e.target.value})}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  onClick={() => {
                    setIsAdding(false);
                    setEditingAccessory(null);
                  }}
                  className="px-4 py-2 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                  {editingAccessory ? 'Update' : 'Add'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {currentAccessories.map((accessory) => (
          <div key={accessory._id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full">
            <div className="relative h-48">
              <img
                src={accessory.image}
                alt={accessory.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1583511655826-05700442b31b?auto=format&fit=crop&q=80&w=300&h=200';
                }}
              />
              {user?.role === 'admin' && (
                <div className="absolute top-2 right-2 flex gap-2">
                  <button
                    onClick={() => handleEdit(accessory)}
                    className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600"
                  >
                    <Edit className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(accessory._id)}
                    className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold mb-2">{accessory.name}</h3>
              <div className="flex-grow">
                <p className="text-gray-600 mb-2 line-clamp-3">{accessory.description}</p>
                <p className="text-lg font-bold text-blue-600 mb-2">${accessory.price.toFixed(2)}</p>
              </div>
              <div className="mt-auto">
                <button
                  onClick={() => handleAddToCart(accessory)}
                  className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
                >
                  {isItemInCart(accessory._id) ? 'Remove from Cart' : 'Add to Cart'}
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