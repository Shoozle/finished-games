import './App.css';
import { useState } from 'react';
import Game from './components/Game';
import GameList from './components/GameList';

function App() {
  const gameData = require('./data.json');
  const gameKeys = Object.keys(gameData);
  // const noofyears = Object.keys(gameData).length;
  // const yearLength = gameData[gameKeys[0]].length;
  // console.log(gameData[gameKeys[0]].Object)
  // console.log(yearLength);
  // console.log(noofyears);

  const [games, setGames] = useState([]);
  // console.log(Object.keys(gameData));

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

  //console.log(gameData)

  // const newGame = {
  //   title : gameData[gameKeys[1]][1].title,
  //   score : gameData[gameKeys[1]][1].score,
  //   beaten : gameData[gameKeys[1]][1].beaten,
  //   likes : gameData[gameKeys[1]][1].likes,
  //   dislikes : gameData[gameKeys[1]][1].dislikes
  // }
  let gaameList = gameData[2020].map((game, i) =>
    <Game
      key={i}
      title={game.title}
      score={game.score}
      beaten={game.beaten}
      likes={game.likes}
      dislikes={game.dislikes}
      url={game.url}
    />
  )

  let yearlen = gameData[2020].length;
  // console.log(yearlen);
  // console.log(gameKeys.length);

  //gameList = [];
  let newList = [];


  // for (let i=0;i<gameKeys.length;i++) {
  //   console.log(i)
  //   gameList = gameData[gameKeys[i]].map((game, i) => 
  //     <Game
  //       key={i}
  //       title={game.title}
  //       score={game.score}
  //       beaten={game.beaten}
  //       likes={game.likes}
  //       dislikes={game.dislikes}
  //       url={game.url}
  //     />
  //   )
  // }

  let lists = [];
  let gameList = [];

  for (let i = 0; i < gameKeys.length; i++) {
    for (let j = 0; j < gameData[gameKeys[i]].length; j++) {
      //console.log(gameData[gameKeys[i]][j]);
      newList.push(gameData[gameKeys[i]][j]);
    }
      gameList.push(newList.map((game, index) => 
        <GameList 
          year={gameKeys[i]}
          games={game}
        />))
      // <GameList
      // year={gameData[gameKeys[i]]}
      // games={newList}
      // />
    newList = [];
  }

  // console.log(newList)

  gaameList = newList.map((game, i) =>
    <Game
      key={i}
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
      {/* {gaameList} */}
      {gameList}
    </div>
  );
}

export default App;
