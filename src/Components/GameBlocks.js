import { useState } from 'react';
import gamesData from '../data';
import GameBlock from './GameBlock';
import SortButton from './SortButton';
import classes from './GameBlocks.module.css';
import Searchbar from './Searchbar';
import SearchResults from './SearchResults';

const GameBlocks = () => {

    const [groupType, setGroupType] = useState('year');
    const [searchText, setSearchText] = useState('');
    const [searched, setSearched] = useState(false);
    const [filterList, setFilterList] = useState([]);

    const groupBy = (array, property) => {
        var hash = {};
        for (var i = 0; i < array.length; i++) {
            if (!hash[array[i][property]]) hash[array[i][property]] = [];
            hash[array[i][property]].push(array[i]);
        }
        return hash;
    }

    const sortedGames = groupBy(gamesData, groupType);

    let gameblocks = [];
    let lengthGames = Object.keys(sortedGames).length; //2

    for (let i = lengthGames - 1; i >= 0; i--) {
        gameblocks.push(
            <GameBlock
                key={i}
                grouping={Object.keys(sortedGames)[i]}
                games={Object.values(sortedGames)[i]}
                sortType={groupType}
            />
        )
    }

    const sortButtons = (
        <>
            <div className={classes.sort__buttons}>
                <SortButton icon="faCalendar" click={() => setGroupType('year')} />
                <SortButton icon="faStar" text="Sort By Score" click={() => setGroupType('score')} />
                <SortButton icon="faGamepad" text="Sort By Times Beaten" click={() => setGroupType('beaten')} />
                <SortButton icon="faUserClock" text="Sort By Last Played" click={() => setGroupType('lastPlayed')} />
            </div>
        </>
    )

    const searchForGames = e => {
        setSearched(true);
        setSearchText(e.target.value);
        setFilterList([]);

        if (e.target.value.trim().length <= 1)
            setSearched(false);
            
        if (e.target.value.trim().length >1) {
            setFilterList([]);
            for (let i=0; i<gamesData.length -1; i++) {
                if (gamesData[i].title.toLowerCase().includes(e.target.value.toLowerCase())) {
                    setFilterList(filterList => [...filterList, gamesData[i]]);
                }
            }
        }
    }

    return (
        <>
            <Searchbar 
                onChange={searchForGames} 
                value={searchText} 
                searched={searched} 
                placeholder="Search..."
                onClick={() => {setSearched(false); setSearchText('')}}
            />
            {!searched && sortButtons}
            {!searched && gameblocks}
            {searched && <SearchResults searchedArray={filterList} />}
        </>
    )
}

export default GameBlocks