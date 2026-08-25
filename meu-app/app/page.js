"use client"

import { useState } from "react";

const user = {
  nome:"João",
  idade: "18",
  IsLoggedIn: false,
}

const Texto1 = () =>(
  <h1>{user.nome}, {user.idade} years old</h1>
)

const Texto2 = () =>(
  <h1>Usuário não cadastrado</h1>
)

// ####################################################

const Itens = [
  {tittle: "alface" , id: "1", temSemente: false},
  { tittle: "tomate", id: "2", temSemente: true },
  { tittle: "cebola", id: "3", temSemente: false }
]

const ListItems = Itens.map(Itens => 
  <li key={Itens.id} style={{color: Itens.temSemente ? "grey" : "red"}}>
    {Itens.tittle}
  </li>
)

// ####################################################

function MyButton(){
  const [count, setCount] = useState(0);

  const handleclick= () => (
    setCount(count + 1)
  )

  return(
    <button onClick={handleclick}>Click {count} times</button>
  )
}

export default function Home() {
  return (
    <>
      <h1>welcome home</h1>
      {user.IsLoggedIn ? (
          <Texto1/>
        ) : (
          <Texto2/>
        )}

        {/* ################################################# */}

        <ul>{ListItems}</ul>

        {/* ################################################# */}
        
        <MyButton/>

        {/* ################################################# */} 


    </>
  );
}
