import React, { Component } from 'react';
import ButtonFilled from '../ButtonFilled';
import './HomePanel.css'; 

export default class HomePanel extends Component {
    render() {
        return (
            <div className="panel">
                <div className="panelContent">
                    <h1>
                        <span class="bolder">Nunca</span> é tarde para aprender.
                    </h1>
                    <h3>
                        Conheça a Know Share. A sua nova plataforma para
                        compartilhamento de material.
                    </h3>
                    <h3>
                        E o melhor, de <span className="bolder">graça!</span>
                    </h3>
                    <ButtonFilled className="ButtonFilled" linkTo="/content/">Iniciar Jornada!</ButtonFilled>
                </div>
            </div>
        );
    }
}
