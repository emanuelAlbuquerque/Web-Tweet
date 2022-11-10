import { Input, InputProps } from "./Input";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: 'Components/Input',
  component: Input,
  args: {
    type: 'text',
    placeholder: 'Phone number, email address'
  },
} as Meta<InputProps>

export const ProfileLight: StoryObj<InputProps> = {}

