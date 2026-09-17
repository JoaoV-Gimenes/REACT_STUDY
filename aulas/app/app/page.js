'use client';

import Lista from "./componentes/lista"
import Input from "./componentes/input"
import {useState} from 'react';

export default function Home() {
  const [dados, setdados] = useState({ nome: "", email: "", celular: "" })

  const atualizaDados = (campo, valor) => setdados(dadosAntigos => ({...dadosAntigos, [campo]: valor}))

  return (
    <>
      <Input UserInput={dados.nome} nomeObj="nome" onChange={() => atualizaDados(nome, nome)}/>
      <Input UserInput={dados.email} nomeObj="email" onChange={() => atualizaDados(email, email)} />
      <Input UserInput={dados.celular} nomeObj="celular" onChange={() => atualizaDados(celular, celular)} />
      <Lista UserInput={dados} />
    </>
  );
}
