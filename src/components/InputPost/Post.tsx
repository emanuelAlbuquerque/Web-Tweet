import { Children, ReactNode, InputHTMLAttributes, useState } from 'react';
import { clsx } from 'clsx'
import { GoFileMedia } from 'react-icons/go';
import { AiOutlineFileGif } from 'react-icons/ai';
import { BiPoll } from 'react-icons/bi';
import { BsEmojiSmile } from 'react-icons/bs';
import { AiOutlineSchedule } from 'react-icons/ai';
import { AvatarMedium } from '../Avatar/AvatarMedium';

export interface PostProps extends InputHTMLAttributes<HTMLInputElement> {
  children?: ReactNode
}

export function Post({ children }: PostProps){

  const [ value, setValue] = useState('')


  return(
    <div className='px-3 py-2 bg-transparent w-full flex'>
      <div className='w-[10%]'>
        <AvatarMedium />
      </div>
      <div className='w-[90%] mt-2 ml-2'>
        <input
          className="bg-transparent text-20 text-dark-5 font-500 outline-none w-full mb-4"
          placeholder='What’s happening?' type="text" maxLength={300} value={value} onChange = {text => {setValue(text.target.value)}}/>
        <div className='flex items-center justify-between'>
          <ul className='text-primary-blue flex w-[180px] justify-between'>
            <li>
              <GoFileMedia size={20}/>
            </li>
            <li>
              <AiOutlineFileGif size={20} />
            </li>
            <li>
              <BiPoll size={20} />
            </li>
            <li>
              <BsEmojiSmile size={20} />
            </li>
            <li>
              <AiOutlineSchedule size={20} />
            </li>
          </ul>
          <button className={
            clsx(
              'text-white bg-primary-blue opacity-50 font-700 rounded-3xl px-6 py-2', 
              {'opacity-100':value.length > 0}
            )
          }
          >
            Tweet
          </button>
        </div>
      </div>
    </div>
  )
}