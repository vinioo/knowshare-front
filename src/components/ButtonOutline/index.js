import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ButtonOutline.css';

export default class ButtonOutline extends Component {
    render() {
        return (
            <Link to={this.props.linkTo} class="buttonOutline">
            <button type="submit" onClick={this.props.onClick}>
                <p>
                    {this.props.content}
                </p>
            </button>
            </Link>
        );
    }
}
