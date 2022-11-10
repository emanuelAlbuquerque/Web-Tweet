import { SlideMenu, SlideMenuProps } from "./SlideMenu"
import { Meta, StoryObj } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6'

export default {
  title: 'Components/Slide Menu',
  component: SlideMenu,
  decorators: [withRouter],
} as Meta<SlideMenuProps>

export const SlideMenuDark: StoryObj<SlideMenuProps>= {
  args: {
    isDark: true
  }
}
export const SlideMenuLight: StoryObj<SlideMenuProps>= {
  args: {
    isDark: false
  }
}
