import { TabBar, TabBarProps } from './TabBar';
import { Meta, StoryObj } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6'

export default {
  title: 'Components/Tab Bar',
  component: TabBar,
  decorators: [withRouter],
} as Meta<TabBarProps>

export const TabBarLight: StoryObj<TabBarProps> = {
  args: {
    isDark: false
  }
}

export const TabBarDark: StoryObj<TabBarProps> = {
  args: {
    isDark: true
  }
}