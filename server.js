




const dotenv = require('dotenv').config();
const express = require('express');
const cors = require('cors');
const db = require('./db/database');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors({origin: "*" }));
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Server is running");
});

// Import Routes
const userRoutes = require('./routes/users');
const productRoutes = require('./routes/products');

const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);

// Test Post Request
app.post("/api/data", (req, res) => {
    console.log(req.body); // Log the request body
    res.status(200).json({ message: "Data received successfully" });
});

// Test Get Request
app.get("/api/data", (req, res) => {
    res.status(200).json({ message: "Here is some data" });
});

// PUT request to update data
app.put("/api/data", (req, res) => {
    res.status(200).json({ message: "Data updated successfully" });
});

// DELETE request to delete data
app.delete("/api/data", (req, res) => {
    res.status(200).json({ message: "Data deleted successfully" });
});


// Start Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
}); 