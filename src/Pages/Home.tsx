import { useState } from 'react'
import '../styles/global.css'
import { Publicacoes, Tweet } from '../components/Tweet/Tweet';
import { SlideMenu } from '../components/SlideMenu/SlideMenu';
import { User } from '../components/User/User';
import { SearchBar } from '../components/SearchBar/SearchBar';
import { News } from '../components/News/News';
import { Follows } from '../components/Follows/Follows';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import { IconHeader } from '../components/Header/IconHeader';
import { Post } from '../components/InputPost/Post';
import { CiSearch } from 'react-icons/ci';
import { ItemNews } from '../components/News/ItemNews';
import { ItemFollow } from '../components/Follows/ItemFollow';
import ImgPublicacao1 from '../assets/Container.png'
import imgPublicação2 from '../assets/imgPublicação2.png'
import davon from '../assets/davon.png'
import darlene from '../assets/darlene.png'
import { Login } from '../components/Login/Login';
import { UserLogadoProps } from '../Users/Users';
import imgNoticia1 from '../assets/img-noticia1.png'
import imgNoticia2 from '../assets/img-noticia2.png'
import imgNoticia3 from '../assets/img-noticia-3.png'


export function Home(){

  const getPublicacoesStorage = () => JSON.parse(localStorage.getItem('publicacoes') as string) ?? [];
  const setPublicacoesStorage = (publicacao: Publicacoes[]) => { localStorage.setItem('publicacoes', JSON.stringify(publicacao)) }
  const [publicacoes, setPublicacoes] = useState<Publicacoes[]>(
    [...getPublicacoesStorage(), 

      {
        mensagem: 'Tom is in a big hurry.',
        img: ImgPublicacao1,
        horario: '23s',
        name: 'Devon Lane',
        ahoba: '@devonlane',
        imgUser: davon
      },
      {
        mensagem: 'Tom is in a big hurry.',
        img: imgPublicação2,
        horario: '23s',
        name: 'Darlene Robertson',
        ahoba: '@darlene',
        imgUser: darlene
      },
    ]
  )
  
  

  const addPublicacoes = (mensagem: string, img: string, horario: string, imgUser: string, name: string, ahoba: string) => {
    const newPublicacoes: Publicacoes[] = [...publicacoes,
    {
      mensagem: mensagem,
      img: img,
      horario: horario,
      ahoba: ahoba,
      imgUser: imgUser,
      name: name
    }
  ]
    setPublicacoes(newPublicacoes)
    setPublicacoesStorage(newPublicacoes)
    // Essa função pega a mensagem e a img difitada do usuario e adiciona ela no setPublicacoes
  }

  const [loginOn, setLoginOn] = useState(false)

  
  // const getUsuarioLogadoStorage = () => JSON.parse(localStorage.getItem('usuario') as string) ?? {logado: false, idUser: ''};
  // const setUsuarioLogadoStorage = (usuario: UserLogadoProps) => { localStorage.setItem('usuario', JSON.stringify(usuario)) }
  const [usuarioLogado, setUsuarioLogado] = useState<UserLogadoProps>({
    logado: false,
    idUser: ''
  })


  return(
      <div className='w-full h-screen flex flex-col justify-between bg-white dark:bg-dark-1'>
        <div className='flex w-[90%] my-0 mx-auto justify-center h-[90%]'>

          <div className='w-[20%] h-[100%] flex flex-col justify-between mr-8 pt-4 '>
          <SlideMenu usuarioLogado={usuarioLogado}/>
          {usuarioLogado.logado && <User usuarioLogado={usuarioLogado}/>}
          </div>


      
          {loginOn && <Login onClick={() => {
              //Se o loginOn for verdadeiro irá abrir o modal, se não for não vai acontecer nada, e estou passando um onclick para o login, para poder fechar o modal
              setLoginOn(false)
            }}
              setUsuarioLogado={setUsuarioLogado}
              setLoginOn={setLoginOn}
            />
          }


          <div className='w-[45%] flex flex-col border-x-[1px] border-dark-7' >
            <Header.Root>
              <Header.Title>
                Home
              </Header.Title>
              <Header.Icon>
                <IconHeader />
              </Header.Icon>
            </Header.Root>

            {usuarioLogado.logado && <Post addPublicacoes={addPublicacoes} usuarioLogado={usuarioLogado} /> }
            {usuarioLogado.logado && <div className='w-full h-[10px] bg-dark-8 dark:bg-dark-2'></div>}
            {/* Passa a função de adicionar atividades para o post */}

            <div className='overflow-y-auto scrollbar-thin scrollbar-thumb-dark-6 scrollbar-track-dark-7 pr-4 flex flex-col dark:scrollbar-thumb-dark-4 dark:scrollbar-track-dark-5'>
              <Tweet publicacoes={publicacoes}/>
              {/* Passa o array de objetos para o tweet */}
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
                img={imgNoticia1}
              // isDark={true}
              />
              <ItemNews
                hastag='#hashtag'
                noticia='Title lasdh asldh lsad sladj aslkd laksjdklasj djas lkdjas ldkja slkdj aslkdasl dlkasdlads'
                tema='US news'
                horario='Last night'
              img={imgNoticia2}
              // isDark={true}
              />
              <ItemNews
                hastag='#hashtag'
                noticia='Title lasdh asldh lsad sladj aslkd laksjdklasj djas lkdjas ldkja slkdj aslkdasl dlkasdlads'
                tema='US news'
                horario='Last night'
                img={imgNoticia3}
              // isDark={true}
              />
            </News>
          {usuarioLogado.logado && 
            <Follows>
              <ItemFollow
                name="Emanuel"
                email="@emanuel"
                img={davon}
                isDark={false}
              />
              <ItemFollow
                name="Emanuel"
                email="@emanuel"
                img={darlene}
                isDark={false}
              />
            </Follows>
          }
          
            <p className='font-500 text-dark-5 text-13'>Terms of Service Privacy Policy Cookie Policy
              Ads info More © 2021 Twitter, Inc.</p>
          </div>
        </div>
        
        <Footer onClick={() => {
           setLoginOn(true)
        }} 
        usuarioLogado={usuarioLogado}
        setUsuarioLogado={setUsuarioLogado}
      />
      </div>
    ) 
  }

