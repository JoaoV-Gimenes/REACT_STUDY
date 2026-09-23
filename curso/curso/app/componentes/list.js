function Lista({dados, onRemove}){
    return(
        <ul>
            {dados.length > 0 && dados.map(cada => <li key={cada.nome}>
                                                    <div>
                                                        <p>{cada.nome}</p>
                                                        <p>{cada.caloria} calorias</p>
                                                    </div>
                                                    <button onClick={() => onRemove(dados.nome)}>Excluir</button>
                                                    </li>)}
        </ul>
    )
}
export default Lista