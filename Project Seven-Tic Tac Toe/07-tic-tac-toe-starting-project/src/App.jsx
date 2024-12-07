import { useState } from "react"
import GameBoardComponent from "./component/GameBoardComponent"
import PlayerComponent from "./component/PlayerComponent"
import LogComponent from "./component/logComponent"
import { WINNING_COMBINATIONS } from "./winning_combinations"
import GameOverComponent from "./component/GameOverComponent"


const intialBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]

const PLAYERS ={
  'X': 'Player X',
  'O': 'Player O'
} 


function deriveActivePlayer(gameTurns){
  let currentPlayer = 'X'
  if(gameTurns.length > 0 && gameTurns[0].player === 'X'){
    currentPlayer='O'
  }

  return currentPlayer
}

function deriveWinner(gameBoard, players){
  let winner = null

  for(const combination of WINNING_COMBINATIONS){
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column]
    const secondSquareSymbol= gameBoard[combination[1].row][combination[1].column]
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column]

    if(firstSquareSymbol && firstSquareSymbol===secondSquareSymbol && secondSquareSymbol==thirdSquareSymbol){
      winner = players[firstSquareSymbol]
    }
  }

  return winner
}

function deriveGameBoard(gameTurns){
  // let gameBoard = intialBoard // by using this we are directly editing initial gameboard in memory so we need to edit it by create a deep copy
 let gameBoard = [...intialBoard.map(innerArr=> [...innerArr])]
 for(const turn of gameTurns){
     const {square, player} = turn
     const {row, col} = square

     gameBoard[row][col] = player

 }

 return gameBoard
}


  

function App() {

  const [ players, setPlayers ] = useState(PLAYERS)
// const [activePlayer, setActivePlayer]=useState('X') // we can also derive it from gameturns instead of managing an active state 
 const [gameTurns, setGameTurns] = useState([]) //using this to manage state for gameboard and log component instead of managing state in gameboard component

  const activePlayer = deriveActivePlayer(gameTurns) //now we don't need to manage state for active player , we are derieving it from gameturns 
  //manage a little as state as possible and try deriving state by computing from present states

 
 
  const gameBoard = deriveGameBoard(gameTurns)
  const winner = deriveWinner(gameBoard, players)
    

  const gameDraw = gameTurns.length === 9 && !winner;

  function handleRematch(){
    setGameTurns([])
  }

  const handlePlayerNameChange = (symbol, newName)=> {
    setPlayers((prevPlayers)=>{
      return {
        ...prevPlayers,
        [symbol]: newName
      }
    })
  }

  const handleSelectSquare=(rowIndex, colIndex)=>{
   // setActivePlayer((curActivePlayer)=>curActivePlayer === 'X'? 'O' : 'X')
    setGameTurns((prevTurns)=>{
     
      const currentPlayer = deriveActivePlayer(prevTurns)
      const updatedTurns =[{square : { row: rowIndex, col: colIndex}, player: currentPlayer}, ...prevTurns]
      return updatedTurns;
    }) 
  }

  return (
    <main>
      <div id="game-container">
        <ol id='players' className="highlight-player">
<PlayerComponent name={PLAYERS.X}  symbol="X" isActive={activePlayer==='X'} onChangeName={handlePlayerNameChange}/>
<PlayerComponent name={PLAYERS.O}    symbol="O" isActive={activePlayer==='O'} onChangeName={handlePlayerNameChange}/>


        </ol>
        { (winner || gameDraw)   && <GameOverComponent winner={winner} onRematch={handleRematch}/> }
        <GameBoardComponent onSelectSquare={handleSelectSquare} board={gameBoard}/>
      </div>
      <LogComponent turns={gameTurns} />
    </main>
  )
}

export default App
