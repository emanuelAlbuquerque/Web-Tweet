import { Meta, StoryObj } from '@storybook/react';
import { SecondaryButtonMedium, SecondaryButtonMediumProps } from './SecondaryButtonMedium';

export default {
  title: 'Components/SecondaryButton',
  component: SecondaryButtonMedium,
  args: {
    children: 'Tweet'
  },
} as Meta<SecondaryButtonMediumProps>

export const ButtonSecondaryMedium: StoryObj<SecondaryButtonMediumProps> = {}