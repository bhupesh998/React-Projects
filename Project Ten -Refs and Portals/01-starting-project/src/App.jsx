import Player from './components/Player.jsx';
import TimerComponent from './components/TimerComponent.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerComponent title={"Easy"} targetTime={1}/>
        <TimerComponent title={"Not easy"} targetTime={5}/>
        <TimerComponent title={"Getting Tough"} targetTime={10}/>
        <TimerComponent title={"Difficult"} targetTime={20}/>
      </div>
    </>
  );
}

export default App;
