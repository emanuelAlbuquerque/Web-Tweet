import { Profile, ProfileProps } from "./Profile";
import { Meta, StoryObj } from "@storybook/react";
import { withRouter } from 'storybook-addon-react-router-v6'

export default {
  title: 'Components/Profile',
  component: Profile,
  args: {
    name: 'Emanuel Albuquerque',
    ahoba: '@emanuelAlbuquerque',
    profissao: 'Dev FrontEnd'
  },
  decorators: [withRouter]
} as Meta<ProfileProps>

export const ProfileLight: StoryObj<ProfileProps> = {
  args: {
    isDark: false
  }
}

export const ProfileDark: StoryObj<ProfileProps> = {
  args: {
    isDark: true
  }
}
