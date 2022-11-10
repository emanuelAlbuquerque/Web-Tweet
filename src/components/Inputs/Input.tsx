import { ChangeEvent } from "react"


export interface InputProps{
  type: string
  placeholder: string
  onChange?: (text: ChangeEvent<HTMLInputElement>) => void | undefined
  value?: string
}

export function Input({ type, placeholder, onChange, value }: InputProps){
  return(
    <>
      <input 
          type={type} 
          onChange={onChange}
          value={value}
          placeholder={placeholder} 
          required
          className="w-full py-4 px-4 text-dark-6 border-[1px] border-dark-7 outline-none text-18 rounded-lg"
      />
    </>
  )
}