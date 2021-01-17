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
            <ul>
                <li>{props.likes[0]}</li>
                <li>{props.likes[1]}</li>
            </ul>
            <h4>Dislikes</h4>
            <ul>
                <li>{props.dislikes[0]}</li>
                <li>{props.dislikes[1]}</li>
            </ul>
            
        </div>
    )
}

export default Game;