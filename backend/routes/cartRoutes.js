const express = require('express');
const router = express.Router();
const Cart = require('../models/cartModel');


// ✅ GET: Fetch all cart items
router.get('/', async (req, res) => {
  try {
    const items = await Cart.find(); // fetch all items from MongoDB
    res.json(items);
  } catch (err) {
    console.error("❌ Error fetching cart items:", err);
    res.status(500).json({ error: 'Failed to fetch cart items.' });
  }
});

// ✅ POST: Add item to cart
router.post('/', async (req, res) => {
  try {
    const { imageUrl, description, price } = req.body;

    const newItem = new Cart({
      imageUrl,
      description,
      price,
    });

    await newItem.save();
    res.status(201).json({ message: 'Item added to cart!' });
  } catch (err) {
    console.error("❌ Error saving to cart:", err);
    res.status(500).json({ error: 'Failed to add item to cart.' });
  }
});

// ✅ 3. Update quantity
router.put('/:id', async (req, res) => {
  try {
    const { quantity } = req.body;
    const updatedItem = await Cart.findByIdAndUpdate(
      req.params.id,
      { quantity },
      { new: true }
    );
    res.json(updatedItem);
  } catch (err) {
    console.error("❌ Error updating quantity:", err);
    res.status(500).json({ error: 'Failed to update quantity.' });
  }
});

// ✅ 4. Delete item
router.delete('/:id', async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.json({ message: 'Item deleted from cart.' });
  } catch (err) {
    console.error("❌ Error deleting item:", err);
    res.status(500).json({ error: 'Failed to delete item.' });
  }
});

module.exports = router;
