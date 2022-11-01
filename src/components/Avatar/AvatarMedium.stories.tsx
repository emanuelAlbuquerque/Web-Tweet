import { AvatarMedium, AvatarMediumProps } from "./AvatarMedium";
import { Meta, StoryObj } from "@storybook/react";


export default {
  title: 'Components/Avatar',
  component: AvatarMedium,
  args: {
    size: '48px'
  }
} as Meta<AvatarMediumProps>

export const AvatarProfileMedium: StoryObj<AvatarMediumProps> = {}