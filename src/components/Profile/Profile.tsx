import { ReactNode } from 'react';
import { clsx } from 'clsx'
import { AvatarSmall } from '../Avatar/AvatarSmall';
import { TfiMore } from 'react-icons/tfi';


export interface ProfileProps{
  Name?: string
  Email?: String
  icon?: ReactNode
  isdark?: boolean
}

export function Profile({ Name, Email, icon = <TfiMore size={25}/>, isdark = false}: ProfileProps){
  return(
    <div className={clsx('flex justify-between items-center max-w-[255px] w-full h-[70] text-black', { 'text-white' : isdark })} >
      <div className='flex items-center'>
        <AvatarSmall />
        <div className='flex flex-col ml-3'>
            <p className='font-700'>{Name}</p>
          <p className={clsx('font-500 text-dark-5', {'text-dark-6' : isdark})}>{Email}</p>
        </div> 
      </div>
      <a href="#">{icon}</a>
    </div>
  )
}
