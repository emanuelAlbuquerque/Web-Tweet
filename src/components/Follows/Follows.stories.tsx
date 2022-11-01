import { Meta, StoryObj } from "@storybook/react";
import { Follows, FollowsProps } from "./Follows";
import { ItemFollow } from "./ItemFollow";

export default {
  title: 'Components/Follows',
  component: Follows,
} as Meta<FollowsProps>

export const FollowsLight: StoryObj<FollowsProps> = {
  args: {
    isDark: false,
    children: [
      <ItemFollow
        name="Emanuel"
        email="@emanuel" 
        isDark={false}
      />,
      <ItemFollow
        name="Emanuel"
        email="@emanuel"
        isDark={false}
      />,
      <ItemFollow
        name="Emanuel"
        email="@emanuel"
        isDark={false}
      />,
    ]
  }
}
export const FollowsDark: StoryObj<FollowsProps> = {
    args: {
      isDark: true,
      children: [
        <ItemFollow
          name="Emanuel"
          email="@emanuel"
          isDark={true}
        />,
        <ItemFollow
          name="Emanuel"
          email="@emanuel"
          isDark={true}
        />,
        <ItemFollow
          name="Emanuel"
          email="@emanuel"
          isDark={true}
        />,
      ]
    }
  }
