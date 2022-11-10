import { ItemFollow, ItemFollowProps} from "./ItemFollow";
import { withRouter } from 'storybook-addon-react-router-v6'
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: 'Components/ItemFollows',
  component: ItemFollow,
  decorators: [withRouter],
  args: {
    email: '@emanuel',
    name: 'Emanuel'
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
