import './App.css';
import GameList from './components/GameList';

function App() {

  const gamesDB = require('../src/data.json');
  const yearsDB = Object.keys(gamesDB);
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

  return (
    <div className="App">
      {gameList}
    </div>
  );
}

export default App;
