const express = require('express');
const app = express();

// Middleware function
const logger = (req, res, next) => {
    const currentTime = new Date().toLocaleTimeString();
    console.log(`[${currentTime}] ${req.method} ${req.url}`);
    next(); // Call the next middleware function
};

// Register the middleware
app.use(logger);

// Route handler
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
