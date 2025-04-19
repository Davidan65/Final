import mongoose from 'mongoose';

const petAccessorySchema = new mongoose.Schema({
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
  material: {
    type: String,
    trim: true
  },
  size: {
    type: String,
    trim: true
  },
  color: {
    type: String,
    trim: true
  }
}, {
  timestamps: true
});

// Add indexes for better query performance
petAccessorySchema.index({ name: 'text', description: 'text' });
petAccessorySchema.index({ category: 1 });
petAccessorySchema.index({ price: 1 });

export default mongoose.model('PetAccessory', petAccessorySchema); 