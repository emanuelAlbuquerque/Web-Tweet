import { ReactNode } from 'react';
import { clsx } from 'clsx'
import { SecondaryButtonSmall } from '../SecondaryButtons/SecondaryButtonSmall';
import { AvatarMedium } from '../Avatar/AvatarMedium';


export interface ItemFollowProps {
  isDark?: boolean
  className?: string;
  name?: string
  email?: string
}
export function ItemFollow({ name, email, isDark = false}: ItemFollowProps) {
  return (
    <div className={clsx('flex justify-between items-center w-full max-w-[350px] text-black px-3 py-3 border-b-[1px] border-dark-7', { 'text-white': isDark })} >
      <div className='flex items-center'>
        <AvatarMedium />
        <div className='flex flex-col ml-3'>
          <p className='font-700'>{name}</p>
          <p className={clsx('font-500 text-dark-5', { 'text-dark-6': isDark })}>{email}</p>
        </div>
      </div>
      <div className="w-[80px]">
        <SecondaryButtonSmall>
           Follow
        </SecondaryButtonSmall>
      </div>
    </div>
  )
}

