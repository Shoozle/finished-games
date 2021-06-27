import React, { useEffect, useState } from 'react';
import Game from './Game';
import classes from './GameList.module.css';
import Button from './Button';

const GameList = (props) => {

    const { games, year, open } = props;
    
    const [displayGames, setDisplayGames] = useState(false);
    const [downArrow, setDownArrow] = useState(false);
    
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

    const displayGamesHandler = () => {
        setDisplayGames(!displayGames);
        setDownArrow(!downArrow);
    }

    const calcAvgScore = () => {
        let avg = 20;
        let totalScore = 0;
        games.forEach(game => {
            totalScore += game.score
        }); 
        avg = (totalScore / games.length).toFixed(1)
        return avg;
    }

    const totalGames = () => {
        return games.length
    }

    const displayArrow = () => {
        let arrow;
        downArrow ? arrow = <span> &darr; </span> : arrow = <span> &uarr; </span>;
        return arrow;
    }

    return (
        <>
            <h2 onClick={displayGamesHandler} className={classes.year}>
                <span className={classes.totalGames}># games: {totalGames()}</span>
                {year}{displayArrow()}
                <span className={classes.score}>Average Score: {calcAvgScore()}
                </span> 
            </h2>
            <div className={classes.GameList}>
                {displayGames ? gameList : null}
            </div>
        </>
    );
}

export default GameList;