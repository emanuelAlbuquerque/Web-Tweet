import { SlideMenu, SlideMenuProps } from "./SlideMenu"
import { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'Components/Slide Menu',
  component: SlideMenu,
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
