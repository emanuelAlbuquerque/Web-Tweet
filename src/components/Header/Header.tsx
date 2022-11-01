import { ReactNode } from 'react';
import { clsx } from 'clsx'
import { Link } from 'react-router-dom';



export interface HeaderRootProps{
  children: ReactNode
  isDark?: boolean
  className?: string
}
function HeaderRoot({ isDark = false, children, className }: HeaderRootProps){
  return(
    <header className={clsx("w-full flex justify-between items-cente px-3 pb-2 font-700 text-19 text-black border-b-[1px] border-dark-7", 
                      {
                        "border-white": isDark,
                        "text-white": isDark,
                      },
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
  link: string
}
function HeaderIcon(props: HeaderIconProps){
  return(
    <Link to={props.link}>
      {props.children}
    </Link>
  )
}

export const Header = {
  Root: HeaderRoot,
  Title: HeaderTitle,
  Icon: HeaderIcon
}

