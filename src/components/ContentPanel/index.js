import React, { Component } from 'react';
import SearchPanel from '../SearchPanel';
import NavBottom from '../NavBottom';
import Filter from '../Filter'
import Item from '../Item';
import Pagination from '../index/Pagination';

import { Link } from 'react-router-dom';

import addIcon from '../../images/add-circular-outlined-button.svg'
import './ContentPanel.css';

export default class ContentPanel extends Component {
    render() {
        return (
            <div className="contentPanel">
                <Link to="/newPost">
                    <img src={addIcon} alt="" srcset="" className="floatButton"/>
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
