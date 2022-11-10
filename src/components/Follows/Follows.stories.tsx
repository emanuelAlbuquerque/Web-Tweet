import { Meta, StoryObj } from "@storybook/react";
import { Follows, FollowsProps } from "./Follows";
import { ItemFollow } from "./ItemFollow";
import { withRouter } from 'storybook-addon-react-router-v6'
import imgCooper from '../../assets/cooper.png'

export default {
  title: 'Components/Follows',
  component: Follows,
  decorators: [withRouter]
} as Meta<FollowsProps>

export const FollowsLight: StoryObj<FollowsProps> = {
  args: {
    isDark: false,
    children: [
      <ItemFollow
        name="Emanuel"
        email="@emanuel" 
        img={imgCooper}
        isDark={false}
      />,
      <ItemFollow
        name="Emanuel"
        email="@emanuel"
        isDark={false}
        img={imgCooper}
      />,
      <ItemFollow
        name="Emanuel"
        email="@emanuel"
        isDark={false}
        img={imgCooper}
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
          img={imgCooper}
        />,
        <ItemFollow
          name="Emanuel"
          email="@emanuel"
          isDark={true}
          img={imgCooper}
        />,
        <ItemFollow
          name="Emanuel"
          email="@emanuel"
          isDark={true}
          img={imgCooper}
        />,
      ]
    }
  }
