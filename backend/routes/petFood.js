import express from 'express';
import PetFood from '../models/PetFood.js';
import { verifyAdmin } from '../middleware/auth.js';

const router = express.Router();

// Get all pet foods
router.get('/', async (req, res) => {
  try {
    console.log('Fetching all pet foods...');
    const petFoods = await PetFood.find();
    console.log('Found pet foods:', petFoods);
    res.json(petFoods);
  } catch (error) {
    console.error('Error fetching pet foods:', error);
    res.status(500).json({ message: error.message });
  }
});

// Get a single pet food
router.get('/:id', async (req, res) => {
  try {
    console.log('Fetching pet food with ID:', req.params.id);
    const petFood = await PetFood.findById(req.params.id);
    if (!petFood) {
      console.log('Pet food not found');
      return res.status(404).json({ message: 'Pet food not found' });
    }
    console.log('Found pet food:', petFood);
    res.json(petFood);
  } catch (error) {
    console.error('Error fetching pet food:', error);
    res.status(500).json({ message: error.message });
  }
});

// Create a new pet food (admin only)
router.post('/', verifyAdmin, async (req, res) => {
  try {
    console.log('Creating new pet food:', req.body);
    if (req.user.role !== 'admin') {
      console.log('Access denied - not admin');
      return res.status(403).json({ message: 'Access denied' });
    }

    const petFood = new PetFood({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      image: req.body.image,
      category: req.body.category,
      weight: req.body.weight
    });

    const newPetFood = await petFood.save();
    console.log('Created new pet food:', newPetFood);
    res.status(201).json(newPetFood);
  } catch (error) {
    console.error('Error creating pet food:', error);
    res.status(400).json({ message: error.message });
  }
});

// Update a pet food (admin only)
router.put('/:id', verifyAdmin, async (req, res) => {
  try {
    console.log('Updating pet food:', req.params.id, req.body);
    if (req.user.role !== 'admin') {
      console.log('Access denied - not admin');
      return res.status(403).json({ message: 'Access denied' });
    }

    const petFood = await PetFood.findById(req.params.id);
    if (!petFood) {
      console.log('Pet food not found');
      return res.status(404).json({ message: 'Pet food not found' });
    }

    petFood.name = req.body.name;
    petFood.description = req.body.description;
    petFood.price = req.body.price;
    petFood.image = req.body.image;
    petFood.category = req.body.category;
    petFood.weight = req.body.weight;

    const updatedPetFood = await petFood.save();
    console.log('Updated pet food:', updatedPetFood);
    res.json(updatedPetFood);
  } catch (error) {
    console.error('Error updating pet food:', error);
    res.status(400).json({ message: error.message });
  }
});

// Delete a pet food (admin only)
router.delete('/:id', verifyAdmin, async (req, res) => {
  try {
    console.log('Deleting pet food:', req.params.id);
    if (req.user.role !== 'admin') {
      console.log('Access denied - not admin');
      return res.status(403).json({ message: 'Access denied' });
    }

    const petFood = await PetFood.findById(req.params.id);
    if (!petFood) {
      console.log('Pet food not found');
      return res.status(404).json({ message: 'Pet food not found' });
    }

    await petFood.remove();
    console.log('Deleted pet food');
    res.json({ message: 'Pet food deleted' });
  } catch (error) {
    console.error('Error deleting pet food:', error);
    res.status(500).json({ message: error.message });
  }
});

export default router; 