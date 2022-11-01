import { Meta, StoryObj } from '@storybook/react';
import { PrimaryButton, PrimaryButtonProps } from './PrimaryButton';

export default {
    title: 'Components/PrimaryButton',
    component: PrimaryButton,
    args: {
        children: 'Tweet'
    },
} as Meta<PrimaryButtonProps>


export const PrimaryBig: StoryObj<PrimaryButtonProps> = {
    args: {
        height: '50'
    }
}
export const PrimaryMedium: StoryObj<PrimaryButtonProps> = {
    args: {
        height: '40'
    }
}




