import { AvatarSmall, AvatarSmallProps } from "./AvatarSmall";
import { Meta, StoryObj } from "@storybook/react";


export default {
  title: 'Components/Avatar',
  component: AvatarSmall,
  args: {
    size: '39px'
  }
} as Meta<AvatarSmallProps>

export const AvatarProfileSmall: StoryObj<AvatarSmallProps> = {}