import { AvatarMedium, AvatarMediumProps } from "./AvatarMedium";
import { Meta, StoryObj } from "@storybook/react";
import imgUser from '../../assets/cooper.png'

export default {
  title: 'Components/Avatar',
  component: AvatarMedium,
  args: {
    img: imgUser
  }
} as Meta<AvatarMediumProps>

export const AvatarProfileMedium: StoryObj<AvatarMediumProps> = {}