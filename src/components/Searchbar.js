import classes from './Searchbar.module.css';

const Searchbar = props => {
    return (
        <input
            className={classes.Searchbar}
            value={props.value}
            onChange={props.onChange}
            placeholder={props.placeholder}

        />
    )
}

export default Searchbar;