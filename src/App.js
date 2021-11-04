import { useEffect, useState } from 'react';
import './App.css';
import GameList from './components/GameList';
import Game from './components/Game';
import Searchbar from './components/Searchbar';
import Button from './components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const gamesDB = require('../src/data.json');
const yearsDB = Object.keys(gamesDB);

let totalGames = 0

for (let i=0; i<yearsDB.length; i++) {
  for (let j=0; j<gamesDB[yearsDB[i]].length; j++) {
    totalGames++;
  }
}


function App() {

  let gameList = [];

  const [searchFor, setSearchFor] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterList, setFilterList] = useState([]);
  const [notTop, setNotTop] = useState(false);

  useEffect(() => {
    const detectScroll = () => {
      if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        setNotTop(true);
      } else {
        setNotTop(false)
      }
    }
    window.addEventListener("scroll", detectScroll);
    return () => window.removeEventListener("scroll", detectScroll);
  }, [notTop])

  let searchedGameList = [];

  for (let i = 0; i < yearsDB.length; i++) {
    gameList.push(
      <GameList
        key={i}
        year={yearsDB[i]}
        games={gamesDB[yearsDB[i]]}
      />
    )
  }

  const searchTermHandler = (e) => {
    setSearchFor(true);
    setSearchTerm(e.target.value);
    setFilterList([]);

    if (e.target.value.trim().length <= 1) {
      setSearchFor(false)
    } else if (e.target.value.trim().length > 1)  {
      for (let i = yearsDB.length -1; i >= 0; i--) {
        let currentYear = yearsDB[i]
        gamesDB[yearsDB[i]].forEach(element => {
          if (element.title.toLowerCase().includes(e.target.value.toLowerCase())) {
            const newElement = {...element}
            newElement.title = element.title + ` [${currentYear}]`
            setFilterList(filterList => [...filterList, newElement])
          }
        })
      };
    } 
  }

  const cancelSearch = () => {
    setSearchTerm('');
    setSearchFor(false);
  }

  searchedGameList = filterList.map((game, index) => {
    return (
    <Game
      key={index} 
      title={game.title}
      score={game.score}
      beaten={game.beaten}
      comment={game.comment}
      url={game.url}
    />)
  })

  if (filterList.length === 0) {
    searchedGameList = <h2>No results found</h2>
  }

  gameList.reverse();


  return (
    <div className="App">
      <h1>Sean Murtagh's {totalGames} finished games</h1>
      <Searchbar 
        onChange={searchTermHandler} 
        value={searchTerm} 
        placeholder="Search.." 
        click={cancelSearch}
        searched={searchFor}
        />
      {!searchFor && gameList}
      {searchFor && searchedGameList.length > 0 && <p className="searchResult">{searchedGameList.length} found</p>}
      {searchFor && <div className="searchlist">  {searchedGameList} </div>}
      {notTop && <a href="#top"><Button>Go to top <FontAwesomeIcon icon={faArrowUp} /> </Button></a>} 
    </div>
  );
}

export default App;
