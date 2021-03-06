import React from 'react';
import classes from './Game.module.css';

const Game = (props) => {

    const imagebg = {
        backgroundImage: `url("${process.env.PUBLIC_URL + props.url}")`,
        backgroundPosition: "center",
        backgroundSize: "cover"
    }

    return (
        <div className={classes.Game}>
            <div className={classes.game__inner}>
                <div style={imagebg} className={classes.game__front}>
                    <h3 className={classes.game__title}>{props.title}</h3>
                    {/* <img loading="lazy" 
                        className={classes.game__image} 
                        src={process.env.PUBLIC_URL + props.url} 
                        alt={props.title} 

                        /> */}
                    <div className={classes.game__details}>
                        <p className={classes.game__beaten}>Times beaten: {props.beaten}</p>
                        <p className={classes.game__score}><span>{props.score}</span>/10</p>
                    </div>
                </div>
                <div className={classes.game__back}>
                    <p className={classes.game__comment}>{props.comment}</p>
                </div>
            </div>
        </div>
    )
}

export default Game;