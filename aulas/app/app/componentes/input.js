'use client';

export default function Input({ Placeholder, UserInput, Name, onChange}){
    return(
        <>
            <input placeholder= {Placeholder}
                value={UserInput}
                name={Name}
                onChange={onChange}
                className='border border-grey-300 rounded px-3 py-2'>
            </input>
        </>
    )
}