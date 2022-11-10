import { useState } from "react"
import { FaRegComment } from 'react-icons/fa';
import { AiOutlineRetweet } from 'react-icons/ai';
import { HiHeart } from 'react-icons/hi';
import { FiShare } from 'react-icons/fi';
import { AvatarMedium } from "../Avatar/AvatarMedium";
import clsx from "clsx";
import { Link } from "react-router-dom";

export interface Publicacoes{
  mensagem: string
  img: string
  name: string
  ahoba: string
  imgUser: string
  horario: string
}

export interface TweetProps{
  publicacoes: Publicacoes[]
  isDark?: boolean
}

export function Tweet({ publicacoes, isDark }: TweetProps){

  const [curtidas, setCurtidas] = useState(0)

  return(
    <>
    {/* Recebe as publicações e faz um map para criar uma nova publicação para cada item */}
    {publicacoes.map((item, key) => (
      <div className="px-3 py-2 bg-transparent flex w-full border-b-[1px] border-dark-7" key={key} >
        <div className="rounded-full w-[10%]">
          <AvatarMedium img={item.imgUser}/>
        </div>

        <div className="ml-3 w-[90%]">
          <div>
            <p className="text-15 text-dark-5 dark:text-dark-6">
              <span className={clsx("text-black font-700 dark:text-white", { 'text-white': isDark })}>{item.name} </span>
              <span>{item.ahoba} </span>
              - <span>{item.horario}</span>
            </p>

            <p className={clsx("text-15 text-black dark:text-white", { 'text-white': isDark })}>{item.mensagem}</p>

            <div className="my-3 w-full">
              <img src={item.img} alt="" className="w-full"/>
            </div>

          </div>

          <ul className="flex text-dark-5 text-13 mb-2 dark:text-dark-6">
            <li className="w-full max-w-[127px]">
              <button className="flex items-center">
                <FaRegComment className="mr-2" size={18} />
                <p>61</p>
              </button>
            </li>
            <li className="w-full max-w-[127px]">
              <button className="flex items-center">
                <AiOutlineRetweet className="mr-2" size={18} />
                <p>12</p>
              </button>
            </li>
            <li className="w-full max-w-[127px]">
              <button className="flex items-center" onClick={(e) => {
                if(curtidas <= 0){
                  setCurtidas(curtidas + 1)
                  e.currentTarget.parentElement?.classList.add('text-bg-like')
                }else{
                  setCurtidas(curtidas - 1)
                  e.currentTarget.parentElement?.classList.remove('text-bg-like')
                }    
              }}>
                <HiHeart className="mr-2" size={18} id="curtido"/>
                <p>{curtidas}</p>
              </button>
            </li>
            <li className="w-full max-w-[127px]">
              <button className="flex items-center">
                <FiShare className="mr-2" size={18} />
                <p>61</p>
              </button>
            </li>
          </ul>
          <Link to='pageNotFound' className="text-primary-blue-active text-13 my-4">Show this thread</Link>
        </div>
      </div>
    ))}
    </>
  )
}
