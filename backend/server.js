import express from 'express';
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import dotenv from 'dotenv';
import petAccessoriesRoutes from './routes/petAccessories.js';
import petFoodRoutes from './routes/petFood.js';
import authRoutes from './routes/auth.js';
import PetFood from './models/PetFood.js';
import PetAccessory from './models/PetAccessory.js';
import User from './models/User.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors({
  origin: ['https://frondend-tl1w.onrender.com', 'http://localhost:5173'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Accept', 'Origin', 'X-Requested-With'],
  exposedHeaders: ['Content-Length', 'Authorization'],
  maxAge: 86400 // 24 hours
}));

// Add specific CORS headers for image requests
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://frondend-tl1w.onrender.com');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  next();
});

app.use(express.json());

// Add logging middleware
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  next();
});

// MongoDB Connection
if (!process.env.MONGODB_URI) {
  console.error('MONGODB_URI is not defined in environment variables');
  process.exit(1);
}

if (!process.env.JWT_SECRET) {
  console.error('JWT_SECRET is not defined in environment variables');
  process.exit(1);
}

const connectWithRetry = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    });
    console.log('Successfully connected to MongoDB.');
    
    // Initialize sample data if collections are empty
    try {
      // Check and initialize PetFood collection
      const foods = await PetFood.find({});
      console.log('Current PetFood collection count:', foods.length);
      
      if (foods.length === 0) {
        console.log('Initializing sample pet food data...');
        const sampleFoods = [
          {
            name: 'Premium Dog Food',
            description: 'High-quality dog food with real meat and vegetables',
            price: 29.99,
            image: 'https://images.unsplash.com/photo-1583511655826-05700442b31b?auto=format&fit=crop&q=80&w=300&h=200',
            category: 'Dog',
            weight: '5kg'
          },
          {
            name: 'Grain-Free Cat Food',
            description: 'Natural cat food with no artificial additives',
            price: 24.99,
            image: 'https://images.unsplash.com/photo-1583511655826-05700442b31b?auto=format&fit=crop&q=80&w=300&h=200',
            category: 'Cat',
            weight: '3kg'
          }
        ];
        
        await PetFood.insertMany(sampleFoods);
        console.log('Sample pet food data initialized');
      }

      // Check and initialize PetAccessory collection
      const accessories = await PetAccessory.find({});
      console.log('Current PetAccessory collection count:', accessories.length);
      
      if (accessories.length === 0) {
        console.log('Initializing sample pet accessory data...');
        const sampleAccessories = [
          {
            name: 'Luxury Dog Collar',
            description: 'Premium leather collar with brass hardware',
            price: 29.99,
            image: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&q=80&w=500',
            category: 'Collars & Leashes',
            material: 'Leather',
            size: 'Medium',
            color: 'Brown'
          },
          {
            name: 'Cozy Pet Bed',
            description: 'Soft, washable bed with orthopedic foam',
            price: 49.99,
            image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=500',
            category: 'Beds & Furniture',
            material: 'Polyester',
            size: 'Large',
            color: 'Gray'
          }
        ];
        
        await PetAccessory.insertMany(sampleAccessories);
        console.log('Sample pet accessory data initialized');
      }
    } catch (err) {
      console.error('Error checking/initializing collections:', err);
    }
  } catch (err) {
    console.error('MongoDB connection error:', err);
    console.log('Retrying connection in 5 seconds...');
    setTimeout(connectWithRetry, 5000);
  }
};

// Initial connection
connectWithRetry();

// Handle connection events
mongoose.connection.on('disconnected', () => {
  console.log('MongoDB disconnected, attempting to reconnect...');
  connectWithRetry();
});

mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

// Add error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({ error: 'Internal server error' });
});

// Routes
app.post('/api/auth/signup', async (req, res) => {
  try {
    console.log('Signup request received:', req.body);
    const { email, password, role } = req.body;
    
    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }
    
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'Email already exists' });
    }
    
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    
    // Create new user
    const user = new User({
      email,
      password: hashedPassword,
      role: role || 'user'
    });
    
    await user.save();
    console.log('User created successfully:', user.email);
    
    // Generate JWT
    const token = jwt.sign(
      { userId: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );
    
    res.status(201).json({ 
      token,
      user: {
        email: user.email,
        role: user.role
      }
    });
  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({ error: 'Error signing up' });
  }
});

app.post('/api/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log('Login attempt for:', email);
    
    const user = await User.findOne({ email });
    console.log('Found user:', user ? { email: user.email, role: user.role } : 'Not found');

    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { userId: user._id, email: user.email, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );

    console.log('Login successful, sending response:', {
      email: user.email,
      role: user.role
    });

    // Send both token and user data
    res.json({
      token,
      user: {
        email: user.email,
        role: user.role
      }
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

app.get('/api', (req, res) => {
  console.log('Test route hit');
  res.json({ message: 'API is working!' });
});

app.get('/', (req, res) => {
  console.log('Root route hit');
  res.json({ message: 'Server is running!' });
});

// Register routes
console.log('Registering routes...');
app.use('/api/accessories', petAccessoriesRoutes);
app.use('/api/pet-food', petFoodRoutes);
console.log('Routes registered successfully');

// Serve static files from the React app
app.use(express.static(join(__dirname, '../dist')));

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/accessories', petAccessoriesRoutes);
app.use('/api/pet-food', petFoodRoutes);

// Serve index.html for all other routes
app.get('*', (req, res) => {
  res.sendFile(join(__dirname, '../dist/index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log('Environment:', {
    MONGODB_URI: process.env.MONGODB_URI ? 'Set' : 'Not set',
    JWT_SECRET: process.env.JWT_SECRET ? 'Set' : 'Not set',
    PORT: process.env.PORT || 5000
  });
});
