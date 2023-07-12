import classes from './SortButton.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faCalendar, faGamepad, faUserClock } from '@fortawesome/free-solid-svg-icons'

const SortButton = props => {

    const { icon, click, text } = props;

    switch (icon) {
        case 'faStar':
            return (
                <button tooltip={text} tooltip-position="top" title={text}>
                    <FontAwesomeIcon icon={faStar} className={classes.sortButton} onClick={click} />
                </button>
            )
        case 'faCalendar':
            return (
                <button tooltip={text} tooltip-position="top" title={text}>
                    <FontAwesomeIcon icon={faCalendar} className={classes.sortButton} onClick={click} />
                </button>
            )
        case 'faGamepad':
            return (
                <button tooltip={text} tooltip-position="top" title={text}>
                    <FontAwesomeIcon icon={faGamepad} className={classes.sortButton} onClick={click} />
                </button>
            )

        case 'faUserClock':
            return (
                <button tooltip={text} tooltip-position="top" title={text}>
                    <FontAwesomeIcon icon={faUserClock} className={classes.sortButton} onClick={click} />
                </button>
            )
        default:
            return <></>
    }
}

export default SortButton;