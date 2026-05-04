// app.js

// Admin and Butler Dashboard Logic

const express = require('express');
const app = express();
const port = 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Sample route for Admin Dashboard
app.get('/admin/dashboard', (req, res) => {
    res.send('Welcome to the Admin Dashboard');
});

// Sample route for Butler Dashboard
app.get('/butler/dashboard', (req, res) => {
    res.send('Welcome to the Butler Dashboard');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});