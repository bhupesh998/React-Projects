import React, { useState } from 'react'

const intialBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

const GameBoardComponent = ({onSelectSquare, turns}) => {

    let gameBoard = intialBoard

    for(const turn of turns){
        const {square, player} = turn
        const {row, col} = square

        gameBoard[row][col] = player

    }

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
            {gameBoard.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((col, colIndex) => <li key={colIndex}><button onClick={()=> onSelectSquare(rowIndex, colIndex)}>{col}</button></li>)}
                    </ol>
                </li>
            ))}
        </ol>
    )
}

export default GameBoardComponent
