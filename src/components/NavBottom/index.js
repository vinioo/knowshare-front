import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavBottom.css';

export default class NavBottom extends Component {
    render() {
        return (
            <div class="NavBottom">
                <div className="container">
                    <div className="NavBottomContainer">
                        <Link to>
                            <p class="selected">Desenvolvimento Web</p>
                        </Link>
                        <Link to>
                            <p>Javascript</p>
                        </Link>
                        <Link to>
                            <p>PHP</p>
                        </Link>
                        <Link to>
                            <p>React</p>
                        </Link>
                        <Link to>
                            <p>Node</p>
                        </Link>
                        <Link to>
                            <p>Banco de dados</p>
                        </Link>
                        <Link to>
                            <p>Utilidades</p>
                        </Link>
                        <Link to>
                            <p>Outros</p>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}
