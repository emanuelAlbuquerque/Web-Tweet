import { clsx } from 'clsx'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { BsCalendar3 } from 'react-icons/bs'
import imgProfile  from '../../assets/profile-picture.png'


export interface ProfileProps{
  name: string
  ahoba: string
  profissao: string
  isDark?: boolean
}

export function Profile(props: ProfileProps){
  return(
    <div className="h-[400px] relative">
      <div className='h-[50%] bg-profile bg-no-repeat bg-cover bg-center relative'></div>

      <img src={imgProfile} alt="" className='top-21 bottom-40 absolute rounded-full border-4 border-black ml-4'/>
     
      <div className='h-[50%] mt-2 px-4 bg-transparent'>
        <div className='w-full flex justify-end'>
          <button className='py-2 px-4 text-primary-blue-active border-primary-blue-active border-[1px] rounded-3xl font-700'>
            Edit Profile
          </button>
        </div>
        <div className={clsx(
          'text-16 text-dark-5 dark:text-dark-6', 
          {'text-dark-6': props.isDark}
        )}>
          <h2 className={clsx(
              'text-21 text-black font-700 dark:text-white', 
              {'text-white':props.isDark}
            )}>
            {props.name}
          </h2>
          <p>{props.ahoba}</p>
          <p className={clsx(
              'text-black font-500 py-2 dark:text-white', 
              {'text-white':props.isDark}
            )}>
            {props.profissao}
          </p>
          <div className='flex items-center gap-4'>
              <p className='flex items-center'>
                <span className='mr-2'><HiOutlineLocationMarker /></span>
                <span>London</span>
              </p>
              <p className='flex items-center'>
                <span className='mr-2'><BsCalendar3 /></span>
                <span>Joined September 2022</span> 
              </p>
            </div>
            <div className='flex gap-4 py-2'>
              <p><span className={clsx(
                'text-16 text-black font-700 mr-1 dark:text-white', 
                {'text-white':props.isDark}
              )}>569</span>Following</p>
              <p><span className={clsx(
                'text-16 text-black font-700 mr-1 dark:text-white',
                { 'text-white': props.isDark }
              )}>72</span>Followers</p>
            </div>
        </div>
      </div>
    </div>
  )
}