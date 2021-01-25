import React from 'react';
import classes from './Game.module.css';

const Game = (props) => {

    return (
        <div className={classes.Game}>
            <div className={classes.game__inner}>
                <div className={classes.game__front}>
                    <h3 className={classes.game__title}>{props.title}</h3>
                    <img className={classes.game__image} src={props.url} alt={props.title} />
                    <p>Times beaten: {props.beaten}</p>
                    <p>{props.score}/10</p>
                </div>
                <div className={classes.game__back}>
                    <p className={classes.game__comment}>{props.comment}</p>
                </div>
            </div>
        </div>
    )
}

export default Game;