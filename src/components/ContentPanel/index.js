import React, { Component } from 'react';
import SearchPanel from '../SearchPanel';
import NavBottom from '../NavBottom';
import Filter from '../Filter';
import Item from '../Item';
import FloatButton from '../FloatButton';
import Pagination from '../index/Pagination';

import { Link } from 'react-router-dom';


export default class ContentPanel extends Component {
  render() {
    return (
      <div className="contentPanel">
        <Link to="/newPost">
          <FloatButton />
        </Link>
        <NavBottom />
        <div className="container">
          <SearchPanel />
          <Filter filter />
          <Item />
          <Pagination />
        </div>
      </div>
    );
  }
}
