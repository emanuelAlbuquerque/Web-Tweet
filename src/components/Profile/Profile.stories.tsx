import { Profile, ProfileProps } from "./Profile";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: 'Components/Profile',
  component: Profile,
  args: {
    Email: '@biscuttu',
    Name: 'Davide Biscuso',
    isdark: false
  }
} as Meta<ProfileProps>

export const ProfileLight: StoryObj<ProfileProps> = {}
export const ProfileDark: StoryObj<ProfileProps> = {
  args: {
    isdark: true
  }
}