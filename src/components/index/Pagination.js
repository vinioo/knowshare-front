import React, { Component } from 'react';
import './Pagination.css';

export default class Pagination extends Component {
  render() {
    return (
      <div className="PaginationContainer">
        <div class="pagination">
          <p>&laquo;</p>
          <p class="active">1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
          <p>5</p>
          <p>6</p>
          <p>&raquo;</p>
        </div>
      </div>
    );
  }
}
