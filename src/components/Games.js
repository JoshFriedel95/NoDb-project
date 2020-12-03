import React from 'react'

const Games = (props) => {
    const gamesMap = props.games.map((element) => {
        return <div key={element.id}>
        <div><h3 className="name">Name:</h3>{element.name}</div>
        <div><h3 className="name">Rating:</h3>{element.rating}</div>
        <img className='img' src={element.img} />
        <button className="button" onClick={() => props.addToFavorites(element.id)}>Add to Favorites</button>
        </div>
    })
    
    return(
        <div className='games'>
            <h2>Games</h2>
            {gamesMap}
            </div>
    )
}
export default Games