import { User, UserProps } from "./User";
import { Meta } from "@storybook/react";
import { UserLogadoProps } from "../../Users/Users";


const usuarioLogado: UserLogadoProps = {
    idUser: 'default',
    logado: true
}


export default {
  title: 'Components/User',
  component: User,
} as Meta<UserProps>

export const DefaultLight = () => <User usuarioLogado={usuarioLogado}/>;
export const DefaultDark = () => <User usuarioLogado={usuarioLogado} isDark={true} />;
