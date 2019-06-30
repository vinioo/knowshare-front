import React, { Component } from 'react';
import SearchPanel from '../SearchPanel';
import NavBottom from '../NavBottom';
import Item from '../Item';
import Pagination from '../index/Pagination';

import { Link } from 'react-router-dom';
import './ContentPanel.css';

export default class ContentPanel extends Component {
    render() {
        return (
            <div className="contentPanel">
                <Link to="/newPost">
                    <button class="floatButton">Novo Item</button>
                </Link>
                <NavBottom />
                <div className="container">
                    <SearchPanel />
                    <NavBottom filter />
                    <Item />
                    <Pagination />
                </div>
            </div>
        );
    }
}
