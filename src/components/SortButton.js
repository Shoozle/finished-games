import classes from './SortButton.module.css';
import { useState } from 'react';

const SortButton = props => {

    const {click, text } = props;
    const [btnState, setBtnState] = useState(false);

    const handleClick = () => {
        setBtnState(!btnState);
        click();
    }

    return (
        <input className={classes.sort__Button} onClick={handleClick} type="button" text={text} value={`Sort by ${text}`}/>
    )
}

export default SortButton;