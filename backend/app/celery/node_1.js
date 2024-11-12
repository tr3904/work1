const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());

// Middleware route to access the Python backend
app.get('/api/data', async (req, res) => {
    try {
        const response = await axios.get('http://localhost:5000/api/data');
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch data from Python backend' });
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Node server running on port ${PORT}`);
});