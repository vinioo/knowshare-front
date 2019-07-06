import React, { Component } from "react";

import KnowShare from "../../images/logo.png";

import {
  Background,
  Content,
  Logo,
  Title,
  Input,
  Button,
  ForgetPass
} from "./styles";

class Login extends Component {
  render() {
    return (
      <Background>
        <Content>
          <Logo>
            <img src={KnowShare} alt="Logo" />
            <Title>KnowShare</Title>
          </Logo>
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Senha" />
          <Button>Entrar</Button>
          <ForgetPass>Esqueci minha senha</ForgetPass>
        </Content>
      </Background>
    );
  }
}

export default Login;
