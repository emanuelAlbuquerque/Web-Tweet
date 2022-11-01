import { News, NewsProp } from "./News";
import { Meta, StoryObj } from "@storybook/react";
import { ItemNews } from "./ItemNews";

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
      />,
      <ItemNews
        hastag='#hashtag'
        noticia='Title lasdh asldh lsad sladj aslkd laksjdklasj djas lkdjas ldkja slkdj aslkdasl dlkasdlads'
        tema='US news'
        horario='Last night'
        isDark={false}
      />,
      <ItemNews
        hastag='#hashtag'
        noticia='Title lasdh asldh lsad sladj aslkd laksjdklasj djas lkdjas ldkja slkdj aslkdasl dlkasdlads'
        tema='US news'
        horario='Last night'
        isDark={false}
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
      />,
      <ItemNews
        hastag='#hashtag'
        noticia='Title lasdh asldh lsad sladj aslkd laksjdklasj djas lkdjas ldkja slkdj aslkdasl dlkasdlads'
        tema='US news'
        horario='Last night'
        isDark={true}
      />,
      <ItemNews
        hastag='#hashtag'
        noticia='Title lasdh asldh lsad sladj aslkd laksjdklasj djas lkdjas ldkja slkdj aslkdasl dlkasdlads'
        tema='US news'
        horario='Last night'
        isDark={true}
      />,
    ]
  }
}
