import Lista from "./lista";

export default function ListaPage({ items, onRemove}){
    return(
        <section>
            <h2>Contatos {items.length}</h2>
            <div>
                <ul>
                    {(items.length) === 0 ? (<li className="">Nenhum contato encontrado</li>) : 
                    (items.map((c) => (<Lista key={c.id} dados={c} onRemove={onRemove}/>)))}
                </ul>
            </div>
        </section>
    )
}