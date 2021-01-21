import React from 'react';

const Game = (props) => {

    let likesList = [];
    let dislikesList = [];

    // likesList = props.likes.map = like => {
    //     return (
    //         <li>{like}</li>
    //     )
    // }

    return (
        <div>
            <h3>{props.title}</h3>
            <img src={props.url} alt={props.title}/>
            <p>Times beaten: {props.beaten}</p>
            <p>{props.score}/10</p>
            <h4>Likes</h4>
            <div>
                <p>{props.comment}</p>
            </div>
            
        </div>
    )
}

export default Game;