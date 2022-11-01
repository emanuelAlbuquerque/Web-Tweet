import { ReactNode, useState } from "react"
import { FaRegComment } from 'react-icons/fa';
import { AiOutlineRetweet } from 'react-icons/ai';
import { AiFillHeart } from 'react-icons/ai';
import { FiShare } from 'react-icons/fi';
import { AvatarMedium } from "../Avatar/AvatarMedium";
import  imgTweet  from '../../assets/Container.png'
import clsx from "clsx";
import { Link } from "react-router-dom";

export interface TweetProps{
  avatar?: ReactNode
  name: string
  ahoba: string
  mensagem: string
  imagem?: string
  isDark?: boolean
}

export function Tweet(props: TweetProps){

  const data = new Date()

  return(
    <div className="px-3 py-2 bg-transparent flex w-full">
      <div className="rounded-full">
        <AvatarMedium />
      </div>

      <div className="ml-3">
        <p className="text-15 text-dark-5">
          <span className={clsx("text-black font-700", {'text-white':props.isDark})}>{props.name} </span> 
          <span>{props.ahoba} </span> 
          - <span>{`${String(data.getHours()).padStart(2, '0')}:${String(data.getMinutes()).padStart(2, '0')}`}</span>
        </p>

        <p className={clsx("text-15 text-black", {'text-white': props.isDark})}>{props.mensagem}</p>

        <div className="my-3">
          {/* <img src={props.imagem} alt="" /> */}
          <img src={imgTweet} alt="" />
        </div>

        <ul className="flex text-dark-5 text-13 mb-2">
          <li className="w-full max-w-[127px]">
            <button className="flex items-center">
              <FaRegComment className="mr-2" size={18}/>
              <p>61</p>
            </button>
          </li>
          <li className="w-full max-w-[127px]">
            <button className="flex items-center">
              <AiOutlineRetweet className="mr-2" size={18} />
              <p>12</p>
            </button>
          </li>
          <li className="w-full max-w-[127px] text-bg-like">
            <button className="flex items-center">
              <AiFillHeart className="mr-2" size={18} />
              <p>6.2k</p>
            </button>
          </li>
          <li className="w-full max-w-[127px]">
            <button className="flex items-center">
              <FiShare className="mr-2" size={18} />
              <p>61</p>
            </button>
          </li>
        </ul>
        <Link to='pageNotFound' className="text-primary-blue text-13 my-4">Show this thread</Link>
      </div>
    </div>
  )
}