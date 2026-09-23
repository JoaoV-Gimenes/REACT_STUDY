'use client';

export default function Input({ Placeholder, UserInput, Name, onChange, tipo}){
    return(
        <>
            <input placeholder= {Placeholder}
                value={UserInput}
                name={Name}
                type={tipo}
                onChange={onChange}
                className='border border-grey-300 rounded px-3 py-2'>
            </input>
        </>
    )
}