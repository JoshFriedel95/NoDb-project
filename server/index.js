const express = require('express')
const gameList = require('./controllers/gameList')
const favoriteList = require('./controllers/favoriteList')


const app = express()
const SERVER_PORT = 3000

app.use(express.json())

app.get('/api/games', gameList.getAllGames)
app.get('/api/favorite', favoriteList.getFavorite)
app.post('/api/favorite', favoriteList.addToFavorite)
app.put('/api/favorite/:favorite_id', favoriteList.changeRating)
app.delete('/api/favorite/:favorite_id', favoriteList.removeFavorite)


app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`))