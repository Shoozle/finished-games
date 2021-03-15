import React, { useState } from 'react';
import Game from './Game';
import classes from './GameList.module.css';

const GameList = ({ year, games }) => {
    
    const [displayGames, setDisplayGames] = useState(false);
    const [downArrow, setDownArrow] = useState(true);
    
    const gameList = games.map((game, i) => (
        <Game
            key={i} 
            title={game.title}
            score={game.score}
            beaten={game.beaten}
            comment={game.comment}
            url={game.url}
        />
        )
    )

    const displayGamesHandler = (dir) => {
        setDisplayGames(!displayGames);
        setDownArrow(!downArrow);
    }

    const displayArrow = () => {
        let arrow;
        downArrow ? arrow = <span> &darr; </span> : arrow = <span> &uarr; </span>;
        return arrow;
    }

    //let list = games.map
    return (
        <div>
            <h1 onClick={displayGamesHandler} className={classes.year}>{year}{displayArrow()}</h1>
            <div className={classes.GameList}>
                {displayGames ? gameList : null}
            </div>
        </div>
    );
}

export default GameList;