'use client';

import {useState} from 'react';
import BotaoAdd from './BotAdd';

{/* Quando apertar o botão adicionar, adicionar dados em uma lista(na tela) e exibí-la na tela, além de resetar os inputs*/}
export default function Lista({UserInput, dados}) {

  const adicionar = () => {dados.map((texto) => <li key={texto}>{texto}</li>)}
  return (
    <>
        <ul>
            <BotaoAdd Func={() => adicionar(UserInput)} nomeBotao='Adicionar'/>
        </ul>
    </>
  );
}
