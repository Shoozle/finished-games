import Game from "./Game";
import classes from './SearchResults.module.css'

const SearchResults = props => {

    const { searchedArray } = props;

    const games = searchedArray.map(game => 
            <Game
                key={game.title}
                game={game}
                searched={true}
                year={game.year}
            />
    )

    return (
        <>
            <h2 className={classes.found}>{searchedArray.length === 0 ? `No` : searchedArray.length} results found</h2>
            <div className={classes.searchResults}>
            {games}
            </div>
        </>
    )
}

export default SearchResults;