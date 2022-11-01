import { clsx } from 'clsx'
import { ReactNode } from 'react';

export interface FollowsProps {
  children: ReactNode;
  isDark?: boolean
}
export function Follows(props: FollowsProps) {
  return (
    <div className={clsx('bg-dark-8 h-auto w-full max-w-[350px] rounded-2xl', { 'bg-dark-2': props.isDark })}>
      <header className={clsx('font-700 text-20 text-black px-3 py-3 border-b-[1px] border-dark-7', { 'text-white': props.isDark })}>Who to follow</header>
      {props.children}
      <footer className='text-primary-blue text-15 px-3 py-3'><a href="">Show more</a></footer>
    </div>
  )
}