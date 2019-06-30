import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import HomePanel from '../components/HomePanel';
import HomeBody from '../components/Homebody';
import HomeBodyContent from '../components/HomeBodyContent';

import './Homepage.css';

export default class Homepage extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="container">
                    <HomePanel />

                </div>
                <HomeBody />
                <HomeBodyContent />
            </div>
        );
    }
}
