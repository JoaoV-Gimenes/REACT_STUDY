'use client';

import Lista from './componentes/lista';
import Input from './componentes/input';
import BotFiltrar from './componentes/botFiltrar';
import {useState} from 'react';
import BotaoAdd from './componentes/BotAdd';

export default function Home() {
  const [Contatos, setContatos] = useState([])
  const [dados, setDados] = useState({ nome: "", email: "", celular: "" })

  const handleChange = (digitado) =>{
      const {name, value} = digitado.target;
      setDados((valoranterior) => ({...valoranterior, [name] : value}));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!dados.nome.trim()) return;
    onAdd({ ...dados, id: Date.now() });
    setDados({ nome: "", email: "", telefone: "" });
  };


  return (
    <>
      <header>
        <h1 className="">Cadastro de Contatos</h1>
        <BotFiltrar/>
      </header>

      <form onSubmit={handleSubmit}>
        <label>Nome</label>
          {/* inputs que atualizam o objeto dados */}
        <Input UserInput={dados.nome} Name="nome" Placeholder='Nome' onChange={handleChange} />

        <label>Email</label>
        <Input UserInput={dados.email} Name="email" Placeholder='Email' onChange={handleChange} tipo="email"/>

        <label>Celular</label>
        <Input UserInput={dados.celular} Name="celular" Placeholder='Celular' onChange={handleChange} tipo=""/>

        <BotaoAdd nomeBotao='Adicionar' tipo="submit" />
      </form>

      <section>

      </section>
    </>
  );
}
