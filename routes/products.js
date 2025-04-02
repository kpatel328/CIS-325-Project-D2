const express = require('express');
const router = express.Router();
const db = require('../db/database');

// Create a product
router.post('/', (req, res) => {
    const { name, price, stock } = req.body;
    db.run(`INSERT INTO products (name, price, stock) VALUES (?, ?, ?)`,
        [name, price, stock],
        function (err) {
            if (err) return res.status(500).json({ error: err.message });
            res.status(201).json({ id: this.lastID, name, price, stock });
        });
});

// Get all products
router.get('/', (req, res) => {
    db.all('SELECT * FROM products', [], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows);
    });
});

// Update product stock
router.put('/:id', (req, res) => {
    const { stock } = req.body;
    db.run('UPDATE products SET stock = ? WHERE id = ?', [stock, req.params.id], function (err) {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Stock updated' });
    });
});

// Delete a product
router.delete('/:id', (req, res) => {
    db.run('DELETE FROM products WHERE id = ?', req.params.id, function (err) {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Product deleted' });
    });
});

module.exports = router;
