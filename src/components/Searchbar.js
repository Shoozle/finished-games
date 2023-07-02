import classes from './Searchbar.module.css';

const Searchbar = props => {

    const { value, onChange, placeholder, searched, onClick } = props;

    return (
        <div className={classes.Searchbar}>
            <div>
                <input
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                />
                <button disabled={!searched} onClick={onClick}>X</button>
            </div>
        </div>
    )
}

export default Searchbar;