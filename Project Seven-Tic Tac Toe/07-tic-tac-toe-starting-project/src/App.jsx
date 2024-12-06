import PlayerComponent from "./component/PlayerComponent"

function App() {


  return (
    <main>
      <div id="game-container">
        <ol id='players'>
<PlayerComponent name="player1"  symbol="X"/>
<PlayerComponent name="player2"  symbol="O"/>


        </ol>
      </div>
    </main>
  )
}

export default App
