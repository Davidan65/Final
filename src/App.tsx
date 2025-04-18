import React, { useState, useEffect, Suspense } from 'react';
import { Dog, Cat, Bird, Fish, ShoppingCart, Home, Menu, X, LogOut, ChevronDown } from 'lucide-react';
import { PetAccessoriesPage } from './components/PetAccessoriesPage';
import { Routes, Route, Link, useLocation, Navigate } from 'react-router-dom';
import { ScrollToTop } from './components/ScrollToTop';
import { useAuth } from './contexts/AuthContext';
import { CartProvider } from './contexts/CartContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

// Components
import ErrorBoundary from './components/ErrorBoundary';
import { HomePage } from './components/HomePage';
import { LoginPage, SignupPage } from './components/AuthPages';
import { Footer } from './components/Footer';
import { CheckoutPage } from './components/CheckoutPage';
import { AboutPage } from './components/AboutPage';
import { PetFoodPage } from './components/PetFoodPage';
import { CartCheckoutPage } from './components/CartCheckoutPage';
import { PetTrainingPage } from './components/PetTrainingPage';
import { PetAdoptionPage } from './components/PetAdoptionPage';
import { AdoptPage } from './components/AdoptPage';
import { PetList } from './components/PetList';
import { GroomingServicesPage } from './components/GroomingServicesPage';
import { VeterinaryReferralsPage } from './components/VeterinaryReferralsPage';
import { ServicesPage } from './components/ServicesPage';
import EnhancedServicesPage from './components/EnhancedServicesPage';
import PetTrainingResourcesPage from './components/PetTrainingResourcesPage';
import EmergencyFeaturesPage from './components/EmergencyFeaturesPage';
import { AdminPanel } from './components/AdminPanel';

// Utilities
const scrollToTop = () => {
  window.scrollTo(0, 0);
};

type Pet = {
  id: number;
  name: string;
  type: string;
  breed: string;
  age: string;
  price: number;
  image: string;
};

const pets: Pet[] = [
  // Dogs
  {
    id: 1,
    name: "Luna",
    type: "Dog",
    breed: "Golden Retriever",
    age: "2 years",
    price: 1200,
    image: "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&q=80&w=500"
  },
  {
    id: 2,
    name: "Max",
    type: "Dog",
    breed: "German Shepherd",
    age: "1.5 years",
    price: 1500,
    image: "https://images.unsplash.com/photo-1589941013453-338cba0ad803?auto=format&fit=crop&q=80&w=500"
  },
  {
    id: 3,
    name: "Bella",
    type: "Dog",
    breed: "Labrador",
    age: "8 months",
    price: 1100,
    image: "https://images.unsplash.com/photo-1591160690555-5debfba289f0?auto=format&fit=crop&q=80&w=500"
  },
  {
    id: 4,
    name: "Rocky",
    type: "Dog",
    breed: "Husky",
    age: "3 years",
    price: 1300,
    image: "https://images.unsplash.com/photo-1605568427561-40dd23c2acea?auto=format&fit=crop&q=80&w=500"
  },
  {
    id: 5,
    name: "Charlie",
    type: "Dog",
    breed: "Poodle",
    age: "1 year",
    price: 1400,
    image: "https://images.unsplash.com/photo-1616590284209-4ca544f4e19b?auto=format&fit=crop&q=80&w=500"
  },
  {
    id: 6,
    name: "Bailey",
    type: "Dog",
    breed: "Beagle",
    age: "2 years",
    price: 900,
    image: "https://images.unsplash.com/photo-1505628346881-b72b27e84530?auto=format&fit=crop&q=80&w=500"
  },
  {
    id: 7,
    name: "Cooper",
    type: "Dog",
    breed: "Rottweiler",
    age: "4 years",
    price: 1600,
    image: "https://images.unsplash.com/photo-1567752881298-894bb81f9379?auto=format&fit=crop&q=80&w=500"
  },
  {
    id: 8,
    name: "Daisy",
    type: "Dog",
    breed: "Corgi",
    age: "1 year",
    price: 1800,
    image: "https://images.unsplash.com/photo-1612536057832-2ff7ead58194?auto=format&fit=crop&q=80&w=500"
  },
  {
    id: 9,
    name: "Milo",
    type: "Dog",
    breed: "Dachshund",
    age: "6 months",
    price: 1000,
    image: "https://images.unsplash.com/photo-1612195583950-b8fd34c87093?auto=format&fit=crop&q=80&w=500"
  },
  {
    id: 10,
    name: "Lucy",
    type: "Dog",
    breed: "Bulldog",
    age: "2 years",
    price: 2000,
    image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=500"
  },
  
  // Cats
  {
    id: 11,
    name: "Oliver",
    type: "Cat",
    breed: "British Shorthair",
    age: "1 year",
    price: 800,
    image: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&q=80&w=500"
  },
  {
    id: 12,
    name: "Leo",
    type: "Cat",
    breed: "Maine Coon",
    age: "2 years",
    price: 1200,
    image: "https://images.unsplash.com/photo-1608032364895-0da67af36cd2?auto=format&fit=crop&q=80&w=500"
  },
  {
    id: 13,
    name: "Milo",
    type: "Cat",
    breed: "Persian",
    age: "1.5 years",
    price: 1000,
    image: "https://images.unsplash.com/photo-1610023050964-dead08a8fc60?auto=format&fit=crop&q=80&w=500"
  },
  {
    id: 14,
    name: "Simba",
    type: "Cat",
    breed: "Bengal",
    age: "3 years",
    price: 1500,
    image: "https://images.unsplash.com/photo-1513245543132-31f507417b26?auto=format&fit=crop&q=80&w=500"
  },
  {
    id: 15,
    name: "Luna",
    type: "Cat",
    breed: "Siamese",
    age: "1 year",
    price: 900,
    image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&q=80&w=500"
  },
  {
    id: 16,
    name: "Bella",
    type: "Cat",
    breed: "Ragdoll",
    age: "2 years",
    price: 1100,
    image: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?auto=format&fit=crop&q=80&w=500"
  },
  {
    id: 17,
    name: "Charlie",
    type: "Cat",
    breed: "Scottish Fold",
    age: "1 year",
    price: 1300,
    image: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?auto=format&fit=crop&q=80&w=500"
  },
  {
    id: 18,
    name: "Willow",
    type: "Cat",
    breed: "Sphynx",
    age: "6 months",
    price: 1600,
    image: "https://images.unsplash.com/photo-1606214174585-fe31582dc6ee?auto=format&fit=crop&q=80&w=500"
  },
  {
    id: 19,
    name: "Shadow",
    type: "Cat",
    breed: "Russian Blue",
    age: "2 years",
    price: 950,
    image: "https://images.unsplash.com/photo-1511044568932-338cba0ad803?auto=format&fit=crop&q=80&w=500"
  },
  {
    id: 20,
    name: "Lily",
    type: "Cat",
    breed: "American Shorthair",
    age: "1.5 years",
    price: 700,
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=500"
  },

  // Birds
  {
    id: 21,
    name: "Charlie",
    type: "Bird",
    breed: "Cockatiel",
    age: "6 months",
    price: 300,
    image: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&q=80&w=500"
  },
  {
    id: 22,
    name: "Rio",
    type: "Bird",
    breed: "Macaw",
    age: "2 years",
    price: 1500,
    image: "https://images.unsplash.com/photo-1544923408-75c5cef46f14?auto=format&fit=crop&q=80&w=500"
  },
  {
    id: 23,
    name: "Sunny",
    type: "Bird",
    breed: "Canary",
    age: "1 year",
    price: 150,
    image: "https://images.unsplash.com/photo-1444464666168-49d633b86797?auto=format&fit=crop&q=80&w=500"
  },
  {
    id: 24,
    name: "Kiwi",
    type: "Bird",
    breed: "Budgerigar",
    age: "8 months",
    price: 100,
    image: "https://images.unsplash.com/photo-1591198936750-16d8e15edb9e?auto=format&fit=crop&q=80&w=500"
  },
  {
    id: 25,
    name: "Sky",
    type: "Bird",
    breed: "Finch",
    age: "1 year",
    price: 80,
    image: "https://images.unsplash.com/photo-1444464666168-49d633b86797?auto=format&fit=crop&q=80&w=500"
  },
  {
    id: 26,
    name: "Echo",
    type: "Bird",
    breed: "African Grey",
    age: "3 years",
    price: 2000,
    image: "https://images.unsplash.com/photo-1544923408-75c5cef46f14?auto=format&fit=crop&q=80&w=500"
  },
  {
    id: 27,
    name: "Mango",
    type: "Bird",
    breed: "Lovebird",
    age: "1.5 years",
    price: 200,
    image: "https://images.unsplash.com/photo-1591198936750-16d8e15edb9e?auto=format&fit=crop&q=80&w=500"
  },
  {
    id: 28,
    name: "Pearl",
    type: "Bird",
    breed: "Cockatoo",
    age: "4 years",
    price: 1800,
    image: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&q=80&w=500"
  },
  {
    id: 29,
    name: "Jazz",
    type: "Bird",
    breed: "Conure",
    age: "2 years",
    price: 500,
    image: "https://images.unsplash.com/photo-1591198936750-16d8e15edb9e?auto=format&fit=crop&q=80&w=500"
  },
  {
    id: 30,
    name: "Phoenix",
    type: "Bird",
    breed: "Parrotlet",
    age: "1 year",
    price: 250,
    image: "https://images.unsplash.com/photo-1444464666168-49d633b86797?auto=format&fit=crop&q=80&w=500"
  },

  // Fish
  {
    id: 31,
    name: "Nemo",
    type: "Fish",
    breed: "Betta",
    age: "1 year",
    price: 50,
    image: "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&q=80&w=500"
  },
  {
    id: 32,
    name: "Bubbles",
    type: "Fish",
    breed: "Goldfish",
    age: "6 months",
    price: 30,
    image: "https://images.unsplash.com/photo-1524704796725-9fc3044a58b2?auto=format&fit=crop&q=80&w=500"
  },
  {
    id: 33,
    name: "Flash",
    type: "Fish",
    breed: "Guppy",
    age: "8 months",
    price: 20,
    image: "https://images.unsplash.com/photo-1535591273668-578e31182c4f?auto=format&fit=crop&q=80&w=500"
  },
  {
    id: 34,
    name: "Angel",
    type: "Fish",
    breed: "Angelfish",
    age: "1 year",
    price: 40,
    image: "https://images.unsplash.com/photo-1571752726703-5e7d1f6a986d?auto=format&fit=crop&q=80&w=500"
  },
  {
    id: 35,
    name: "Coral",
    type: "Fish",
    breed: "Clownfish",
    age: "1.5 years",
    price: 60,
    image: "https://images.unsplash.com/photo-1535591273668-578e31182c4f?auto=format&fit=crop&q=80&w=500"
  },
  {
    id: 36,
    name: "Neptune",
    type: "Fish",
    breed: "Tetra",
    age: "1 year",
    price: 25,
    image: "https://images.unsplash.com/photo-1524704796725-9fc3044a58b2?auto=format&fit=crop&q=80&w=500"
  },
  {
    id: 37,
    name: "Pearl",
    type: "Fish",
    breed: "Molly",
    age: "9 months",
    price: 15,
    image: "https://images.unsplash.com/photo-1571752726703-5e7d1f6a986d?auto=format&fit=crop&q=80&w=500"
  },
  {
    id: 38,
    name: "Wave",
    type: "Fish",
    breed: "Discus",
    age: "2 years",
    price: 100,
    image: "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&q=80&w=500"
  },
  {
    id: 39,
    name: "Splash",
    type: "Fish",
    breed: "Platy",
    age: "1 year",
    price: 20,
    image: "https://images.unsplash.com/photo-1535591273668-578e31182c4f?auto=format&fit=crop&q=80&w=500"
  },
  {
    id: 40,
    name: "Finn",
    type: "Fish",
    breed: "Barb",
    age: "1.5 years",
    price: 35,
    image: "https://images.unsplash.com/photo-1524704796725-9fc3044a58b2?auto=format&fit=crop&q=80&w=500"
  }
];

const App = () => {
  const { user, logout } = useAuth();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('');

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedType]);

  const petsPerPage = 8;

  const filteredPets = pets.filter(pet => {
    const matchesSearch = pet.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         pet.breed.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = !selectedType || pet.type === selectedType;
    return matchesSearch && matchesType;
  });

  const indexOfLastPet = currentPage * petsPerPage;
  const indexOfFirstPet = indexOfLastPet - petsPerPage;
  const currentPets = filteredPets.slice(indexOfFirstPet, indexOfLastPet);


  // Pet type icon component for future use
  const PetTypeIcon = ({ type }: { type: string }) => {
    switch (type) {
      case "Dog": return <Dog className="w-6 h-6" />;
      case "Cat": return <Cat className="w-6 h-6" />;
      case "Bird": return <Bird className="w-6 h-6" />;
      case "Fish": return <Fish className="w-6 h-6" />;
      default: return null;
    }
  };

  // If user is not authenticated, only render the auth pages
  if (!user) {
    return (
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="*" element={<Navigate to="/signup" replace />} />
        </Routes>
      </div>
    );
  }

  // User is authenticated, render the full app
  return (
    <ErrorBoundary>
      <CartProvider>
        <Suspense fallback={<div>Loading...</div>}>
          <ScrollToTop />
          <div className="min-h-screen bg-gray-50">
            <nav className="bg-blue-600 shadow-lg">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                  {/* Logo */}
                  <div className="flex-shrink-0 flex items-center">
                    <Link to="/" className="text-xl font-bold text-white">
                      PetCare
                    </Link>
                  </div>

                  {/* Desktop menu */}
                  <div className="hidden md:flex items-center space-x-4 ml-6">
                    <Link to="/" className="text-white hover:text-blue-300 flex items-center transition-colors" onClick={scrollToTop}>
                      <Home className="h-5 w-5" />
                      <span>Home</span>
                    </Link>
                    <Link to="/pet-food" className="text-white hover:text-blue-300 flex items-center transition-colors" onClick={scrollToTop}>
                      <span>Pet Food</span>
                    </Link>
                    <Link to="/pet-accessories" className="text-white hover:text-blue-300 flex items-center transition-colors" onClick={scrollToTop}>
                      <span>Pet Accessories</span>
                    </Link>
                    <div className="relative group">
                      <button className="text-white hover:text-blue-300 flex items-center gap-1 py-2 transition-colors">
                        <span>Services</span>
                        <ChevronDown className="h-4 w-4" />
                      </button>
                      <div className="absolute left-0 mt-1 w-48 bg-white rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                        <Link to="/services" className="block px-4 py-2 text-gray-800 hover:bg-blue-50 font-semibold" onClick={scrollToTop}>All Services</Link>
                        <Link to="/pet-training" className="block px-4 py-2 text-gray-800 hover:bg-blue-50" onClick={scrollToTop}>Pet Training</Link>
                        <Link to="/veterinary-referrals" className="block px-4 py-2 text-gray-800 hover:bg-blue-50" onClick={scrollToTop}>Veterinary Referrals</Link>
                        <Link to="/grooming-services" className="block px-4 py-2 text-gray-800 hover:bg-blue-50" onClick={scrollToTop}>Grooming Services</Link>
                        <Link to="/enhanced-services" className="block px-4 py-2 text-gray-800 hover:bg-blue-50" onClick={scrollToTop}>Enhanced Services</Link>
                        <Link to="/training-resources" className="block px-4 py-2 text-gray-800 hover:bg-blue-50" onClick={scrollToTop}>Training Resources</Link>
                        <Link to="/emergency-features" className="block px-4 py-2 text-gray-800 hover:bg-blue-50" onClick={scrollToTop}>Emergency Features</Link>
                        <Link to="/pet-adoption" className="block px-4 py-2 text-gray-800 hover:bg-blue-50" onClick={scrollToTop}>Pet Adoption</Link>
                      </div>
                    </div>
                    <Link to="/about" className="text-white hover:text-blue-300 flex items-center transition-colors" onClick={scrollToTop}>
                      <span>About</span>
                    </Link>
                    <Link to="/cart-checkout" className="text-white hover:text-blue-300 transition-colors" onClick={scrollToTop}>
                      <ShoppingCart className="h-6 w-6" />
                    </Link>
                    {user?.role === 'admin' && (
                      <Link to="/admin" className="text-white hover:text-blue-300 flex items-center transition-colors" onClick={scrollToTop}>
                        <span>Admin Panel</span>
                      </Link>
                    )}
                    <button 
                      onClick={() => logout()}
                      className="text-white hover:text-blue-300 flex items-center gap-1 ml-4 bg-blue-800 hover:bg-blue-900 px-3 py-1 rounded-md transition-colors"
                    >
                      <LogOut className="h-5 w-5" />
                      <span>Logout</span>
                    </button>
                  </div>

                  {/* Mobile menu button */}
                  <div className="flex items-center md:hidden">
                    <button
                      type="button"
                      className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-blue-300 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-colors duration-200"
                      aria-controls="mobile-menu"
                      aria-expanded="false"
                      onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                      <span className="sr-only">Open main menu</span>
                      {isMenuOpen ? (
                        <X className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <Menu className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Mobile menu, show/hide based on menu state. */}
              {isMenuOpen && (
                <div className="md:hidden" id="mobile-menu">
                  <div className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-blue-400 transform transition-all duration-300 ease-in-out ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}>
                    <div className="space-y-2">
                      <Link 
                        to="/" 
                        className="text-white hover:text-blue-100 block px-3 py-2 rounded-md text-base font-medium flex items-center gap-2"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <Home className="h-5 w-5" />
                        <span>Home</span>
                      </Link>
                      <Link 
                        to="/pet-food" 
                        className="text-white hover:text-blue-100 block px-3 py-2 rounded-md text-base font-medium"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Pet Food
                      </Link>
                      <Link 
                        to="/pet-accessories" 
                        className="text-white hover:text-blue-100 block px-3 py-2 rounded-md text-base font-medium"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Pet Accessories
                      </Link>
                      <div className="text-white px-3 py-2">
                        <button
                          onClick={() => setIsServicesOpen(!isServicesOpen)}
                          className="flex items-center justify-between w-full text-left font-medium transition-colors duration-200 hover:text-blue-200"
                        >
                          <span>Services</span>
                          <span className={`transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`}>
                            ▼
                          </span>
                        </button>
                        <div className={`pl-4 space-y-2 mt-2 ${isServicesOpen ? 'block' : 'hidden'}`}>
                          <Link to="/services" className="text-white hover:text-blue-100 block py-1 font-semibold" onClick={() => setIsMenuOpen(false)}>All Services</Link>
                          <Link to="/pet-training" className="text-white hover:text-blue-100 block py-1" onClick={() => setIsMenuOpen(false)}>Pet Training</Link>
                          <Link to="/veterinary-referrals" className="text-white hover:text-blue-100 block py-1" onClick={() => setIsMenuOpen(false)}>Veterinary Referrals</Link>
                          <Link to="/grooming-services" className="text-white hover:text-blue-100 block py-1" onClick={() => setIsMenuOpen(false)}>Grooming Services</Link>
                          <Link to="/enhanced-services" className="text-white hover:text-blue-100 block py-1" onClick={() => setIsMenuOpen(false)}>Enhanced Services</Link>
                          <Link to="/training-resources" className="text-white hover:text-blue-100 block py-1" onClick={() => setIsMenuOpen(false)}>Training Resources</Link>
                          <Link to="/emergency-features" className="text-white hover:text-blue-100 block py-1" onClick={() => setIsMenuOpen(false)}>Emergency Features</Link>
                          <Link to="/pet-adoption" className="text-white hover:text-blue-100 block py-1" onClick={() => setIsMenuOpen(false)}>Pet Adoption</Link>
                        </div>
                      </div>
                      <Link 
                        to="/about" 
                        className="text-white hover:text-blue-100 block px-3 py-2 rounded-md text-base font-medium"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        About
                      </Link>
                      <Link 
                        to="/cart-checkout" 
                        className="text-white hover:text-blue-100 block px-3 py-2 rounded-md text-base font-medium flex items-center gap-2"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <ShoppingCart className="h-6 w-6" />
                        <span>Cart</span>
                      </Link>
                      {user?.role === 'admin' && (
                        <Link 
                          to="/admin" 
                          className="text-white hover:text-blue-100 block px-3 py-2 rounded-md text-base font-medium"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Admin Panel
                        </Link>
                      )}
                      <button 
                        onClick={() => {
                          logout();
                          setIsMenuOpen(false);
                        }}
                        className="text-white hover:text-blue-100 block w-full text-left px-3 py-2 rounded-md text-base font-medium flex items-center gap-2 mt-2 border-t border-blue-400 pt-4"
                      >
                        <LogOut className="h-5 w-5" />
                        <span>Logout</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </nav>

            <main className="container mx-auto px-4 py-8">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/pet-food" element={<PetFoodPage />} />
                <Route path="/pet-accessories" element={<PetAccessoriesPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/pet-training" element={<PetTrainingPage />} />
                <Route path="/veterinary-referrals" element={<VeterinaryReferralsPage />} />
                <Route path="/grooming-services" element={<GroomingServicesPage />} />
                <Route path="/enhanced-services" element={<EnhancedServicesPage />} />
                <Route path="/training-resources" element={<PetTrainingResourcesPage />} />
                <Route path="/emergency-features" element={<EmergencyFeaturesPage />} />
                <Route path="/pet-adoption" element={<PetAdoptionPage />} />
                <Route path="/adopt" element={<PetList pets={pets} />} />
                <Route path="/adopt/:id" element={<AdoptPage pets={pets} />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/cart-checkout" element={<CartCheckoutPage />} />
                <Route path="/checkout" element={<CheckoutPage pets={pets} />} />
                {user?.role === 'admin' && <Route path="/admin" element={<AdminPanel />} />}
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </main>

            <Footer />
            <ToastContainer position="bottom-right" />
          </div>
        </Suspense>
      </CartProvider>
    </ErrorBoundary>
  );
};

export default App;