'use client';

import {useEffect, useState} from 'react';
import BotaoAdd from './BotAdd';

{/* Quando apertar o botão adicionar, adicionar dados em uma lista(na tela) e exibí-la na tela, além de resetar os inputs*/}
export default function Lista({ dados, onRemove }) {
  return (
    <>
      <ul>
          <li>
            <div>
              <h3>{dados.nome}</h3>
              <p>{dados.email} - {dados.celular}</p>
            </div>
          </li>
      </ul>
      <button onClick={() => onRemove(dados.id)}>Excluir</button>
    </>
  );
}
