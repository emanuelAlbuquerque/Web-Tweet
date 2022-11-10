import { InputHTMLAttributes, ReactNode } from 'react';
import { clsx } from 'clsx'



export interface SearchBarRootProps{
  children?: ReactNode;
  isDark?: boolean;
  className?: string;
}
function SearchBarRoot({children, isDark, className}: SearchBarRootProps){
  return(
        <div className={clsx(
            'bg-dark-7 outline-none w-full text-dark-5 py-3 px-6 rounded-3xl flex items-center gap-3 dark:bg-dark-3 dark:text-dark-6',
            {
              'bg-dark-3': isDark,
              'text-dark-6': isDark
            },
          className
          )}
        >
         {children}
        </div>
  )
}


export interface SearchBarInputProps extends InputHTMLAttributes<HTMLInputElement>{}
function SearchBarInput(props: SearchBarInputProps) {
  return (
    <input
      className= "bg-transparent flex-1 text-16 font-500 outline-none"
      {...props}
    />
  )
}

export interface SearchBarIconProps {
  children: ReactNode;
}
function SearchBarIcon({children}: SearchBarIconProps) {
  return (
    <>
      {children}
    </>
  )
}

export const SearchBar = {
  Root: SearchBarRoot,
  Input: SearchBarInput,
  Icon: SearchBarIcon
}