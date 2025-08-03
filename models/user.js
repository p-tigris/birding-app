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
    rating: String,
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
    rank: Number,
    image: {
        type: String,
        default: 'https://i.imgur.com/hwkvllO.jpeg', 
    }
})

const User = mongoose.model('User', userSchema);

module.exports = User;