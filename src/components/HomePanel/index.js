import React, { Component } from 'react';
import Button from '../Button';
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
                    <Button filled mt={2} linkTo="/content/">Iniciar Jornada!</Button>
                </div>
            </div>
        );
    }
}
