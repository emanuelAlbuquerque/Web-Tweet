import { ReactNode } from 'react';
import { clsx } from 'clsx'

export interface NewsProp{
  isDark?: boolean
  children: ReactNode;
  className?: string
}
export function News(props: NewsProp){
  return(
    <div className={clsx('bg-dark-8 h-auto w-full rounded-2xl', {'bg-dark-2':props.isDark}, props.className)}>
      <header className={clsx('font-700 text-20 text-black px-3 py-3 border-b-[1px] border-dark-7', { 'text-white': props.isDark })}>What’s happening</header>
        {props.children}
      <footer className='text-primary-blue text-15 px-3 py-3'><a href="">Show more</a></footer>
    </div>
  )
}