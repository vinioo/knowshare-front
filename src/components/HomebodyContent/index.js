import React, { Component } from 'react';
import './HomebodyContent.css';
import ButtonFilled from '../ButtonFilled';
import Card from '../Card';
import flatimage from '../../images/flatimage2.png';

export default class HomeBodyContent extends Component {
  render() {
    return (
      <div className="HomeBody">
        <div className="container HomeBodyContent">
          <div className="homeBodyUpper">
            <div className="HomebodyContentText">
              <h1>O que é a KnowShare?</h1>
              <p>
                Somos uma plataforma destinada ao compartilhamento de conteúdos
                gratuitos destinados ao aprendizado. <br />
                <br /> Sabemos que a internet está recheada de conteúdo, e por
                isso, nem sempre é necessário gastar dinheiro para aprender algo
                novo. <br />
                <br /> O nosso objetivo é unir a comunidade, e compartilhar os
                melhores contéudos gratuitos disponiveis atualmente. <br />
                <br /> Não fique de fora!
                <br />
              </p>
              <ButtonFilled content="Começar!" />
            </div>
            <div className="homebodyContentImage">
              <img src={flatimage} alt="" srcset="" />
            </div>
          </div>

          <div className="cardsRow">
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    );
  }
}
