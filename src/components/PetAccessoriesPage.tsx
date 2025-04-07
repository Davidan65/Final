import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

interface Accessory {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
}

export const PetAccessoriesPage: React.FC = () => {
  const { addToCart } = useCart();

  const accessories: Accessory[] = [
    // Dog Accessories
    {
      id: 1,
      name: "Reflective Dog Collar",
      price: 15.99,
      image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=500",
      description: "Durable nylon collar with reflective stitching for night safety.",
      category: "Collars & Leashes"
    },
    {
      id: 2,
      name: "Retractable Dog Leash",
      price: 24.99,
      image: "https://images.unsplash.com/photo-1591946614720-90a587da4a36?auto=format&fit=crop&q=80&w=500",
      description: "16ft retractable leash with comfortable grip and one-button brake system.",
      category: "Collars & Leashes"
    },
    {
      id: 3,
      name: "Plush Dog Toy Bundle",
      price: 19.99,
      image: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&q=80&w=500",
      description: "Set of 3 squeaky plush toys for small to medium dogs.",
      category: "Toys"
    },
    {
      id: 4,
      name: "Durable Chew Toy",
      price: 12.99,
      image: "https://images.unsplash.com/photo-1546015720-b8b30df5aa27?auto=format&fit=crop&q=80&w=500",
      description: "Long-lasting rubber chew toy for aggressive chewers.",
      category: "Toys"
    },
    {
      id: 5,
      name: "Dog Raincoat",
      price: 29.99,
      image: "https://images.unsplash.com/photo-1605897472359-85e4b94c0ea6?auto=format&fit=crop&q=80&w=500",
      description: "Waterproof raincoat with hood and reflective strips for rainy walks.",
      category: "Clothing"
    },
    {
      id: 6,
      name: "Winter Dog Sweater",
      price: 22.99,
      image: "https://images.unsplash.com/photo-1567752881298-894bb81f9379?auto=format&fit=crop&q=80&w=500",
      description: "Warm knitted sweater for cold weather, available in multiple sizes.",
      category: "Clothing"
    },
    {
      id: 7,
      name: "Dog Grooming Brush",
      price: 16.99,
      image: "https://images.unsplash.com/photo-1559000357-f6b52ddfcb99?auto=format&fit=crop&q=80&w=500",
      description: "Self-cleaning slicker brush for removing loose fur and tangles.",
      category: "Grooming"
    },
    {
      id: 8,
      name: "Dog Nail Clippers",
      price: 14.99,
      image: "https://images.unsplash.com/photo-1585499193151-5f9644d682ee?auto=format&fit=crop&q=80&w=500",
      description: "Professional-grade nail clippers with safety guard to prevent over-cutting.",
      category: "Grooming"
    },
    {
      id: 9,
      name: "Elevated Dog Bed",
      price: 49.99,
      image: "https://images.unsplash.com/photo-1541599468348-e96984315921?auto=format&fit=crop&q=80&w=500",
      description: "Raised mesh bed keeps pets cool and comfortable, easy to clean.",
      category: "Beds & Furniture"
    },
    {
      id: 10,
      name: "Memory Foam Dog Mattress",
      price: 69.99,
      image: "https://images.unsplash.com/photo-1604578762246-41134e37f9cc?auto=format&fit=crop&q=80&w=500",
      description: "Orthopedic memory foam bed with removable, washable cover.",
      category: "Beds & Furniture"
    },
    
    // Cat Accessories
    {
      id: 11,
      name: "Cat Collar with Bell",
      price: 9.99,
      image: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?auto=format&fit=crop&q=80&w=500",
      description: "Breakaway safety collar with bell to alert wildlife.",
      category: "Collars & Leashes"
    },
    {
      id: 12,
      name: "Interactive Cat Toy",
      price: 17.99,
      image: "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?auto=format&fit=crop&q=80&w=500",
      description: "Electronic motion toy that mimics natural prey movements.",
      category: "Toys"
    },
    {
      id: 13,
      name: "Cat Teaser Wand",
      price: 8.99,
      image: "https://images.unsplash.com/photo-1602491453631-e2a5ad90a131?auto=format&fit=crop&q=80&w=500",
      description: "Feather wand toy to encourage exercise and play.",
      category: "Toys"
    },
    {
      id: 14,
      name: "Cat Scratching Post",
      price: 39.99,
      image: "https://images.unsplash.com/photo-1545249390-6bdfa286032f?auto=format&fit=crop&q=80&w=500",
      description: "Sisal rope scratching post with perch, saves your furniture.",
      category: "Furniture"
    },
    {
      id: 15,
      name: "Cat Tree Condo",
      price: 89.99,
      image: "https://images.unsplash.com/photo-1606675725083-4a7f4d9a1d8a?auto=format&fit=crop&q=80&w=500",
      description: "Multi-level cat tree with hiding spots, perches, and scratching posts.",
      category: "Furniture"
    },
    {
      id: 16,
      name: "Self-Grooming Cat Arch",
      price: 19.99,
      image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&q=80&w=500",
      description: "Bristle arch that cats can rub against for self-grooming.",
      category: "Grooming"
    },
    {
      id: 17,
      name: "Cat Grooming Glove",
      price: 14.99,
      image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=500",
      description: "Gentle silicone glove that removes loose fur while petting.",
      category: "Grooming"
    },
    {
      id: 18,
      name: "Heated Cat Bed",
      price: 44.99,
      image: "https://images.unsplash.com/photo-1570824104453-508955ab713e?auto=format&fit=crop&q=80&w=500",
      description: "Thermostatically controlled bed that maintains body temperature.",
      category: "Beds"
    },
    {
      id: 19,
      name: "Window Cat Perch",
      price: 29.99,
      image: "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?auto=format&fit=crop&q=80&w=500",
      description: "Suction-cup window seat that supports up to 40lbs.",
      category: "Furniture"
    },
    {
      id: 20,
      name: "Automatic Laser Toy",
      price: 24.99,
      image: "https://images.unsplash.com/photo-1615789591457-74a63395c990?auto=format&fit=crop&q=80&w=500",
      description: "Motion-activated laser toy with random patterns for play.",
      category: "Toys"
    },
    
    // Bird Accessories
    {
      id: 21,
      name: "Bird Cage Swing",
      price: 7.99,
      image: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&q=80&w=500",
      description: "Wooden swing with colorful beads for cage enrichment.",
      category: "Toys"
    },
    {
      id: 22,
      name: "Bird Ladder",
      price: 9.99,
      image: "https://images.unsplash.com/photo-1591198936750-16d8e15edb9e?auto=format&fit=crop&q=80&w=500",
      description: "Wooden ladder for climbing and exercise inside the cage.",
      category: "Toys"
    },
    {
      id: 23,
      name: "Bird Foraging Toy",
      price: 12.99,
      image: "https://images.unsplash.com/photo-1605450648855-63f9e5ad28df?auto=format&fit=crop&q=80&w=500",
      description: "Interactive toy that encourages natural foraging behavior.",
      category: "Toys"
    },
    {
      id: 24,
      name: "Bird Bath House",
      price: 15.99,
      image: "https://images.unsplash.com/photo-1592754862816-1a21a4ea2281?auto=format&fit=crop&q=80&w=500",
      description: "Cage-mounted bath house for birds to clean their feathers.",
      category: "Grooming"
    },
    {
      id: 25,
      name: "Bird Perch Variety Pack",
      price: 19.99,
      image: "https://images.unsplash.com/photo-1518235506717-e1ed3306a89b?auto=format&fit=crop&q=80&w=500",
      description: "Set of 3 different textured perches for foot health.",
      category: "Furniture"
    },
    {
      id: 26,
      name: "Bird Cage Cover",
      price: 22.99,
      image: "https://images.unsplash.com/photo-1579269879748-3480a77e869c?auto=format&fit=crop&q=80&w=500",
      description: "Breathable cover to provide darkness and security at night.",
      category: "Bedding"
    },
    {
      id: 27,
      name: "Bird Nesting Material",
      price: 6.99,
      image: "https://images.unsplash.com/photo-1490718720478-364a07a997cd?auto=format&fit=crop&q=80&w=500",
      description: "Natural fibers for birds to build nests during breeding season.",
      category: "Bedding"
    },
    {
      id: 28,
      name: "Bird Cage Cleaner",
      price: 11.99,
      image: "https://images.unsplash.com/photo-1583039092358-a0d3d9b2c9a9?auto=format&fit=crop&q=80&w=500",
      description: "Pet-safe cleaning solution for bird cages and accessories.",
      category: "Cleaning"
    },
    {
      id: 29,
      name: "Bird Cage Skirt",
      price: 16.99,
      image: "https://images.unsplash.com/photo-1603314585442-ee3b3c16fbcf?auto=format&fit=crop&q=80&w=500",
      description: "Mesh skirt that catches seed and debris for easier cleanup.",
      category: "Cleaning"
    },
    {
      id: 30,
      name: "Bird Travel Carrier",
      price: 34.99,
      image: "https://images.unsplash.com/photo-1550686041-366ad85a1355?auto=format&fit=crop&q=80&w=500",
      description: "Ventilated carrier for safe transportation to vet visits.",
      category: "Travel"
    },
    
    // Fish Accessories
    {
      id: 31,
      name: "Aquarium Decorative Plants",
      price: 13.99,
      image: "https://images.unsplash.com/photo-1584553421349-3557471bed79?auto=format&fit=crop&q=80&w=500",
      description: "Set of 5 realistic artificial plants for aquarium decoration.",
      category: "Decor"
    },
    {
      id: 32,
      name: "Aquarium Castle Ornament",
      price: 18.99,
      image: "https://images.unsplash.com/photo-1535591273668-578e31182c4f?auto=format&fit=crop&q=80&w=500",
      description: "Detailed castle decoration with hiding spots for fish.",
      category: "Decor"
    },
    {
      id: 33,
      name: "LED Aquarium Light",
      price: 29.99,
      image: "https://images.unsplash.com/photo-1548438294-1ad5d5f4f063?auto=format&fit=crop&q=80&w=500",
      description: "Color-changing LED light strip for aquarium illumination.",
      category: "Equipment"
    },
    {
      id: 34,
      name: "Aquarium Filter System",
      price: 39.99,
      image: "https://images.unsplash.com/photo-1584553392642-8a937c5ba3a2?auto=format&fit=crop&q=80&w=500",
      description: "3-stage filtration system for tanks up to 20 gallons.",
      category: "Equipment"
    },
    {
      id: 35,
      name: "Aquarium Heater",
      price: 24.99,
      image: "https://images.unsplash.com/photo-1584553421125-9f6e5ac52db1?auto=format&fit=crop&q=80&w=500",
      description: "Submersible heater with adjustable temperature control.",
      category: "Equipment"
    },
    {
      id: 36,
      name: "Fish Food Variety Pack",
      price: 15.99,
      image: "https://images.unsplash.com/photo-1584553405495-9e47e7b3f7df?auto=format&fit=crop&q=80&w=500",
      description: "Assortment of flakes, pellets, and freeze-dried foods.",
      category: "Food"
    },
    {
      id: 37,
      name: "Aquarium Gravel",
      price: 9.99,
      image: "https://images.unsplash.com/photo-1584553405114-9c45a7b5f403?auto=format&fit=crop&q=80&w=500",
      description: "Natural-colored gravel substrate, 5lb bag.",
      category: "Decor"
    },
    {
      id: 38,
      name: "Aquarium Water Test Kit",
      price: 27.99,
      image: "https://images.unsplash.com/photo-1584553392398-cf82fa5f51b3?auto=format&fit=crop&q=80&w=500",
      description: "Complete kit for testing pH, ammonia, nitrite, and nitrate levels.",
      category: "Maintenance"
    },
    {
      id: 39,
      name: "Aquarium Cleaning Kit",
      price: 21.99,
      image: "https://images.unsplash.com/photo-1584553405333-351c8c4e049a?auto=format&fit=crop&q=80&w=500",
      description: "Includes gravel vacuum, algae scraper, and net.",
      category: "Maintenance"
    },
    {
      id: 40,
      name: "Automatic Fish Feeder",
      price: 32.99,
      image: "https://images.unsplash.com/photo-1584553405080-85a3b7c72a6f?auto=format&fit=crop&q=80&w=500",
      description: "Programmable feeder for vacation or busy schedules.",
      category: "Equipment"
    }
  ];

  // Group accessories by category for better organization
  const categories = [...new Set(accessories.map(item => item.category))];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Pet Accessories</h1>
      
      <div className="mb-8">
        <p className="text-gray-700 text-center max-w-3xl mx-auto">
          Discover our wide range of high-quality pet accessories for dogs, cats, birds, and fish. 
          From toys and grooming supplies to beds and aquarium equipment, we have everything to keep your pets happy and healthy.
        </p>
      </div>

      {/* Display accessories by category */}
      {categories.map(category => (
        <div key={category} className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 pb-2 border-b border-gray-200">{category}</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {accessories
              .filter(item => item.category === category)
              .map(accessory => (
                <div key={accessory.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={accessory.image} 
                      alt={accessory.name} 
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2">{accessory.name}</h3>
                    <p className="text-gray-600 text-sm mb-3">{accessory.description}</p>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-blue-600 font-bold">${accessory.price.toFixed(2)}</span>
                      
                      <button 
                        onClick={() => addToCart({
                          id: `accessory-${accessory.id}`,
                          name: accessory.name,
                          price: accessory.price,
                          image: accessory.image,
                          quantity: 1
                        })}
                        className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors"
                        aria-label={`Add ${accessory.name} to cart`}
                      >
                        <ShoppingCart size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};