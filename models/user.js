const mongoose = require('mongoose');

const birdSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    seenBird: Boolean,
    image: String,
    comments: String,
})

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    birds: [birdSchema],
})

const User = mongoose.model('User', userSchema);

module.exports = User;