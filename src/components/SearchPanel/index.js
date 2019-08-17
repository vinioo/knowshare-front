import React, { Component } from 'react'

import searchIcon from '../../images/search.svg'

import './SearchPanel.css';

export default class SearchPanel extends Component {
    render() {
        return (
            <div className="searchPanel">
                <div className="searchPanelTitle">
                <h1>Tá bombando!</h1>
                <p>Confira o ranking dos melhores conteúdos.</p>
                </div>
                
                <div className="search">
                <img src={searchIcon} alt="" srcset="" className="searchIcon"/>
                <input type="text" name="" id="" class="inputFilled" placeholder="Faça sua busca aqui..."/>
                </div>
            </div>
        )
    }
}
