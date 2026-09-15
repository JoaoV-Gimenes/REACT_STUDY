'use client';

import {useState} from 'react';

export default function Home() {
  const[nome, setNome] = useState("")
  const[mostrar, setMostrar] = useState(false)
  const [trecos, setTrecos] = useState([])

  const BotaoAdd = ({ n }) => <button className="bg-orange-700 py-4 px-2 hover:bg-amber-500 rounded" onClick={n}>adicionar</button>
  const BotaoMostrar = ({ n }) => <button className="bg-blue-700 py-4 px-2  hover:bg-blue-300 rounded" onClick={n}>Mostrar</button>

  const adicionar = (valor) => setTrecos(valorAntigo => [...valorAntigo, valor])
  return (
    <>
      <input placeholder="Digite aqui" 
      value={nome} 
      onChange={digitado => setNome(digitado.target.value)}
      className='border border-grey-300 rounded px-3 py-2'>
      </input>

      <BotaoAdd n={() => adicionar(nome)}/>

      <BotaoMostrar n={() => setMostrar(valorAnterior => !valorAnterior)}/>

      <ul>
        {mostrar && trecos.map((texto) => <li key={texto}>{texto}</li>)}
      </ul>
    </>
  );
}
