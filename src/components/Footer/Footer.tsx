import clsx from "clsx"
import { Link } from "react-router-dom"
import { UserLogadoProps } from "../../Users/Users"

export interface FooterProps{
  classe?: string
  isDark?: boolean
  loginOn?: boolean
  onClick?: () => void
  usuarioLogado: UserLogadoProps
  setUsuarioLogado?: React.Dispatch<React.SetStateAction<UserLogadoProps>>
}

export function Footer(props: FooterProps){
  return(
    <footer className={clsx("bg-primary-blue-active px-4 py-1 w-full flex justify-between items-center dark:bg-dark-3", props.classe, {'bg-dark-3':props.isDark})}>
      {props.classe}
      <div className="text-white ml-36">
        <h2 className="text-22 font-700">Don't miss what's happening</h2>
        <p className="text-16">People on Twitter are the first to know</p>
      </div>
      <div className="font-700">
        {!props.usuarioLogado.logado && 
          <button className="bg-transparent text-white py-2 px-4 border-[1px] border-white rounded-3xl mr-3" onClick={props.onClick}>
            Log in
          </button>
        }
        {!props.usuarioLogado.logado && 
          <Link to='pageNotFound' className="bg-white text-black py-2 px-4 rounded-3xl">Sing up</Link>
        }
        {props.usuarioLogado.logado && 
          <button className="bg-transparent text-white py-2 px-4 border-[1px] border-white rounded-3xl mr-3" onClick={() => {
            if (props.setUsuarioLogado){
              props.setUsuarioLogado({logado: false, idUser: ''})
            }
          }}>
            Sair
          </button>
        }
      </div>
    </footer>
  )
}