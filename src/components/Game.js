import React from 'react';
import classes from './Game.module.css';

const Game = (props) => {

    return (
        <div className={classes.Game}>
            <div className={classes.front}>
                <h3 className={classes.title}>{props.title}</h3>
                <img className={classes.image} src={props.url} alt={props.title} />
                <p>Times beaten: {props.beaten}</p>
                <p>{props.score}/10</p>
            </div>
            <div className={classes.backside}>
                <p className={classes.comment}>{props.comment}</p>
            </div>

        </div>
    )
}

export default Game;