import { Header, HeaderRootProps } from "./Header";
import { Meta, StoryObj } from '@storybook/react';
import { IconHeader } from "./IconHeader";

export default {
  title: 'Components/Header',
  component: Header.Root,
} as Meta<HeaderRootProps>

export const Light: StoryObj<HeaderRootProps> = {
  args: {
    isDark: false,
    children: [
        <Header.Title>
          Home
        </Header.Title>,
        <Header.Icon>
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
        <Header.Icon>
          <IconHeader />
        </Header.Icon>
      ]
  },
}