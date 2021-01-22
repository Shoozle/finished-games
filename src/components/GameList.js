import React from 'react';
import Game from './Game';
import classes from './GameList.module.css';

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
        <div className={classes.GameList}>
            <h1 className={classes.year}>{year}</h1>
            {gameList}
        </div>
    );
}

export default GameList;