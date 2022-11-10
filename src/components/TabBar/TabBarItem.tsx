import { clsx } from 'clsx'
import { ReactNode } from 'react'

interface TabBarItemProps{
  children: ReactNode
}

export function TabBarItem({children}: TabBarItemProps){

  const active = ['text-primary-blue-active',
                  'border-b-2',
                  'border-primary-blue-active']

  return (
    <li className='py-3 px-8 text-16 font-700 hover:text-primary-blue-active hover:border-b-2'>
      <button onClick={(e) => {
        const li = e.currentTarget.parentElement//Pega a li
        const ul = e.currentTarget.parentElement?.parentElement//Pega o pai da li, que é o ul
        const listItem = ul?.querySelectorAll('li')//Pega todas as li dos ul

        listItem?.forEach((li) => (
          //Peccore todas as li do ul, retirando as classes antes de aplicar novamente em uma
          active.forEach((itemClass) => (
            li.classList.remove(itemClass)
          ))
        ))

        active.forEach((itemClass: string) => (
          li?.classList.add(itemClass)
          //Aplica as classes do active na li clicada
        ))
      }}>
        {children}
      </button>
    </li>
  )
}