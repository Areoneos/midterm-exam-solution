const express = require('express');
const app = express();

// main or index route
app.get('/', (req, res) => {
    res.send('Welcome to the Express server! Go to /test to see the JSON message.');
});

// /test route
app.get('/test', (req, res) => {
    res.json({ message: 'Express is working! Write your full name' });
});

// Start the server on port 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
