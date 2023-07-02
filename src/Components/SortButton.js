import classes from './SortButton.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faCalendar, faGamepad, faUserClock } from '@fortawesome/free-solid-svg-icons'

const SortButton = props => {

    const { icon, click } = props;

    switch (icon) { 
        case 'faStar' : 
            return <FontAwesomeIcon icon={faStar} className={classes.sortButton} onClick={click}/>
        case 'faCalendar' : 
            return <FontAwesomeIcon icon={faCalendar} className={classes.sortButton} onClick={click}/>
        case 'faGamepad' : 
            return <FontAwesomeIcon icon={faGamepad} className={classes.sortButton} onClick={click}/>
        case 'faUserClock' : 
            return <FontAwesomeIcon icon={faUserClock} className={classes.sortButton} onClick={click}/>
        default :
            return <></>
    }
}

export default SortButton;