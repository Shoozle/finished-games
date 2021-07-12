import classes from './Searchbar.module.css';

const Searchbar = props => {
    return (
        <div className={classes.Searchbar}>
            <input
                value={props.value}
                onChange={props.onChange}
                placeholder={props.placeholder}
            />
            <button disabled={!props.searched} onClick={props.click}>X</button>
        </div>
    )
}

export default Searchbar;