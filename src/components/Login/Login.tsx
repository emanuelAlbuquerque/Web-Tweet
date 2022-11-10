import { Input } from "../Inputs/Input";
import { PrimaryButton } from "../PrimaryButtons/PrimaryButton";
import imgLogoLight from '../../assets/tweet-logo-light.svg'
import { Link, useNavigate } from "react-router-dom";
import { ChangeEvent, FormEvent, useState } from "react";
import { UserLogadoProps, Users } from '../../Users/Users'

interface LoginProps{
  onClick: () => void
  setUsuarioLogado: React.Dispatch<React.SetStateAction<{logado: boolean; idUser: string; }>>
  setLoginOn: React.Dispatch<React.SetStateAction<boolean>>
}

export function Login({ onClick, setUsuarioLogado, setLoginOn }: LoginProps){

  const navigate = useNavigate();

  const [password, setPassword] = useState('')
  const [login, setLogin] = useState('')

  const onChangeLogin = (text: ChangeEvent<HTMLInputElement>) => {
    setLogin(text.target.value)
  }

  const onChangePassword = (text: ChangeEvent<HTMLInputElement>) => {
    setPassword(text.target.value)
  }

  const verificaUsuario = (e: FormEvent) => {
    e.preventDefault()

    Users.forEach((user) => {
      if(user.senha === password && (user.email === login || user.telefone === login)){
        setUsuarioLogado({logado: true, idUser: user.id})
        setLoginOn(false)
        return
      }else{
        setPassword('')
        setLogin('')
        const incorreto = document.querySelector('#loginIncorreto') as HTMLElement
        incorreto.innerHTML = 'Usuario ou senha incorretos!'
      }
    })
    
    // navigate("pageNotFound");
  }

  return(
    <dialog className="h-screen w-full fixed flex justify-center bg-bg-opacity pt-8">
      <div className="w-full max-w-[450px] bg-white h-full max-h-[500px] rounded-3xl">
        <form action="" onSubmit={verificaUsuario} className="w-[90%] mx-auto my-0">
          <div className="flex justify-between items-center">
            <div className="w-[50px] h-[40px] my-4">
              <img src={imgLogoLight} alt="" className="w-full"/>
            </div>
            <div>
              <button className="text-primary-blue-active text-34" onClick={onClick}>
                X
              </button>
            </div>
          </div>
          <h1 className="text-42 font-700 text-black"> Log in to Twitter</h1>
          <div className="my-4">
            <Input type="text" placeholder="Phone number, email address" value={login} onChange={onChangeLogin}/>
          </div>
          <div className="my-4">
            <Input type="password" placeholder="Password" value={password} onChange={onChangePassword}/>
          </div>
          <div id="loginIncorreto" className="text-center text-red font-700 font-19 my-4"></div>
          <PrimaryButton height="50" type="submit">
            Log In
          </PrimaryButton>
          <div className="my-8 w-full flex justify-between text-primary-blue-active">
            <Link to={'pageNotFound'}>
              Forgot password?
            </Link>
            <a href="">Sign up to Twitter</a>  
          </div>
        </form>
      </div>
    </dialog>

  )
}