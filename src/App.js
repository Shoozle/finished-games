import { useState } from 'react';
import './App.css';
import GameList from './components/GameList';

function App() {

  let gameList = [];
  let filterList = [];

  const gamesDB = require('../src/data.json');
  const yearsDB = Object.keys(gamesDB);

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


  for (let i=0; i<yearsDB.length; i++) {
    gameList.push(
      <GameList
        key={i}
        year={yearsDB[i]}
        games={gamesDB[yearsDB[i]]}
      />
    )
  }

  gameList.reverse();

  return (
    <div className="App">
      {gameList}
    </div>
  );
}

export default App;
