import { ReactNode } from 'react';
import { clsx } from 'clsx'

export interface ItemNewsProps{
  isDark?: boolean
  // ConteudoNoticia: {
    horario?: string
    tema?: string
    noticia?: string
    hastag?: string
  // }
  className?:string;
}
export function ItemNews(props: ItemNewsProps){
  return(
    <div className='bg-transparent flex justify-between w-full px-3 py-3 border-b-[1px] border-dark-7'>
      <div className='w-full'>
        <p className='text-dark-5 text-14'>{props.tema} - {props.horario}</p>
        <h3 className={clsx('text-black font-700 font-15', {'text-white': props.isDark})}>{props.noticia}</h3>
        <p className='text-dark-5 text-14'>Trending with <span className='text-primary-blue'>{props.hastag}</span></p>
      </div>
      <div className='ml-2 w-[70px] h-[70px] bg-bg-img rounded-lg'>
    </div>
    </div>
  )
}
