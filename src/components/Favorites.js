import React from 'react'
import Favorite from './Favorite'

const Favorites = (props) => {
    const favoritesMap = props.favorites.map((element) => {
        return (
            <Favorite key={element.favorite_id}game={element}changeRating={props.changeRating}removeFavorites={props.removeFavorites}/>
        )
    })
    return (
        <div>
            <div className='favorites'>
                <h2>Your Favorite Games</h2>
                {favoritesMap}
            </div>
        </div>
    )
}
export default Favorites