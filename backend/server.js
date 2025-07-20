const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// 🔧 Middleware
app.use(cors());
app.use(express.json());

// 🔗 Routes
app.use('/api', authRoutes);
app.use('/api/products', productRoutes); // 🛍️ Product routes
app.use('/api/cart', cartRoutes);        // 🛒 Cart routes


// 🔌 MongoDB Connection
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/cartDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("✅ MongoDB Connected");
  app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
}).catch(err => {
  console.error("❌ MongoDB connection error:", err);
});
