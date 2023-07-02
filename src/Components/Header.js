import classes from './Header.module.css';
import gamesData from '../data';

const Header = () => <h1 className={classes.header}>Sean Murtaghs {gamesData.length} Finished Games</h1> 

export default Header;