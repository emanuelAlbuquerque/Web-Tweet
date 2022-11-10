import { ReactNode } from 'react';
import { clsx } from 'clsx'
import { AvatarSmall } from '../Avatar/AvatarSmall';
import { TfiMore } from 'react-icons/tfi';
import { UserLogadoProps, Users } from '../../Users/Users';

export interface UserProps{
  usuarioLogado?: UserLogadoProps
  isDark?: boolean
}

export function User({ isDark = false, usuarioLogado }: UserProps){

  let avatarUsuario = ''
  let nameUsuario = ''
  let ahobaUsuario = ''

  Users.forEach((user) => {
    if(user.id === usuarioLogado?.idUser){
      avatarUsuario = user.img
      nameUsuario = user.name
      ahobaUsuario = user.ahoba
      return
    }
  })
  
  return(
    <div className={clsx('flex justify-between items-center max-w-[255px] w-full h-[70] text-black dark:text-white', { 'text-white' : isDark })} >
      <div className='flex items-center'>
        <AvatarSmall img={avatarUsuario}/>
        <div className='flex flex-col ml-3'>
            <p className='font-700'>{nameUsuario}</p>
            <p className={clsx('font-500 text-dark-5', { 'text-dark-6': isDark })}>{ahobaUsuario}</p>
        </div> 
      </div>
      <a href="#"><TfiMore size={25} /></a>
    </div>
  )
}
