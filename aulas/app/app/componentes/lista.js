'use client';

import {useState} from 'react';
import BotaoAdd from './BotAdd';

export default function Lista({UserInput, dados}) {
    const adicionar = (valor) => setTrecos(valorAntigo => [...valorAntigo, valor])
  return (
    <>
        <BotaoAdd Func={() => adicionar(UserInput)}/>
        <ul>
            {dados.map((texto) => <li key={texto}>{texto}</li>)}
        </ul>
    </>
  );
}
