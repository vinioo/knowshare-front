import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Filter.css';

export default class NavBottom extends Component {
  render() {
    return (
      <div class="Filter">
        <div className="container">
          <div className="FilterContainer">
            Ordenar por:
            <select name="" id="filterSelect">
              <option value="">Recomendados</option>
              <option value="">Tendências</option>
              <option value="">Adicionados Recentemente</option>
              <option value="">Melhor avaliação</option>
              <option value="">Mais Comentados</option>
            </select>
          </div>
        </div>
      </div>
    );
  }
}
