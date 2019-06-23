import React, { Component } from 'react'
import './Card.css'
import image from '../images/laptop-2557466_1920.jpg'

export default class Card extends Component {
    render() {
        return (
            <div className="Card">
                <div className="CardImage">
                    <img src={image} alt="" srcset=""/>
                </div>
                <div className="CardTitle">
                    <h4>Teste</h4>
                </div>
            </div>
        )
    }
}
