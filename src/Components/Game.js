import classes from './Game.module.css';

const Game = (props) => {

    const { title, beaten, score, comment, imgLoc } = props.game;

    const imagebg = {
        backgroundImage: `url("${process.env.PUBLIC_URL + imgLoc}")`,
        backgroundPosition: "center",
        backgroundSize: "cover"
    }

    return (
        <div className={classes.game}>
            <div className={classes.game__inner}>
                <div style={imagebg} className={classes.game__front}>
                    <h3 className={classes.game__title}>{title}</h3>
                    <div className={classes.game__details}>
                        <p className={classes.game__beaten}>Times beaten: {beaten}</p>
                        <p className={classes.game__score}><span>{score}</span>/10</p>
                    </div>
                </div>
                <div className={classes.game__back}>
                    <p className={classes.game__comment}>{comment}</p>
                </div>
            </div>
        </div>
    )
}

export default Game