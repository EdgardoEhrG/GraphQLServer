const soccerPlayers = require('./players');

const { players } = soccerPlayers;

module.exports = {
    player: ({id}) => players.find(player => player.id == id),
    players: ({country}) => {
        switch (country) {
           case 'FRANCE': return players.filter(player => player.country == 'France')
           case 'SPAIN': return players.filter(player => player.country == 'Spain')
           default: return players
        }
    }
}