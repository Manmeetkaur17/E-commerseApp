const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  imageUrl: String,
  description: String,
  price: Number,
  quantity: {
    type: Number,
    default: 1
  }
});

module.exports = mongoose.model('Cart', cartSchema);
