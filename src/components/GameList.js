import React from 'react';
import Game from './Game';

const GameList = ({ year, games }) => {

    // console.log(games);
    // console.log(year);
    return (
        <div>
            <h1>{year}</h1>
            <p>{games.title}</p>
        </div>
    );
}

export default GameList;