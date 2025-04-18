import express from 'express';
import { verifyAdmin } from '../middleware/auth.js';

const router = express.Router();

// Sample data - in production, this would be in a database
let accessories = [
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
  }
];

// Get all accessories
router.get('/', (req, res) => {
  res.json(accessories);
});

// Get single accessory
router.get('/:id', (req, res) => {
  const accessory = accessories.find(a => a.id === parseInt(req.params.id));
  if (!accessory) return res.status(404).json({ message: 'Accessory not found' });
  res.json(accessory);
});

// Create new accessory (admin only)
router.post('/', verifyAdmin, (req, res) => {
  const { name, description, price, image, category } = req.body;
  
  if (!name || !description || !price || !image || !category) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const newAccessory = {
    id: accessories.length + 1,
    name,
    description,
    price: parseFloat(price),
    image,
    category
  };

  accessories.push(newAccessory);
  res.status(201).json(newAccessory);
});

// Update accessory (admin only)
router.put('/:id', verifyAdmin, (req, res) => {
  const accessory = accessories.find(a => a.id === parseInt(req.params.id));
  if (!accessory) return res.status(404).json({ message: 'Accessory not found' });

  const { name, description, price, image, category } = req.body;
  
  if (name) accessory.name = name;
  if (description) accessory.description = description;
  if (price) accessory.price = parseFloat(price);
  if (image) accessory.image = image;
  if (category) accessory.category = category;

  res.json(accessory);
});

// Delete accessory (admin only)
router.delete('/:id', verifyAdmin, (req, res) => {
  const index = accessories.findIndex(a => a.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ message: 'Accessory not found' });

  accessories.splice(index, 1);
  res.json({ message: 'Accessory deleted successfully' });
});

export default router; 