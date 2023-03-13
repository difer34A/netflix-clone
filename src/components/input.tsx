import React from 'react'

interface inputProps {
    id :string;
    onChange : any;
    value : string;
    label : string;
    type? : string;
}

const Input: React.FC<inputProps> = ({id, onChange, value, label, type}) => {
  return (
    <div className='relative'>
        <input type={type} placeholder=" " id={id} value={value} onChange={onChange} required
        className='block rounded-md px-6 pt-6 pb-1 w-full text-md text-white bg-neutral-700 appearance-none focus:outline-none focus:ring-0 peer cursor-type auth_input'/>
        <label htmlFor={id} id="login_lable"
            className='absolute text-md text-zinc-400 duration-150 transform -transalte-y-3 scale-75 top-4 z-10 origin-[0] left-6 auth_label'
        >{label}</label>
    </div>
  )
}

export default Input
