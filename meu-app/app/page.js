"use client"

import { useState } from "react";

function Square(){
  const [Letra, setLetra] = useState(null);

  const handleClick = () => (
    setLetra('X')
  )
  return <button className="Square" onClick={handleClick}>{Letra}</button>
}
export default function Board(){
  return(
    <>
      <div className="SquareLines">
        <Square />
        <Square />
        <Square />

      </div>
      <div className="SquareLines">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="SquareLines">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  )
}
