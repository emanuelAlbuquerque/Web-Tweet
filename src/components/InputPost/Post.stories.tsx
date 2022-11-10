import { Meta, StoryObj } from '@storybook/react';
import { UserLogadoProps } from '../../Users/Users';
import { Post } from './Post';


export default {
  title: 'Components/Post',
  component: Post,
} 

const usuarioLogado: UserLogadoProps = {
  idUser: 'default',
  logado: true
}

export const Default = () => <Post usuarioLogado={usuarioLogado} />;