import { useEffect, useState, useRef } from 'react';
import './App.css';
import GameList from './components/GameList';
import Game from './components/Game';
import Searchbar from './components/Searchbar';
import Button from './components/Button';

function App() {

  let gameList = [];

  const gamesDB = require('../src/data.json');
  const yearsDB = Object.keys(gamesDB);

  const [searchFor, setSearchFor] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterList, setFilterList] = useState([]);
  const [aPanelIsOpen, setAPanelIsOpen] = useState(false);

  let searchedGameList = [];

  const checkPanels = (val) => {
    val ? setAPanelIsOpen(true) : aPanelIsOpen(false)
  }


  for (let i = 0; i < yearsDB.length; i++) {
    gameList.push(
      <GameList
        key={i}
        year={yearsDB[i]}
        games={gamesDB[yearsDB[i]]}
        iisAPanelopen={checkPanels}
      />
    )
  }

  const searchTermHandler = (e) => {
    setSearchFor(true);
    setSearchTerm((prevSearchTerm) => e.target.value);
    setFilterList([]);
    if (e.target.value.trim().length <= 3) {
      setSearchFor(false)
    } else if (e.target.value.trim().length > 3)  {
      for (let i = 0; i < yearsDB.length; i++) {
        gamesDB[yearsDB[i]].forEach(element => {
          if (element.title.toLowerCase().includes(e.target.value.toLowerCase())) {
            setFilterList(filterList => [...filterList, element])
          }
        })
      };
    }
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

  const scrollTop = () => {

  }


  gameList.reverse();

  return (
    <div className="App">
      <h1>Sean Murtagh's finished games</h1>
      <Searchbar onChange={searchTermHandler} value={searchTerm} placeholder="Search here" />
      {!searchFor && gameList}
      {searchFor && <div className="searchlist"> {searchedGameList} </div>}
      {<a href="#top"><Button onClick={scrollTop}>Scroll to Top</Button></a>} 
    </div>
  );
}

export default App;
