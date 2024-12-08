import { useState, useRef } from "react";

export default function Player() {

  const [playerName, setPlayerName ] = useState(null)
  const playerInput = useRef()

  return (
    <section id="player">
      <h2>Welcome { playerName ?? 'unknown entity' }</h2>
      <p>
        <input type="text" ref={playerInput}/>
        <button onClick={()=>{setPlayerName(playerInput.current.value)}}>Set Name</button>
      </p>
    </section>
  );
}
