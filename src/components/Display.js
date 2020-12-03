import React, {Component} from 'react'
import Games from './Games'
import Favorites from './Favorites'
import axios from 'axios'

class Display extends Component {
    constructor(){
        super()
        this.state = {
            games: [],
            favorites: []
        }

        this.addToFavorites = this.addToFavorites.bind(this)
        this.changeRating = this.changeRating.bind(this)
        this.removeFavorites = this.removeFavorites.bind(this)
    }

    componentDidMount(){
        axios.get('/api/games').then((res) => {
            this.setState({
                games: res.data
            })
        })
    }

    addToFavorites(id) {
        const body = {games_id: id}

        axios.post('/api/favorite', body).then((res) => {
           
            console.log(res.data.games)
            this.setState({
                favorites: res.data.games
            })
        })
    }
    changeRating(id, action) {
        axios.put(`/api/favorite/${id}?action=${action}`).then((res) => {
            this.setState({
                favorites: res.data
            })
        }).catch(np => alert('Rating can not be lower than 1'))
    }
    removeFavorites(id) {
        axios.delete(`/api/favorite/${id}`).then((res) => {
            this.setState({
                favorites: res.data
            })
        })
    }
    render() {
        return (
            <div className='display'>
                <Games addToFavorites={this.addToFavorites} games={this.state.games} />
                <Favorites favorites={this.state.favorites} changeRating={this.changeRating} removeFavorites={this.removeFavorites}/>
            </div>
        )
    }
}
export default Display