'use client'

import { useState } from 'react';
import Botao from './componentes/button.js';
import Lista from './componentes/list.js';


export default function Home() {
  const [coisas, setCoisas] = useState({nome: "", caloria: ""});
  const [dados, setDados] = useState([])


  function handleClick(){
    setDados((prev) => [...prev, { nome: coisas.nome, caloria: coisas.caloria }]);
    setCoisas({nome : "", caloria: ""})
  }

  const handleRemove = (nome) => setDados((prev) => prev.filter((n) => n.nome !== n.nome))
  return (
    <>
      <section>
        <h3>Nome</h3>
        <input value={coisas.nome} onChange={(e) => setCoisas((prev) => ({...prev, nome : e.target.value}))}/>
        <h3>Caloria</h3>
        <input value={coisas.caloria} onChange={(e) => setCoisas((prev) => ({ ...prev, caloria: e.target.value }))} />
        
        <Botao onClick={handleClick}/>
      </section >

      <section>
        <Lista dados={dados} onRemove={handleRemove}/>
      </section>
    </>
  );
}
