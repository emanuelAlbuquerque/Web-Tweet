import { Children, ReactNode, InputHTMLAttributes, useState, Dispatch, SetStateAction, ChangeEvent } from 'react';
import { clsx } from 'clsx'
import { GoFileMedia } from 'react-icons/go';
import { AiOutlineFileGif } from 'react-icons/ai';
import { BiPoll } from 'react-icons/bi';
import { BsEmojiSmile } from 'react-icons/bs';
import { AiOutlineSchedule } from 'react-icons/ai';
import { AvatarMedium } from '../Avatar/AvatarMedium';
import { UserLogadoProps, Users } from '../../Users/Users';

// export interface PostProps extends InputHTMLAttributes<HTMLInputElement> {
//   children?: ReactNode
// }

// export interface SetPublicacoesProps{
//   setPublicacoes: Dispatch<SetStateAction<Publicacoes[] | []>>
// }

export interface addPublicacoesProps{
  addPublicacoes?: (mensagem: string, img: string, horario: string, imgUser: string, name: string, ahoba: string) => void
  //Tipagem da função de adiconar, que vai ser passada pelo componente home
  usuarioLogado: UserLogadoProps
 }

export function Post({ addPublicacoes, usuarioLogado }: addPublicacoesProps){

  const [ value, setValue]  = useState('')//State do input
  const [image, setImage] = useState('')//State da imagem
  const containerImg = document.querySelector('#container_img') as HTMLElement
  let nameUser = ''
  let avatarUser = ''
  let ahobaUser = ''

  Users.forEach((user) => {
    if (user.id === usuarioLogado?.idUser) {
      avatarUser = user.img
      nameUser = user.name
      ahobaUser = user.ahoba
      return
    }
  })
  
  const pegaHoririo = (): string => {
      const date = new Date().toLocaleTimeString()
      return date
  }

  const addPublicacoesClick = () => {
    if(value !== '' || image !== ''){
      if(addPublicacoes){
        addPublicacoes(value, image, pegaHoririo(), avatarUser, nameUser, ahobaUser)
      }
      setValue('')
      setImage('')
      containerImg.innerHTML = ''
    }

    // Esssa função chama a função de adicionar publicacoes quando clicar no botão passando o value do input e a imagem caso o usuario escolha
  }

  const onChangeImages = (e: ChangeEvent) => {
    const inputFile = e.target as HTMLInputElement
      const file = inputFile.files as FileList
      if (file) {
        const reader = new FileReader()
        reader.addEventListener('load', (e) => {
          const readerTarget = e.target
          if (readerTarget) {
            const url = readerTarget.result
            const img: any = document.createElement('img')
            setImage(url as string)
            img.src = url//Pega o enderço de imagem    
            containerImg.innerHTML = ''
            containerImg.appendChild(img)
           }
        })
        reader.readAsDataURL(file[0])
     }
     //Pega a url da imagem e adicona um prévia na tela
  } 

  let imgUser = ''
  Users.forEach((user) => {
    if(user.id === usuarioLogado.idUser){
      imgUser = user.img
    }
  })
  

  return(
    <div className='px-3 py-2 bg-transparent w-full flex'>
      <div className='w-[10%]'>
        <AvatarMedium img={imgUser} />
      </div>
      <div className='w-[90%] mt-2 ml-2'>
        <input
          className="bg-transparent text-20 text-dark-5 font-500 outline-none w-full mb-4 dark:text-dark-6"
          placeholder='What’s happening?' type="text" maxLength={300} value={value} onChange = {text => {setValue(text.target.value)}}
        />
        <span id='container_img'>
          
        </span>
        <div className='flex items-center justify-between mt-2'>
          <ul className='text-primary-blue-active flex w-[180px] justify-between items-end'>
            <li>
              <label htmlFor="inputImagem" className='cursor-pointer'>
                <GoFileMedia size={20} />
                <input type="file" className='hidden' id='inputImagem' accept="image/png,image/jpeg" onChange={
                      (e: ChangeEvent) => { onChangeImages(e)}
                  }
                />
              </label>
            </li>
            <li>
              <AiOutlineFileGif size={20}/>
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
              'text-white bg-primary-blue-disable font-700 rounded-3xl px-6 py-2', 
              {'bg-primary-blue-active':value.length > 0},
              {'bg-primary-blue-active': image.length > 0}
            )
          }
            onClick={ addPublicacoesClick }
            //Chama a fução de adiconar

          >
            Tweet
          </button>
        </div>
      </div>
    </div>
  )
}