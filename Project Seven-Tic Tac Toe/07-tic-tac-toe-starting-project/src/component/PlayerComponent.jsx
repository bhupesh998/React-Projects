import React, { useState} from 'react'

const PlayerComponent = ({name , symbol, isActive}) => {

 const [isEditing , setIsEditing] = useState(false)
 const [playerName, setPlayerName] = useState(name)
 const handleClick =()=>{
        setIsEditing(prevState=> !prevState) //this way is used so react always use latest state value while updating the state

 }

 const handleChange =(event)=>{
    setPlayerName(event.target.value)
 }

 let playerNameTag =<span className="player-name">{playerName}</span> 
 let btnCaption = 'Edit'
 if(isEditing){
    playerNameTag = <input type='text' required value={playerName} onChange={handleChange}/> //instead of value={name} you can use defaultValue because when trying to edit value the value will not change because of value property as it will override the value that you are trying to edit or other way using state
    btnCaption = 'Save'
 }

  return (
    <li className={isActive ? 'active': ''}>
            <span className="player">
           { playerNameTag}
              <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleClick}>{btnCaption}</button>
    </li>
  )
}

export default PlayerComponent
