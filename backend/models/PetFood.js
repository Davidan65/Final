import mongoose from 'mongoose';

const petFoodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  image: {
    type: String,
    required: true,
    trim: true
  },
  category: {
    type: String,
    required: true,
    trim: true
  },
  weight: {
    type: String,
    required: true,
    trim: true
  },
  rating: {
    type: Number,
    default: 0,
    min: 0,
    max: 5
  },
  reviews: {
    type: Number,
    default: 0,
    min: 0
  },
  brand: {
    type: String,
    trim: true
  },
  ingredients: [{
    type: String,
    trim: true
  }],
  nutritionalInfo: {
    protein: String,
    fat: String,
    fiber: String,
    moisture: String
  }
}, {
  timestamps: true
});

// Add indexes for better query performance
petFoodSchema.index({ name: 'text', description: 'text' });
petFoodSchema.index({ category: 1 });
petFoodSchema.index({ price: 1 });

export default mongoose.model('PetFood', petFoodSchema); 