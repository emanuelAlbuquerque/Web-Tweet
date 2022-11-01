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

export interface SlideMenuProps{
  isDark?: boolean
}

export function SlideMenu({isDark}:SlideMenuProps){

  let img

  if(isDark)
  {
    img = imgLogoDark
  }
  else
  {
    img = imgLogoLight
  } 

  return(
    <nav>
      <ul className={clsx('text-19 font-700 text-black', {'text-white':isDark})}>
        <li className='mb-4'>
          <Link to='/'>
            <img src={img} alt="Logo do tweet"/>
          </Link>
        </li>
        <li className='mb-4 text-primary-blue hover:text-primary-blue'>
          <Link to='pageNotFound' className='flex items-center'>
            <p className='mr-3'><RiHome7Fill size={25}/></p>
            <p>Home</p>
          </Link>
        </li>
        <li className='mb-4 hover:text-primary-blue'>
          <Link to='pageNotFound' className='flex items-center'>
            <p className='mr-3'><FiHash size={25} /></p>
            <p>Explore</p>
          </Link>
        </li>
        <li className='mb-4 hover:text-primary-blue'>
          <Link to='pageNotFound' className='flex items-center'>
            <p className='mr-3'><IoMdNotificationsOutline size={25} /></p>
            <p>Notifications</p>
          </Link>
        </li>
        <li className='mb-4 hover:text-primary-blue'>
          <Link to='pageNotFound' className='flex items-center'>
            <p className='mr-3'><BiEnvelope size={25} /></p>
            <p>Messages</p>
          </Link>
        </li>
        <li className='mb-4 hover:text-primary-blue'>
          <Link to='pageNotFound' className='flex items-center'>
            <p className='mr-3'><BsBookmark size={25} /></p>
            <p>Bookmarks</p>
          </Link>
        </li>
        <li className='mb-4 hover:text-primary-blue'>
          <Link to='pageNotFound' className='flex items-center'>
            <p className='mr-3'><RiFileList2Line size={25} /></p>
            <p>Lists</p>
          </Link>
        </li>
        <li className='mb-4 hover:text-primary-blue'>
          <Link to='pageNotFound' className='flex items-center'>
            <p className='mr-3'><CgProfile size={25} /></p>
            <p>Profile</p>
          </Link>
        </li>
        <li className='mb-4 hover:text-primary-blue'>
          <Link to='pageNotFound' className='flex items-center'>
            <p className='mr-3'><CiCircleMore size={25} /></p>
            <p>More</p>
          </Link>
        </li>
      </ul>

      <PrimaryButton>
        Tweet
      </PrimaryButton>
    </nav>
  )
}
