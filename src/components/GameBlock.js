import { useState } from 'react';
import Game from './Game';
import classes from './GameBlock.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';

const GameBlock = props => {

    const { grouping, games, sortType } = props;

    const [displayGames, setDisplayGames] = useState(false);

    let heading;

    const allGames = games.map(game =>
        <Game
            key={game.title}
            game={game}
        />
    )

    switch (sortType) {
        case 'year': {
            heading = `Released in ${grouping} | ${games.length} ${games.length === 1 ? `game` : `games`}`;
            break;
        }
        case 'score': {
            heading = `All the ${grouping}/10s | ${games.length} ${games.length === 1 ? `game` : `games`}`;
            break;
        }
        case 'beaten': {
            heading = `Games beaten ${grouping} ${grouping === 1 ? `time` : `times`} | ${games.length}  ${games.length === 1 ? `game` : `games`}`;
            break;
        }
        case 'lastPlayed': {
            heading = `Games last finished in ${grouping} | ${games.length} ${games.length === 1 ? `game` : `games`}`;
            break;
        }
        default: {
            heading = `Released in ${grouping} | ${games.length} ${games.length === 1 ? `game` : `games`}`;
            break;
        }
    }

    const displayArrow = () => {
        let arrow;
        displayGames ? arrow = <FontAwesomeIcon className={classes.arrow} icon={faAngleUp}/> : arrow = <FontAwesomeIcon className={classes.arrow} icon={faAngleDown}/> ;
        return arrow;
    }

    return (
        <div>
            <h2 
                className={classes.gameBlock__header} 
                onClick={() => setDisplayGames(!displayGames)}
            >
                <span className={classes.gameBlock__heading}>{heading}</span>
                {displayArrow()}
            </h2>
            <div className={classes.gameBlock}>
                {displayGames ? allGames : null}
            </div>
        </div>

    )
}

export default GameBlock