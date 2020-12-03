const games = require('../data.json')


module.exports = {
    getAllGames: (req, res) => {
        res.status(200).send(games)
    },
}