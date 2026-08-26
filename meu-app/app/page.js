"use client"

import { useState } from "react";

function Square({value, onSquareclick}){
  return <button className="Square" onClick={onSquareclick}>{value}</button>
}
export default function Board(){
  const [xIsNext, setXIsNext] = useState(true);
  const [seq, setSeq] = useState(Array(9).fill(null));

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
    setSeq(nextSquare);
    setXIsNext(!xIsNext);
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
    status = "Next player: " + (xIsNext ? "X" : "O  ");
  }

  return(
    <>
      <section className="Game">
        <div className="Status" style={{color: Winner ? "green" : "white"}}>{status}</div>
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
