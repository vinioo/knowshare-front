import React, { Component } from 'react';
import './Login.css';

import logo from '../../images/logo.png';

export default class index extends Component {
  render() {
    return (
      <div class="container-full login">
        <div className="loginContainer">
          <div to="" class="loginLogo">
            <img src={logo} alt="" srcset="" />
            <h4>KnowShare.</h4>
          </div>
          <div className="loginContent">
            <input type="text" name="" id="" placeholder="Digite o seu email"/>
            <input type="password" name="" id="" placeholder="Digite a sua senha"/>
          </div>
          <div className="loginButtons">
          <button className="outlineButton"><p>Cadastre-se</p></button>
            <button className="buttonFilled"><p>Entrar</p></button>
          </div>
          <hr id="line"/>
         <p class="loginLabel">Esqueci a senha - Termos de uso</p>
         

        </div>
      </div>
    );
  }
}
