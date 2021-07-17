import classes from './Searchbar.module.css';

const Searchbar = props => {
    return (
        <div className={classes.Searchbar}>
            <div className={classes.wrapper}>
                <input
                    value={props.value}
                    onChange={props.onChange}
                    placeholder={props.placeholder}
                />
                <button disabled={!props.searched} onClick={props.click}>X</button>
            </div>
        </div>
    )
}

export default Searchbar;