import express from 'express';
import PetAccessory from '../models/PetAccessory.js';
import { verifyAdmin } from '../middleware/auth.js';

const router = express.Router();

// Get all pet accessories
router.get('/', async (req, res) => {
  try {
    console.log('Fetching all pet accessories...');
    const accessories = await PetAccessory.find();
    console.log('Found accessories:', accessories);
    res.json(accessories);
  } catch (error) {
    console.error('Error fetching accessories:', error);
    res.status(500).json({ message: error.message });
  }
});

// Get a single pet accessory
router.get('/:id', async (req, res) => {
  try {
    console.log('Fetching accessory with ID:', req.params.id);
    const accessory = await PetAccessory.findById(req.params.id);
    if (!accessory) {
      console.log('Accessory not found');
      return res.status(404).json({ message: 'Accessory not found' });
    }
    console.log('Found accessory:', accessory);
    res.json(accessory);
  } catch (error) {
    console.error('Error fetching accessory:', error);
    res.status(500).json({ message: error.message });
  }
});

// Create a new pet accessory (admin only)
router.post('/', verifyAdmin, async (req, res) => {
  try {
    console.log('Creating new accessory:', req.body);
    if (req.user.role !== 'admin') {
      console.log('Access denied - not admin');
      return res.status(403).json({ message: 'Access denied' });
    }

    const accessory = new PetAccessory({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      image: req.body.image,
      category: req.body.category,
      material: req.body.material,
      size: req.body.size,
      color: req.body.color
    });

    const newAccessory = await accessory.save();
    console.log('Created new accessory:', newAccessory);
    res.status(201).json(newAccessory);
  } catch (error) {
    console.error('Error creating accessory:', error);
    res.status(400).json({ message: error.message });
  }
});

// Update a pet accessory (admin only)
router.put('/:id', verifyAdmin, async (req, res) => {
  try {
    console.log('Updating accessory:', req.params.id, req.body);
    if (req.user.role !== 'admin') {
      console.log('Access denied - not admin');
      return res.status(403).json({ message: 'Access denied' });
    }

    const accessory = await PetAccessory.findById(req.params.id);
    if (!accessory) {
      console.log('Accessory not found');
      return res.status(404).json({ message: 'Accessory not found' });
    }

    accessory.name = req.body.name;
    accessory.description = req.body.description;
    accessory.price = req.body.price;
    accessory.image = req.body.image;
    accessory.category = req.body.category;
    accessory.material = req.body.material;
    accessory.size = req.body.size;
    accessory.color = req.body.color;

    const updatedAccessory = await accessory.save();
    console.log('Updated accessory:', updatedAccessory);
    res.json(updatedAccessory);
  } catch (error) {
    console.error('Error updating accessory:', error);
    res.status(400).json({ message: error.message });
  }
});

// Delete a pet accessory (admin only)
router.delete('/:id', verifyAdmin, async (req, res) => {
  try {
    console.log('Deleting accessory:', req.params.id);
    if (req.user.role !== 'admin') {
      console.log('Access denied - not admin');
      return res.status(403).json({ message: 'Access denied' });
    }

    const accessory = await PetAccessory.findById(req.params.id);
    if (!accessory) {
      console.log('Accessory not found');
      return res.status(404).json({ message: 'Accessory not found' });
    }

    await accessory.remove();
    console.log('Deleted accessory');
    res.json({ message: 'Accessory deleted' });
  } catch (error) {
    console.error('Error deleting accessory:', error);
    res.status(500).json({ message: error.message });
  }
});

export default router; 