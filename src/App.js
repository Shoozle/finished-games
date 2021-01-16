import './App.css';
import { useState } from 'react';
import Game from './components/Game';
import GameList from './components/GameList';

function App() {

  const gamesDB = require('../src/data.json');
  const yearsDB = Object.keys(gamesDB);
  // console.log(gamesDB);
  // console.log(yearsDB);
  let gameList = [];

  for (let i=0; i<yearsDB.length; i++) {
    gameList.push(
      <GameList
        key={i}
        year={yearsDB[i]}
        games={gamesDB[yearsDB[i]]}
      />
    )
  }

  console.log(gameList);

  return (
    <div className="App">
      {gameList}
    </div>
  );
}

export default App;
