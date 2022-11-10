import { HeaderProfile, HeaderProfileRootProps } from "./HeaderProfile";
import { Meta, StoryObj } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6'
import { BsArrowLeft } from 'react-icons/bs';

export default {
  title: 'Components/Header Profile',
  component: HeaderProfile.Root,
  decorators: [withRouter],
} as Meta<HeaderProfileRootProps>

export const HeaderProfileLight: StoryObj<HeaderProfileRootProps> = {
  args: {
    isDark: false,
    children: [
      <HeaderProfile.Icon>
        <BsArrowLeft size={24}/>
      </HeaderProfile.Icon >,
      <HeaderProfile.Title name={'Name'} tweets={9} />
    ]
  },
}
export const HeaderProfileDark: StoryObj<HeaderProfileRootProps> = {
  args: {
    isDark: true,
    children: [
      <HeaderProfile.Icon>
        <BsArrowLeft size={24}/>
      </HeaderProfile.Icon >,
      <HeaderProfile.Title name={'Name'} tweets={9} isDark={true}/>
    ]
  },
}


