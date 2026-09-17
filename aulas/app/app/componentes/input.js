'use client';

export default function Input({ UserInput, nomeObj, onChange }){
    
    return(
        <>
            <input placeholder="Nome"
                value={UserInput}
                onChange={digitado => onChange(nomeObj, digitado.target.value)}
                className='border border-grey-300 rounded px-3 py-2'>
            </input>
        </>
    )
}