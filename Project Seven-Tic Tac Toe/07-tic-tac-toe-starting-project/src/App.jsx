import { useState } from "react"
import GameBoardComponent from "./component/GameBoardComponent"
import PlayerComponent from "./component/PlayerComponent"
import LogComponent from "./component/logComponent"

function App() {
const [activePlayer, setActivePlayer]=useState('X')
 const [gemeTurns, setGameTurns] = useState([]) //using this to manage state for gameboard and log component instead of managing state in gameboard component

  const handleSelectSquare=(rowIndex, colIndex)=>{
    setActivePlayer((curActivePlayer)=>curActivePlayer === 'X'?'O' : 'X')
    setGameTurns((prevTurns)=>{
      let currentPlayer = 'X'
      if(prevTurns.lenth > 0 && prevTurns[0].player === 'X'){
        currentPlayer='O'
      }
      const updatedTurns =[{square : { row: rowIndex, col: colIndex}, player: currentPlayer}, ...prevTurns]
      return updatedTurns;
    }) 
  }

  return (
    <main>
      <div id="game-container">
        <ol id='players' className="highlight-player">
<PlayerComponent name="player1"  symbol="X" isActive={activePlayer==='X'}/>
<PlayerComponent name="player2"  symbol="O" isActive={activePlayer==='O'}/>


        </ol>
        <GameBoardComponent onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer}/>
      </div>
      <LogComponent />
    </main>
  )
}

export default App
