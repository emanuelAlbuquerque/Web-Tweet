import {Publicacoes, Tweet, TweetProps } from "./Tweet"
import { Meta, StoryObj } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6'
import  imgPublicacao  from '../../assets/Container.png'
import  imgUser  from '../../assets/profile-picture.png'

export default {
  title: 'Components/Tweet',
  component: Tweet,
  decorators: [withRouter],
}

const defaultTweet: Publicacoes[] = [
  { mensagem: 'Arrumando o storybook', img: imgPublicacao, horario: '23s', name: 'Devon Lane', ahoba: '@marcelosalomao', imgUser: imgUser },
];

export const DefaultLight = () => <Tweet publicacoes={defaultTweet}/>;
export const DefaultDark = () => <Tweet publicacoes={defaultTweet} isDark={true}/>;
