'use client';

import Lista from './componentes/lista';
import Input from './componentes/input';
import BotFiltrar from './componentes/botFiltrar';
import {useState} from 'react';

export default function Home() {
  const [Contatos, setContatos] = useState([])
  const [dados, setDados] = useState({ nome: "", email: "", celular: "" })

  const handleChange = (digitado) =>{
      const {name, value} = digitado.target;
      setDados((valoranterior) => ({...valoranterior, [name] : value}));
  }

  return (
    <>
      <header>
        <h1 className="">Cadastro de Contatos</h1>
        <BotFiltrar/>
      </header>

      <form>
        <label>Nome</label>
          {/* inputs que atualizam o objeto dados */}
        <Input UserInput={dados.nome} Name="nome" Placeholder='Nome' onChange={handleChange}/>

        <label>Email</label>
        <Input 
          UserInput={email} 
          nomeObj="email" 
          aoMudar={() => atualizaDados('email', email)} 
          Placeholder='email'/>

        <label>Celular</label>
        <Input 
          UserInput={celular} 
          nomeObj="celular" 
          aoMudar={() => atualizaDados('celular', celular)} 
          Placeholder='celular' />

      </form>
      {/* Quando apertar o botão adicionar, adicionar dados em uma lista(na tela) e exibí-la na tela, além de resetar os inputs*/}
      <Lista dados={dados} />
    </>
  );
}
