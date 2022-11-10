import { ItemFollow, ItemFollowProps} from "./ItemFollow";
import { withRouter } from 'storybook-addon-react-router-v6'
import { Meta, StoryObj } from "@storybook/react";
import imgCooper from '../../assets/cooper.png'

export default {
  title: 'Components/ItemFollows',
  component: ItemFollow,
  decorators: [withRouter],
  args: {
    email: '@emanuel',
    name: 'Emanuel',
    img: imgCooper
  }
} as Meta<ItemFollowProps>

export const ItemFollowLight: StoryObj<ItemFollowProps> = {
  args:{
    isDark: false
  }
}
export const ItemFollowDark: StoryObj<ItemFollowProps> = {
  args: {
    isDark: true,
  }
}
