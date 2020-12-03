import React from 'react'

const Favorite = (props) => {
    return (
        <div>
            <div className="favorite">
                <div><h3 className="name">Name:</h3>{props.game.name}</div>
                <div><h3 className="name">Rating:</h3>{props.game.rating}</div>
                <img className='img-2' src={props.game.img} />
                <div>
                    <button className="button-1" onClick={() => props.changeRating(props.game.favorite_id, 'decrease')}>Rating -</button>
                    <button className="button-2" onClick={() => props.changeRating(props.game.favorite_id, 'increase')}>Rating +</button>
                    <button className="button-2" onClick={() => props.removeFavorites(props.game.favorite_id)}>Remove</button>
                </div>
            </div>
        </div>
    )
}
export default Favorite