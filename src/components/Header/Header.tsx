import { ReactNode } from 'react';
import { clsx } from 'clsx'
import { Link } from 'react-router-dom';
import { useTheme } from '../../hooks/useTheme';



export interface HeaderRootProps{
  children: ReactNode
  isDark?: boolean
  className?: string
}
function HeaderRoot({ isDark = false, children, className }: HeaderRootProps){
  return(
    <header className={clsx("w-full flex justify-between items-cente px-3 py-2 font-700 text-19 text-black border-b-[1px] border-dark-7             dark:text-white", 
                      {"text-white": isDark},
                      className
                       )}>
      {children}
    </header>
  )
}


interface HeaderTitleProps{
  children: String
}
function HeaderTitle(props: HeaderTitleProps){
  return(
    <>
      {props.children}
    </>
  )
}

interface HeaderIconProps{
  children: ReactNode
}
function HeaderIcon(props: HeaderIconProps){

  const {theme, setTheme} = useTheme()

  return(
    
    <button onClick={(e) => {
      if(theme === 'light'){
        setTheme('dark')
      }
      if(theme === 'dark'){
        setTheme('light')
      }
    }}>
      {props.children}
    </button>
  )
}

export const Header = {
  Root: HeaderRoot,
  Title: HeaderTitle,
  Icon: HeaderIcon
}

