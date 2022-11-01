import { Meta, StoryObj } from '@storybook/react';
import { SearchBar, SearchBarInputProps, SearchBarRootProps } from './SearchBar';
import { CiSearch }  from 'react-icons/ci';

export default {
  title: 'Components/SearchBar',
  component: SearchBar.Root,
} as Meta<SearchBarRootProps>

export const Light: StoryObj<SearchBarRootProps> = {
  args: {
    isDark: false,
    children: [
      <SearchBar.Icon>
        < CiSearch size={20} />
      </SearchBar.Icon>,
      <SearchBar.Input placeholder='Search Twitter' />
    ]
  },
}

export const Dark: StoryObj<SearchBarRootProps> = {
  args: {
    isDark: true,
    children: [
        <SearchBar.Icon>
          < CiSearch size={20} />
        </SearchBar.Icon>,
        <SearchBar.Input placeholder='Search Twitter' />
    ],
  },
}



