const mongoose = require('mongoose');

const Player = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    club: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Player', Player);