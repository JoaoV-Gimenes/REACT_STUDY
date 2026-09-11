"use client"

import { useState } from "react";

function Square({value, onSquareclick}){
  return <button className="Square" onClick={onSquareclick}>{value}</button>
}

function Board({xIsNext, seq, onPlay}){

  function handleClick(i){
    if (seq[i] || calculateWinner(seq)){
      return;
    }
    const nextSquare = seq.slice();
    if(xIsNext){
      nextSquare[i] = "X";
    } else {
      nextSquare[i] = "O";
    }
    onPlay(nextSquare);
  }

  function calculateWinner(seq){
      const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for(let i = 0; i < lines.length; i++){
      const [a, b, c] = lines[i];
      if(seq[a] && seq[a] === seq[b] && seq[a] === seq[c]){
        return seq[a];
      }
    }
    return null 
  }

  const Winner = calculateWinner(seq);
  let status;
  if (Winner){
    status = "Winner: " + Winner;
  } else{
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return(
    <>
      <section className="Board">
        <h1 style={{color: "white"}}>Tic-Tac-Toe</h1>
        <div className="Status" style={{color: Winner ? "green" : "white", padding: "10px"}}>{status}</div>
        <div className="SquareLines">
          <Square value={seq[0]} onSquareclick={() => handleClick(0)}/>
          <Square value={seq[1]} onSquareclick={() => handleClick(1)}/>
          <Square value={seq[2]} onSquareclick={() => handleClick(2)}/>

        </div>
        <div className="SquareLines">
          <Square value={seq[3]} onSquareclick={() => handleClick(3)}/>
          <Square value={seq[4]} onSquareclick={() => handleClick(4)}/>
          <Square value={seq[5]} onSquareclick={() => handleClick(5)}/>
        </div>
        <div className="SquareLines">
          <Square value={seq[6]} onSquareclick={() => handleClick(6)}/>
          <Square value={seq[7]} onSquareclick={() => handleClick(7)}/>
          <Square value={seq[8]} onSquareclick={() => handleClick(8)}/>
        </div>
      </section>
    </>
  )
}

export default function Game(){
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove %2 == 0
  const currentSquares = history[currentMove];
  
  
  function handlePlay(nextSquare){
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquare];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length-1);
  }

  function jumpTo(nextMove){
    setCurrentMove(nextMove);
  }

  const moves = history.map((seq, move) =>{
    let description;
    if (move > 0){
      description = "Go to move #" + move
    } else {
      description = "Restart"
    }

    return(
      <li key= {move}>
        <button onClick={() => jumpTo(move)} className="timeTravelButton">{description}</button>
      </li>
    )
  })

  return(
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} seq={currentSquares} onPlay={handlePlay}/>
      </div>
      <div className="game-info">
        <h2>Time Travel</h2>
        <ol>
          {moves}
        </ol>
      </div>
    </div>
  )
}