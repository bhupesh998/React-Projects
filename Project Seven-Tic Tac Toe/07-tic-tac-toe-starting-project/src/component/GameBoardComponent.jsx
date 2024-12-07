import React, { useState } from 'react'


const GameBoardComponent = ({onSelectSquare, board}) => {

    

//  const [gameBoard, setGameBoard]=  useState(intialBoard);

    /*
    const handleSelecton =(rowIndex, colIndex)=>{
        console.log("onClick Called");
        
        setGameBoard((prevGameBoard)=>{
            const updatedBoard = [...prevGameBoard.map(innerArr=>[...innerArr])]
            //prevGameBoard[rowIndex][colIndex]='X'
            updatedBoard[rowIndex][colIndex]=activePlayerSymbol
            console.log(updatedBoard);
            
            return updatedBoard
        })
        onSelectSquare()
    }
    */

    return (
        <ol id="game-board">
            {board.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((col, colIndex) => <li key={colIndex}><button onClick={()=> onSelectSquare(rowIndex, colIndex)} disabled={col !== null }>{col}</button></li>)}
                    </ol>
                </li>
            ))}
        </ol>
    )
}

export default GameBoardComponent
