const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Signup Route
router.post('/signup', async (req, res) => {
    const { name, email, password } = req.body;
    console.log("📥 Received:", { name, email, password }); 

    try {
        const userExists = await User.findOne({ name });
        if (userExists) {
            console.log("⚠️ User already exists");
            return res.status(409).json({ msg: "User already exists" });
        }

        const newUser = new User({ name, email, password });
        await newUser.save();

        console.log("✅ User saved:", newUser);
        res.status(201).json({ msg: "User registered successfully" });

    } catch (err) {
        console.error("❌ Signup error:", err); 
        res.status(500).json({ msg: "Server error" });
    }
});


// Login Route
router.post('/login', async (req, res) => {
    const { name, password } = req.body;
    try {
        const user = await User.findOne({ name });
        if (!user) {
            return res.status(404).json({ msg: "User not found" });
        }

        if (user.password !== password) {
            return res.status(401).json({ msg: "Invalid password" });
        }

        res.status(200).json({ msg: "Login successful", user });
    } catch (err) {
        console.error("Login error:", err);
        res.status(500).json({ msg: "Server error" });
    }
});

module.exports = router;
