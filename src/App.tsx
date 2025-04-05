import React, { useState } from 'react';
import { Search, Dog, Cat, Bird, Fish, ShoppingCart, Home, Menu, X, Filter, LogOut, ChevronDown } from 'lucide-react';
import { CartProvider } from './contexts/CartContext';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { HashRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';

const scrollToTop = () => {
  window.scrollTo(0, 0);
};
import { LoginPage, SignupPage } from './components/AuthPages';
import { Footer } from './components/Footer';

import { CheckoutPage } from './components/CheckoutPage';
import { AboutPage } from './components/AboutPage';
import { PetFoodPage } from './components/PetFoodPage';
import { CartCheckoutPage } from './components/CartCheckoutPage';
import { PetTrainingPage } from './components/PetTrainingPage';
import { PetAdoptionPage } from './components/PetAdoptionPage';
import { GroomingServicesPage } from './components/GroomingServicesPage';
import { VeterinaryReferralsPage } from './components/VeterinaryReferralsPage';

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

function App() {
  const { isAuthenticated, token, logout } = useAuth();
  console.log("Authentication state:", isAuthenticated, "Token:", token);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  // Reset page when filters change
  React.useEffect(() => {
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
  const totalPages = Math.ceil(filteredPets.length / petsPerPage);

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
  if (!isAuthenticated) {
    return (
      <Router>
        <div className="min-h-screen bg-gray-100">
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="*" element={<Navigate to="/signup" replace />} />
          </Routes>
        </div>
      </Router>
    );
  }

  // User is authenticated, render the full app
  return (
    <Router>
    <CartProvider>
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-blue-500 shadow-lg fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center" onClick={scrollToTop}>
                <span className="text-xl font-bold text-white">Pet Store</span>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-blue-200 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <span className="sr-only">Open main menu</span>
                {mobileMenuOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>

            {/* Desktop menu */}
            <div className="hidden md:flex items-center space-x-4">
              <Link to="/" className="text-white hover:text-blue-100 flex items-center" onClick={scrollToTop}>
                <Home className="h-5 w-5" />
                <span>Home</span>
              </Link>
              <Link to="/pet-food" className="text-white hover:text-blue-100 flex items-center" onClick={scrollToTop}>
                <span>Pet Food</span>
              </Link>
              <div className="relative group">
                <button className="text-white hover:text-blue-100 flex items-center gap-1 py-2">
                  <span>Services</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                <div className="absolute left-0 mt-1 w-48 bg-white rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <Link to="/pet-training" className="block px-4 py-2 text-gray-800 hover:bg-blue-50" onClick={scrollToTop}>Pet Training</Link>
                  <Link to="/veterinary-referrals" className="block px-4 py-2 text-gray-800 hover:bg-blue-50" onClick={scrollToTop}>Veterinary Referrals</Link>
                  <Link to="/grooming-services" className="block px-4 py-2 text-gray-800 hover:bg-blue-50" onClick={scrollToTop}>Grooming Services</Link>
                  <Link to="/pet-adoption" className="block px-4 py-2 text-gray-800 hover:bg-blue-50" onClick={scrollToTop}>Pet Adoption</Link>
                </div>
              </div>
              <Link to="/about" className="text-white hover:text-blue-100 flex items-center" onClick={scrollToTop}>
                <span>About</span>
              </Link>
              <Link to="/cart-checkout" className="text-white hover:text-blue-100" onClick={scrollToTop}>
                <ShoppingCart className="h-6 w-6" />
              </Link>
              <button 
                onClick={() => logout()}
                className="text-white hover:text-blue-100 flex items-center gap-1 ml-4 bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded-md transition-colors"
              >
                <LogOut className="h-5 w-5" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu, show/hide based on menu state. */}
        {mobileMenuOpen && (
          <div className="md:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-blue-400">
              <Link 
                to="/" 
                className="text-white hover:text-blue-100 block px-3 py-2 rounded-md text-base font-medium flex items-center gap-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Home className="h-5 w-5" />
                <span>Home</span>
              </Link>
              <Link 
                to="/pet-food" 
                className="text-white hover:text-blue-100 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pet Food
              </Link>
              <div className="text-white px-3 py-2">
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="flex items-center justify-between w-full text-left font-medium"
                >
                  <span>Services</span>
                  <span className={`transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>
                <div className={`pl-4 space-y-2 mt-2 ${mobileServicesOpen ? 'block' : 'hidden'}`}>
                  <Link to="/pet-training" className="text-white hover:text-blue-100 block py-1" onClick={() => setMobileMenuOpen(false)}>Pet Training</Link>
                  <Link to="/veterinary-referrals" className="text-white hover:text-blue-100 block py-1" onClick={() => setMobileMenuOpen(false)}>Veterinary Referrals</Link>
                  <Link to="/grooming-services" className="text-white hover:text-blue-100 block py-1" onClick={() => setMobileMenuOpen(false)}>Grooming Services</Link>
                  <Link to="/pet-adoption" className="text-white hover:text-blue-100 block py-1" onClick={() => setMobileMenuOpen(false)}>Pet Adoption</Link>
                </div>
              </div>
              <Link 
                to="/about" 
                className="text-white hover:text-blue-100 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/cart-checkout" 
                className="text-white hover:text-blue-100 block px-3 py-2 rounded-md text-base font-medium flex items-center gap-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <ShoppingCart className="h-6 w-6" />
                <span>Cart</span>
              </Link>

              {/* Logout button in mobile menu */}
              <button 
                onClick={() => {
                  logout();
                  setMobileMenuOpen(false);
                }}
                className="text-white hover:text-blue-100 block w-full text-left px-3 py-2 rounded-md text-base font-medium flex items-center gap-2 mt-2 border-t border-blue-400 pt-4"
              >
                <LogOut className="h-5 w-5" />
                <span>Logout</span>
              </button>

              {/* Filter dropdown in mobile menu */}
              <div className="pt-2 border-t border-blue-400 mt-2">
                <button 
                  className="w-full flex justify-between items-center px-3 py-2 text-base font-medium text-white hover:text-blue-100"
                  onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
                >
                  <span className="flex items-center gap-2">
                    <Filter className="h-5 w-5" />
                    <span>Filter Pets</span>
                  </span>
                  <span className={`transition-transform duration-200 ${mobileFilterOpen ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>
                
                {mobileFilterOpen && (
                  <div className="mt-2 pl-4 border-l-2 border-blue-100 ml-4 space-y-2">
                    <button
                      onClick={() => {
                        setSelectedType(null);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className={`w-full text-left px-3 py-2 rounded-md text-sm ${!selectedType ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                    >
                      All Pets
                    </button>
                    
                    {["Dog", "Cat", "Bird", "Fish"].map(type => (
                      <button
                        key={type}
                        onClick={() => {
                          setSelectedType(type);
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className={`w-full text-left px-3 py-2 rounded-md text-sm flex items-center gap-2 ${
                          selectedType === type ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
                        }`}
                      >
                        <PetTypeIcon type={type} />
                        <span>{type}s</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 pt-20">
        <Routes>
          <Route path="/pet-food" element={<PetFoodPage />} />
          <Route path="/cart-checkout" element={<CartCheckoutPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/pet-training" element={<PetTrainingPage />} />
          <Route path="/pet-adoption" element={<PetAdoptionPage />} />
          <Route path="/grooming-services" element={<GroomingServicesPage />} />
          <Route path="/veterinary-referrals" element={<VeterinaryReferralsPage />} />
          <Route path="/" element={
            <div>
              {/* Search */}
              <div className="mb-6">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search pets..."
                    value={searchTerm}
                    onChange={(e) => {
                      setSearchTerm(e.target.value);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="w-full px-4 py-2 pl-10 pr-4 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                </div>
              </div>

              {/* Site Description and Welcome Section */}
              <div className="mb-10 bg-white rounded-xl shadow-md overflow-hidden">
                <div className="md:flex">
                  <div className="md:shrink-0">
                    <img 
                      className="h-48 w-full object-cover md:h-full md:w-48" 
                      src="https://images.unsplash.com/photo-1534361960057-19889db9621e?auto=format&fit=crop&q=80&w=500" 
                      alt="A happy dog with its owner"
                    />
                  </div>
                  <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-blue-500 font-semibold">Welcome to our Pet Store</div>
                    <h1 className="block mt-1 text-2xl leading-tight font-medium text-black">Find Your Perfect Companion</h1>
                    <p className="mt-2 text-gray-600">
                      Our pet store is dedicated to connecting loving homes with wonderful animal companions. 
                      We believe that the bond between humans and pets is something special - a relationship 
                      built on unconditional love, trust, and joy. Whether you're looking for a playful puppy, 
                      a gentle cat, a colorful bird, or a peaceful fish, we have the perfect pet for your family.
                    </p>
                  </div>
                </div>
              </div>

              {/* Pet-Human Bond Image Gallery */}
              <div className="mb-10 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <img 
                    className="h-64 w-full object-cover" 
                    src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=500" 
                    alt="Person hiking with dogs"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-800">Adventure Partners</h3>
                    <p className="text-gray-600">Explore the world with a loyal companion by your side.</p>
                  </div>
                </div>
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <img 
                    className="h-64 w-full object-cover" 
                    src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&q=80&w=500" 
                    alt="Child playing with puppy"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-800">Growing Up Together</h3>
                    <p className="text-gray-600">Pets teach children compassion, responsibility, and unconditional love.</p>
                  </div>
                </div>
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <img 
                    className="h-64 w-full object-cover" 
                    src="https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&q=80&w=500" 
                    alt="Senior with cat"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-800">Comfort & Companionship</h3>
                    <p className="text-gray-600">Pets provide emotional support and friendship at every stage of life.</p>
                  </div>
                </div>
              </div>

              {/* Desktop Filters */}
              <div className="mb-6 hidden md:block">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold text-gray-700">Filters</h2>
                </div>
                <div className="flex flex-row items-center gap-3">
                  <button
                    onClick={() => {
                      setSelectedType(null);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className={`px-4 py-2 rounded-full ${!selectedType ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                  >
                    All Pets
                  </button>
                  {["Dog", "Cat", "Bird", "Fish"].map(type => (
                    <button
                      key={type}
                      onClick={() => {
                        setSelectedType(type);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className={`px-4 py-2 rounded-full flex items-center justify-center gap-2 ${
                        selectedType === type ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
                      }`}
                    >
                      <PetTypeIcon type={type} />
                      {type}s
                    </button>
                  ))}
                </div>
              </div>

              {/* Pet Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {currentPets.map(pet => (
                  <div key={pet.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                    <img src={pet.image} alt={pet.name} className="w-full h-48 object-cover" />
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold text-gray-800">{pet.name}</h3>
                        <span className="flex items-center gap-1">
                          <PetTypeIcon type={pet.type} />
                        </span>
                      </div>
                      <p className="text-gray-600 mb-1">{pet.breed}</p>
                      <p className="text-gray-600 mb-2">{pet.age}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-blue-500 font-semibold">${pet.price}</span>
                        <Link
                          to={`/checkout/${pet.id}`}
                          className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
                        >
                          Adopt
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="mt-8 flex justify-center gap-2">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                    <button
                      key={page}
                      onClick={() => {
                        setCurrentPage(page);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className={`px-4 py-2 rounded-full ${currentPage === page ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                    >
                      {page}
                    </button>
                  ))}
                </div>
              )}
            </div>
          } />
          <Route path="/checkout/:id" element={<CheckoutPage pets={pets} />} />
          {/* Redirect any undefined route to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
    </CartProvider>
    </Router>
  );
}

export default function AppWithAuth() {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
}