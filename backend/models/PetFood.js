import mongoose from 'mongoose';

const petFoodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  weight: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

export default mongoose.model('PetFood', petFoodSchema); 