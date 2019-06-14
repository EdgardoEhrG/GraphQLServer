const crypto = require('crypto');

// Temp data
// const soccerPlayers = require('./players');
// const { players } = soccerPlayers;

// Models
const Player = require('../models/player');

module.exports = {
    player: ({id}) => Player.findById(id),
    players: ({country}) => Player.find({ country }),
    createPlayer: ({ input }) => {
        return Player.create(input);
    },
    updatePlayer: ({ id, input }) => {
        return Player.findByIdAndUpdate(id, input, { new: true });
    },
    removePlayer: ({ id }) => {
        return Player.deleteOne({ _id: id }).then(() => id);
    }
}