'use client'

export default function BotaoAdd({Func}){

    const BotaoAdd = ({ n }) => <button className="bg-orange-700 py-4 px-2 hover:bg-amber-500 rounded" onClick={n}>adicionar</button>
    
    return(
        <>
            <BotaoAdd n={Func} />
        </>
    )
}