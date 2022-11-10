import { Login } from "./Login";
import { Meta, StoryObj } from "@storybook/react";
import { withRouter } from 'storybook-addon-react-router-v6'

export default {
  title: 'Components/Login',
  component: Login,
  decorators: [withRouter]
} 

export const ProfileLight = {}
