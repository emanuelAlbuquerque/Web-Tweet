import '../styles/global.css'
import { useState } from 'react'
import { SlideMenu } from '../components/SlideMenu/SlideMenu';
import { User } from '../components/User/User';
import { SearchBar } from '../components/SearchBar/SearchBar';
import { News } from '../components/News/News';
import { Follows } from '../components/Follows/Follows';
import { Footer } from '../components/Footer/Footer';
import { CiSearch } from 'react-icons/ci';
import { ItemNews } from '../components/News/ItemNews';
import { ItemFollow } from '../components/Follows/ItemFollow';
import ImgPublicacao1 from '../assets/Container.png'
import imgPublicação2 from '../assets/imgPublicação2.png'
import { Login } from '../components/Login/Login';
import { HeaderProfile } from '../components/HeaderProfile/HeaderProfile';
import { BsArrowLeft } from 'react-icons/bs';
import { TabBar } from '../components/TabBar/TabBar';
import { Profile } from '../components/Profile/Profile';
import { UserLogadoProps, Users } from '../Users/Users';

export function ProfilePage() {

  const [loginOn, setLoginOn] = useState(false)
  const [usuarioLogado, setUsuarioLogado] = useState<UserLogadoProps>({
    logado: false,
    idUser: ''
  })
  let nameUser = ''
  let imgUser = ''
  let ahobaUser = ''
  let profissaoUser = ''

  Users.forEach((user) => {
    if(user.id === usuarioLogado.idUser){
      nameUser = user.name
      imgUser = user.img
      ahobaUser = user.ahoba
      profissaoUser = user.profissao
    }
  })

  return (
    <div className='w-full h-screen flex flex-col justify-between bg-white dark:bg-dark-1'>
      <div className='flex w-[90%] my-0 mx-auto justify-center h-[90%]'>

        <div className='w-[20%] h-[100%] flex flex-col justify-between mr-8 pt-4 '>
          <SlideMenu />
       
        </div>



        <div className='w-[45%] flex flex-col border-x-[1px] border-dark-7' >
          <HeaderProfile.Root>
            <HeaderProfile.Icon>
              <BsArrowLeft size={24} />
            </HeaderProfile.Icon >
            <HeaderProfile.Title name={'Name'} tweets={9} />
          </HeaderProfile.Root>
          <Profile name='Emanuel' ahoba='@emanuelAlbuquerque' profissao='Dev FrontEnd' />
          <div className='my-4'>
           <TabBar />
          </div>
        </div>

        <div className='w-[30%] overflow-y-auto ml-16 scrollbar-thin scrollbar-thumb-dark-6 scrollbar-track-dark-7 pr-4 pt-4 dark:scrollbar-thumb-dark-4 dark:scrollbar-track-dark-5'>
          <SearchBar.Root className='mb-4'>
            <SearchBar.Icon>
              <CiSearch size={20} />
            </SearchBar.Icon>
            <SearchBar.Input placeholder='Search Twitter' />
          </SearchBar.Root>
          <News className='mb-4'>
            <ItemNews
              hastag='#hashtag'
              noticia='Title lasdh asldh lsad sladj aslkd laksjdklasj djas lkdjas ldkja slkdj aslkdasl dlkasdlads'
              tema='US news'
              horario='Last night'
            // isDark={true}
            />
            <ItemNews
              hastag='#hashtag'
              noticia='Title lasdh asldh lsad sladj aslkd laksjdklasj djas lkdjas ldkja slkdj aslkdasl dlkasdlads'
              tema='US news'
              horario='Last night'
            // isDark={true}
            />
            <ItemNews
              hastag='#hashtag'
              noticia='Title lasdh asldh lsad sladj aslkd laksjdklasj djas lkdjas ldkja slkdj aslkdasl dlkasdlads'
              tema='US news'
              horario='Last night'
            // isDark={true}
            />
          </News>
          <Follows>
            <ItemFollow
              name="Emanuel"
              email="@emanuel"
              isDark={false}
            />
            <ItemFollow
              name="Emanuel"
              email="@emanuel"
              isDark={false}
            />
          </Follows>
          <p className='font-500 text-dark-5 text-13'>Terms of Service Privacy Policy Cookie Policy
            Ads info More © 2021 Twitter, Inc.</p>
        </div>
      </div>
    </div>
  )
}

