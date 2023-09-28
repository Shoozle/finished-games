import classes from './SortButton.module.css';
import { useState } from 'react';

const SortButton = props => {

    const { active, click, text } = props;

    return (
        <input className={classes.sort__Button} onClick={click} type="button" text={text} value={`Sort by ${text}`}/>
    )
}

export default SortButton;