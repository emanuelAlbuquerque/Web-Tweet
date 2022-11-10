import { ReactNode } from 'react';
import { clsx } from 'clsx'
import { useTheme } from '../../hooks/useTheme';
import { BsArrowLeft } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export interface HeaderProfileRootProps {
  children: ReactNode
  isDark?: boolean
  className?: string
}
function HeaderProfileRoot({ isDark = false, children, className }: HeaderProfileRootProps) {
  return (
    <header className={clsx("w-full flex items-center px-3 py-2 font-700 text-19 border-b-[1px] border-dark-7 dark:border-black",
      { "border-black": isDark },
      className
    )}>
      {children}
    </header>
  )
}


interface HeaderProfileTitleProps {
  name: String
  tweets: number
  isDark?: boolean
}
function HeaderProfileTitle(props: HeaderProfileTitleProps) {
  return (
    <div className='ml-8'>
      <p className={clsx("text-19 text-black dark:text-white", {'text-white':props.isDark})}>{props.name}</p>
      <p className={clsx('text-13 text-dark-5 font-500 dark:text-dark-6', {'text-dark-6': props.isDark})}>{props.tweets} tweets</p>
    </div>
  )
}

interface HeaderProfileIconProps {
  children: ReactNode
}
function HeaderPropsIcon(props: HeaderProfileIconProps) {

  return (

    <Link to='/' className="text-primary-blue-active">
      {props.children}
    </Link>
  )
}

export const HeaderProfile = {
  Root: HeaderProfileRoot,
  Title: HeaderProfileTitle,
  Icon: HeaderPropsIcon
}

