const Message = require('../models/Message');

// Create a message
exports.createMessage = async (req, res) => {
    try {
        const { title, content, visibility } = req.body;
        const message = new Message({
            title,
            content,
            visibility,
            userId: req.user.id
        });
        await message.save();
        res.status(201).json(message);
    } catch (error) {
        res.status(500).json({ message: 'Error creating message', error });
    }
};

// Get public messages
exports.getPublicMessages = async (req, res) => {
    try {
        const messages = await Message.find({ visibility: 'public' });
        res.status(200).json(messages);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching messages', error });
    }
};

// Get private messages
exports.getPrivateMessages = async (req, res) => {
    try {
        const messages = await Message.find({ visibility: 'private', userId: req.user.id });
        res.status(200).json(messages);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching messages', error });
    }
};
