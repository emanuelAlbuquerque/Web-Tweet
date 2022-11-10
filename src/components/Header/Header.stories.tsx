import { Header, HeaderRootProps } from "./Header";
import { Meta, StoryObj } from '@storybook/react';
import { IconHeader } from "./IconHeader";
import { withRouter } from 'storybook-addon-react-router-v6'

export default {
  title: 'Components/Header',
  component: Header.Root,
  decorators: [withRouter],
} as Meta<HeaderRootProps>

export const Light: StoryObj<HeaderRootProps> = {
  args: {
    isDark: false,
    children: [
        <Header.Title>
          Home
        </Header.Title>,
        <Header.Icon >
          <IconHeader />
        </Header.Icon>
      ]
  },
}

export const Dark: StoryObj<HeaderRootProps> = {
  args: {
    isDark: true,
    children: [
        <Header.Title>
          Home
        </Header.Title>,
        <Header.Icon >
          <IconHeader />
        </Header.Icon>
      ]
  },
}