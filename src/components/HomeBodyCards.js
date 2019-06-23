import React, { Component } from 'react';
import Card from './Card';
import './HomeBodyCards.css';
export default class HomeBodyCards extends Component {
    render() {
        return (
            <div class="containerAuto">
                <div className="HomeBodyCards">
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        );
    }
}
