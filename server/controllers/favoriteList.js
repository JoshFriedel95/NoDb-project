const games = require('../data.json')

const favorite = {
    games: []
}

let favoriteId = 0

module.exports = {
    getFavorite: (req, res) => {
        res.status(200).send(favorite)
    },
    addToFavorite: (req, res) => {
        const { games_id } = req.body
        const index = favorite.games.findIndex((element) => element.id === +games_id)

        if (index === -1) {
            const game = games.find((element) => element.id === +games_id)
            game.favorite_id = favoriteId

            favorite.games.push(game)
            favoriteId++
        }


        res.status(200).send(favorite)
    },

    changeRating: (req, res) => {
        const { favorite_id } = req.params
        const { action } = req.query
        const index = favorite.games.findIndex((element) => element.favorite_id === +favorite_id)
        const {games} = favorite
        console.log(games.rating)
        if (games[index].rating === 0 && action === 'decrease') {
            return res.status(451).send('Rating can not be lower than 1')
        } else if (action === 'increase') {
            favorite.games[index].rating++
        } else {
            favorite.games[index].rating--
        }
        res.status(200).send(favorite.games)
    },
    removeFavorite: (req, res) => {
        const { favorite_id } = req.params
        const index = favorite.games.findIndex((element) => element.favorite_id === +favorite_id)
        favorite.games.splice(index, 1)
        res.status(200).send(favorite.games)
    }
}
