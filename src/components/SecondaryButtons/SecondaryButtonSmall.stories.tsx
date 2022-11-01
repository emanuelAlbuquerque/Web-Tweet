import { Meta, StoryObj } from '@storybook/react';
import { SecondaryButtonSmall, SecondaryButtonSmallProps } from './SecondaryButtonSmall';

export default {
    title: 'Components/SecondaryButton',
    component: SecondaryButtonSmall,
    args: {
        children: 'Tweet'
    },
} as Meta<SecondaryButtonSmallProps>

export const ButtonSecondarySmall: StoryObj<SecondaryButtonSmallProps> = {}




