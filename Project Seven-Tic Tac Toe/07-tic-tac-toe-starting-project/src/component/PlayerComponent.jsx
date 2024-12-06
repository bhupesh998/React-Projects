import React, { useState} from 'react'

const PlayerComponent = ({name , symbol}) => {

 const [isEditing , setIsEditing] = useState(false)
 const handleClick =()=>{
        setIsEditing(prevState=> !prevState) //this way is used so react always use latest state value while updating the state

 }

 let playerName =<span className="player-name">{name}</span> 
 let btnCaption = 'Edit'
 if(isEditing){
    playerName = <input type='text' required value={name}/> 
    btnCaption = 'Save'
 }

  return (
    <li>
            <span className="player">
           { playerName}
              <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleClick}>{btnCaption}</button>
    </li>
  )
}

export default PlayerComponent
