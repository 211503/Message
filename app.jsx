const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const messageRoutes = require('./routes/messageRoutes');  // Import the message routes

const app = express();
const PORT = process.env.PORT || 5001;  // Changed the port number to 5001

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/messageboard', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('MongoDB Connected');
}).catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/messages', messageRoutes);  // Mount the messageRoutes to /api/messages endpoint

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
