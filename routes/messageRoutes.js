const express = require('express');
const router = express.Router();

// Example route for handling GET requests to /api/messages
router.get('/', (req, res) => {
    res.send('Message board API');
});

// Route to create a new message (example POST route)
router.post('/', (req, res) => {
    // Logic for creating a new message, for now sending a mock response
    res.send('New message created');
});

// Route to update an existing message by ID (example PUT route)
router.put('/:id', (req, res) => {
    const messageId = req.params.id;
    // Logic for updating a message by ID
    res.send(`Message with ID ${messageId} updated`);
});

// Route to delete a message by ID (example DELETE route)
router.delete('/:id', (req, res) => {
    const messageId = req.params.id;
    // Logic for deleting a message by ID
    res.send(`Message with ID ${messageId} deleted`);
});

module.exports = router;  // Export the router to be used in app.js
