import { News, NewsProp } from "./News";
import { Meta, StoryObj } from "@storybook/react";
import { ItemNews } from "./ItemNews";
import imgNoticia1 from '../../assets/img-noticia1.png'

export default {
  title: 'Components/News',
  component: News,
  args: {
    titulo: 'What’s happening'
  }
} as Meta<NewsProp>

export const NewsLight: StoryObj<NewsProp> = {
  args:{
    isDark: false,
    children: [
      <ItemNews
        hastag='#hashtag'
        noticia='Title lasdh asldh lsad sladj aslkd laksjdklasj djas lkdjas ldkja slkdj aslkdasl dlkasdlads'
        tema='US news'
        horario='Last night'
        isDark={false}
        img={imgNoticia1}
      />,
      <ItemNews
        hastag='#hashtag'
        noticia='Title lasdh asldh lsad sladj aslkd laksjdklasj djas lkdjas ldkja slkdj aslkdasl dlkasdlads'
        tema='US news'
        horario='Last night'
        isDark={false}
        img={imgNoticia1}
      />,
      <ItemNews
        hastag='#hashtag'
        noticia='Title lasdh asldh lsad sladj aslkd laksjdklasj djas lkdjas ldkja slkdj aslkdasl dlkasdlads'
        tema='US news'
        horario='Last night'
        isDark={false}
        img={imgNoticia1}
      />,
    ]
  }
}
export const NewsDark: StoryObj<NewsProp> = {
  args: {
    isDark: true,
    children: [
      <ItemNews
        hastag='#hashtag'
        noticia='Title lasdh asldh lsad sladj aslkd laksjdklasj djas lkdjas ldkja slkdj aslkdasl dlkasdlads'
        tema='US news'
        horario='Last night'
        isDark={true}
        img={imgNoticia1}
      />,
      <ItemNews
        hastag='#hashtag'
        noticia='Title lasdh asldh lsad sladj aslkd laksjdklasj djas lkdjas ldkja slkdj aslkdasl dlkasdlads'
        tema='US news'
        horario='Last night'
        isDark={true}
        img={imgNoticia1}
      />,
      <ItemNews
        hastag='#hashtag'
        noticia='Title lasdh asldh lsad sladj aslkd laksjdklasj djas lkdjas ldkja slkdj aslkdasl dlkasdlads'
        tema='US news'
        horario='Last night'
        isDark={true}
        img={imgNoticia1}
      />,
    ]
  }
}
