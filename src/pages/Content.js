import React, { Component } from 'react';
import Navbar from '../components/Navbar/';
import ContentPanel from '../components/ContentPanel';

export default class Content extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <ContentPanel />
            </div>
        );
    }
}
