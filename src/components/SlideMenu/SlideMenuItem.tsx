import { ReactNode } from "react"
import { Link, useNavigate } from "react-router-dom"

interface SlideMenuItemProps{
  title: string
  icon: ReactNode
  className?: string
  rout?: string
}

export function SlideMenuItem({ title, icon, className, rout = 'pageNotFound' }: SlideMenuItemProps){
  const navigate = useNavigate()

  const itemSelected = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const li = e.currentTarget.parentElement//Pega a li
    const ul = e.currentTarget.parentElement?.parentElement//Pega o pai da li, que é o ul
    const listItem = ul?.querySelectorAll('li')//Pega todas as li dos ul

    listItem?.forEach((li) => (
        //Peccore todas as li do ul, retirando as classes antes de aplicar novamente em uma
        li.classList.remove('text-primary-blue-active')
    ))

      li?.classList.add('text-primary-blue-active')
      //Aplica a classe do active na li clicada 

      navigate(rout)
  }


  return(
    <li className={`mb-4 ${className} hover:text-primary-blue-active`}>
      <button onClick={itemSelected} className='flex items-center'>
        <p className='mr-3'>{icon}</p>
        <p>{title}</p>
      </button>
    </li>
  )
}