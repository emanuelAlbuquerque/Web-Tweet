import { Footer, FooterProps } from "./Footer";
import { Meta, StoryObj } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6'

export default {
  title: 'Components/Footer',
  component: Footer,
  decorators: [withRouter],
} as Meta<FooterProps>

export const FooterLight: StoryObj<FooterProps> = {
  args: {
    usuarioLogado: {
      logado: false,
      idUser: ''
    }
  }
}
export const FooterDark: StoryObj<FooterProps> = {
  args: {
    isDark: true,
    usuarioLogado: {
      logado: false,
      idUser: ''
    }
  }
}
export const FooterLightLogado: StoryObj<FooterProps> = {
  args: {
    usuarioLogado: {
      logado: true,
      idUser: ''
    }
  }
}
export const FooterDarkLogado: StoryObj<FooterProps> = {
  args: {
    isDark: true,
    usuarioLogado: {
      logado: true,
      idUser: ''
    }
  }
}