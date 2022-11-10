import userCooper from '../assets/cooper.png'
import userJenny from '../assets/jenny.png'
import imgUser from '../assets/profile-picture.png'

import { v4 as uuidv4 } from 'uuid';

export interface UserLogadoProps {
  logado: boolean
  idUser: string
}

export interface UsersProps{
  id: string
  name: string
  email: string
  telefone: string
  senha: string
  img: string
  ahoba: string
  profissao: string
}

export const Users: UsersProps[] = [
  {
    //Esse user é utilizado apenas no storybook
    id: 'default',
    name: 'Jerome Bell',
    ahoba: '@afonsoinocente',
    email: 'jeromeBell@gmail.com',
    senha: '123456789',
    telefone: '00000-0000',
    img: imgUser,
    profissao: 'Dev FrontEnd'
  }, 
  {
    id: uuidv4(),
    name: 'Admin',
    ahoba: '@admin',
    email: 'admin@gmail.com',
    senha: 'admin',
    telefone: '00000-0000',
    img: userCooper,
    profissao: 'Dev FrontEnd'
  }, 
  {
    id: uuidv4(),
    name: 'Emanuel',
    ahoba: '@emanuelAlbuquerque',
    email: 'emanuelalbuquerque16@gmail.com',
    senha: '12345',
    telefone: '979148606',
    img: userJenny,
    profissao: 'Dev FrontEnd'
  }
]