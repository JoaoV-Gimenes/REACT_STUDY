import PropTypes from 'prop-types';

export default function User(props){
    const coisas = [{nome: "banana", calorias: 93}, 
                    {nome: "maça", calorias: 56}, 
                    {nome: "abacate", calorias: 73}, 
                    {nome:"cenoura", calorias: 46} ]
    return(
        <>
            <ol>
                {coisas.map(cada => <li key={cada.nome}>{cada.nome}, {cada.calorias} calorias</li>)}
            </ol>
        </>
    )
}