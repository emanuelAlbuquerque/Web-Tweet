import { ItemNews, ItemNewsProps } from "./ItemNews";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: 'Components/ItemNews',
  component: ItemNews,
  args: {
    isDark: false,
    // ConteudoNoticia: {
      noticia: 'Title lasdh asldh lsad sladj aslkd laksjdklasj djas lkdjas ldkja slkdj aslkdasl dlkasdlads',
      hastag: '#hashtag',
      horario: 'Last night',
      tema: 'US news'
    // }
  }
} as Meta<ItemNewsProps>

export const ItemNewsLight: StoryObj<ItemNewsProps> = {}
export const ItemNewsDark: StoryObj<ItemNewsProps> = {
  args:{
    isDark: true
  }
}
