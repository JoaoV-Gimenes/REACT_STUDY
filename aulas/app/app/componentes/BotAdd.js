'use client'

export default function BotaoAdd({Func, nomeBotao}){

    const BotaoAdd = ({ n, nomeBotao }) => <button className="bg-orange-700 py-4 px-2 hover:bg-amber-500 rounded" onClick={n}>{nomeBotao}</button>
    
    return(
        <>
            <BotaoAdd n={Func} nomeBotao={nomeBotao}/>
        </>
    )
}