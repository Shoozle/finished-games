import React from 'react';
import Game from './Game';

const GameList = ({ year, games }) => {
    
    const gameList = games.map((game, i) => {
        return (
        <Game
            key={i} 
            title={game.title}
            score={game.score}
            beaten={game.beaten}
            comment={game.comment}
            url={game.url}
        />
        )
    })

    //let list = games.map
    return (
        <div>
            <h1>{year}</h1>
            {gameList}
        </div>
    );
}

export default GameList;