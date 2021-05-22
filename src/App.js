import { useEffect, useState } from 'react';
import './App.css';
import GameList from './components/GameList';
import Game from './components/Game';
import Searchbar from './components/Searchbar';

function App() {

  let gameList = [];
  // let filterList = [];

  const gamesDB = require('../src/data.json');
  const yearsDB = Object.keys(gamesDB);

  const [searchFor, setSearchFor] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterList, setFilterList] = useState([]);

  let statelessList = [];
  let searchedGameList = [];


  // let searchTerm = 'Sekiro'
  // // console.log(Object.keys(gamesDB))
  // // console.log(Object.keys(Object.entries(gamesDB)))
  // // console.log(Object.entries(gamesDB))
  // for (let i=0; i<(Object.keys(gamesDB).length); i++) {
  //   let newArray = Object.entries(gamesDB)[i][1]
  //     console.log(newArray)
  //   for (let j=0; j<newArray.length; j++) {
  //     if (newArray[j].title === searchTerm) {
  //       console.log('FOUND')
  //       console.log(newArray[j])
  //       filterList.push(newArray[j])
  //     }
  //   }
  //   // console.log(Object.entries(gamesDB)[i][1])
  // }
  // // console.log(Object.entries(gamesDB)[0])

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
    if (e.target.value.trim().length === 0) {
      setSearchFor(false)
    } else if ((e.target.value.trim().length > 3)) 
    {
      for (let i = 0; i < yearsDB.length; i++) {
        gamesDB[yearsDB[i]].forEach(element => {
          if (element.title.toLowerCase().includes(searchTerm.toLowerCase())) {
            setFilterList(filterList => [...filterList, element])
          }
        })
      };
    }
  }

  console.log(filterList)
  console.log(statelessList)

  searchedGameList = filterList.map((game) => {
    return (
    <Game 
      title={game.title}
      score={game.score}
      beaten={game.beaten}
      comment={game.comment}
      url={game.url}
    />)
  })

  console.log(filterList)

  gameList.reverse();

  return (
    <div className="App">
      <h1>Sean Murtagh's finished games</h1>
      <Searchbar onChange={searchTermHandler} value={searchTerm} placeholder="Search here" />
      {!searchFor && gameList}
      {searchFor && <div className="searchlist"> {searchedGameList} </div>}
    </div>
  );
}

export default App;
