import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Game from './components/Game';



function App() {
  const gameData = require('./data.json');
  const gameKeys = Object.keys(gameData);
  const noofyears = Object.keys(gameData).length;
  // console.log(noofyears);

  const [games, setGames ] = useState([]);
  // console.log(gameKeys[1]);

  // for (let i=0; i<noofyears; i++) {
  //   let gamesInAYear = gameData[gameKeys[i].length];
  //   for (let j=0; j<gamesInAYear; j++) {
  //     setGames(...games,
  //       <Game
  //         data={gameData[gameKeys[i][j]]}
  //       />
  //       )
  //   }
    // gameData[gameKeys[i]]

    console.log(gameData)

    // const newGame = {
    //   title : gameData[gameKeys[1]][1].title,
    //   score : gameData[gameKeys[1]][1].score,
    //   beaten : gameData[gameKeys[1]][1].beaten,
    //   likes : gameData[gameKeys[1]][1].likes,
    //   dislikes : gameData[gameKeys[1]][1].dislikes
    // }

    const gameList = gameData[2020].map(game =>
      <Game
        title={game.title}
        score={game.score}
        beaten={game.beaten}
        likes={game.likes}
        dislikes={game.dislikes}
        url={game.url}
      />
    )

  return (
    <div className="App">
    {gameList}
    </div>
  );
}

export default App;
