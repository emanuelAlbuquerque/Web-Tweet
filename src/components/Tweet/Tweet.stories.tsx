import { Tweet, TweetProps } from "./Tweet"
import { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'Components/Tweet',
  component: Tweet,
} as Meta<TweetProps>

export const Light: StoryObj<TweetProps> = {}
export const Dark: StoryObj<TweetProps> = {
  args: {
    isDark: true
  }
}