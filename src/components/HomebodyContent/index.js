import React, { Component } from 'react';

import Button from '../Button';
import Card from '../Card';

import './HomebodyContent.css';

import flatimage from '../../images/flatimage2.png';
import mindIcon from '../../images/intelligencepurple.svg';
import careerIcon from '../../images/careerpurple.svg';
import trophyIcon from '../../images/trophypurple.svg';
import Homebody from '../Homebody';

export default class HomeBodyContent extends Component {
  render() {
    return (
      <>
        <div className="HomeBody">
          <div className="container HomeBodyContent">
            <div className="homeBodyUpper">
              <div className="HomebodyContentText">
                <h1>O que é a KnowShare?</h1>
                <p>
                  Somos uma plataforma destinada ao compartilhamento de
                  conteúdos gratuitos destinados ao aprendizado. <br />
                  <br /> Sabemos que a internet está recheada de conteúdo, e por
                  isso, nem sempre é necessário gastar dinheiro para aprender
                  algo novo. <br />
                  <br /> O nosso objetivo é unir a comunidade, e compartilhar os
                  melhores contéudos gratuitos disponiveis atualmente. <br />
                  <br /> Não fique de fora!
                  <br />
                </p>
                <Button purple>Começar!</Button>
              </div>
              <div className="homebodyContentImage">
                <img src={flatimage} alt="" srcset="" />
              </div>
            </div>
          </div>
        </div>
        <Homebody />
        <div className="container HomeBodyCards">
       
          <div className="squares">
            <div className="teste1">
              <Card image={mindIcon} title="Aprenda muito">E compartilhe com a comunidade!</Card>
            </div>
            <div className="teste2">
              <Card image={careerIcon}  title="Evolua suas skills">Aumente o seu conhecimento!</Card>
            </div>
            <div className="teste3">
              <Card image={trophyIcon} title="Participe do ranking">Ajude membros e ganhe pontos!</Card>
            </div>
          </div>
          <div className="cardsDescription">
            <h1>A comunidade te aguarda!</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              dolorem eligendi eum beatae rem provident. Magni deserunt,
              voluptas cupiditate ea maxime atque laboriosam rerum est
              doloremque saepe sequi iste vero.
            </p>
          <Button filled shadow mt={2}>Boooora!</Button>
          </div>
        </div>
      </>
    );
  }
}
