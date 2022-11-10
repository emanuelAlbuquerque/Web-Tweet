import { AvatarSmall, AvatarSmallProps } from "./AvatarSmall";
import { Meta, StoryObj } from "@storybook/react";
import imgUser from '../../assets/cooper.png'


export default {
  title: 'Components/Avatar',
  component: AvatarSmall,
  args: {
    img: imgUser
  }
} as Meta<AvatarSmallProps>

export const AvatarProfileSmall: StoryObj<AvatarSmallProps> = {}