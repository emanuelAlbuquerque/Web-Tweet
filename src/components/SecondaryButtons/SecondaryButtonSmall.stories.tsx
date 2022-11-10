import { Meta, StoryObj } from '@storybook/react';
import { SecondaryButtonSmall, SecondaryButtonSmallProps } from './SecondaryButtonSmall';
import { withRouter } from 'storybook-addon-react-router-v6'

export default {
    title: 'Components/SecondaryButton',
    component: SecondaryButtonSmall,
    decorators: [withRouter],
    args: {
        children: 'Tweet'
    },
} as Meta<SecondaryButtonSmallProps>

export const ButtonSecondarySmall: StoryObj<SecondaryButtonSmallProps> = {}




