import { clsx } from 'clsx'
import React from 'react'
import { ReactNode } from 'react'
import imgLogoLight from '../../assets/tweet-logo-light.svg'
import imgLogoDark from '../../assets/tweet-logo-dark.svg'
import { RiHome7Fill } from 'react-icons/ri';
import { FiHash } from 'react-icons/fi';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { BiEnvelope } from 'react-icons/bi';
import { BsBookmark } from 'react-icons/bs';
import { RiFileList2Line } from 'react-icons/ri';
import { CgProfile } from 'react-icons/cg';
import { CiCircleMore } from 'react-icons/ci';
import { PrimaryButton } from '../PrimaryButtons/PrimaryButton';
import { Link } from 'react-router-dom'
import { useTheme } from '../../hooks/useTheme'
import { SlideMenuItem } from './SlideMenuItem'
import { UserLogadoProps } from '../../Users/Users'


export interface SlideMenuProps{
  isDark?: boolean
  usuarioLogado?: UserLogadoProps
}

export function SlideMenu({isDark, usuarioLogado}:SlideMenuProps){

  const { theme, setTheme } = useTheme()


  return(
    <nav>
      <ul className={clsx('text-19 font-700 text-black dark:text-white', {'text-white':isDark})}>
        <li className='mb-4'>
          <Link to='/'>
            {theme === "dark" || isDark ? <img src={imgLogoDark} alt="Logo do tweet" /> : <img src={imgLogoLight} alt="Logo do tweet" />}
          </Link>
        </li>
        <SlideMenuItem title='Home' icon={<RiHome7Fill size={25} />} className='text-primary-blue-active' rout='/'/>
        <SlideMenuItem title='Explore' icon={<FiHash size={25} />}/>
        <SlideMenuItem title='Notifications' icon={<IoMdNotificationsOutline size={25} />}/>
        <SlideMenuItem title='Messages' icon={<BiEnvelope size={25} />}/>
        <SlideMenuItem title='Bookmarks' icon={<BsBookmark size={25} />}/>
        <SlideMenuItem title='Lists' icon={<RiFileList2Line size={25} />}/>
        {usuarioLogado?.logado 
          ? <SlideMenuItem title='Profile' icon={<CgProfile size={25} />} rout='ProfilePage' /> 
          : <SlideMenuItem title='Profile' icon={<CgProfile size={25} />}/>
        }
        <SlideMenuItem title='More' icon={<CiCircleMore size={25} />}/>
      </ul>

      <PrimaryButton>
        Tweet
      </PrimaryButton>
    </nav>
  )
}
