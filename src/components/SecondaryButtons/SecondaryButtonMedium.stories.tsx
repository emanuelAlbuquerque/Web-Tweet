import { Meta, StoryObj } from '@storybook/react';
import { SecondaryButtonMedium, SecondaryButtonMediumProps } from './SecondaryButtonMedium';
import { withRouter } from 'storybook-addon-react-router-v6'

export default {
  title: 'Components/SecondaryButton',
  component: SecondaryButtonMedium,
  decorators: [withRouter],
  args: {
    children: 'Tweet'
  },
} as Meta<SecondaryButtonMediumProps>

export const ButtonSecondaryMedium: StoryObj<SecondaryButtonMediumProps> = {}