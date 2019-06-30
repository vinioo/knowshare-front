import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './ButtonFilled.css'

export default class ButtonFilled extends Component {
    render() {
        return (
            <Link to={this.props.linkTo} class="ButtonFilled"><button><p>{this.props.content}</p></button></Link>
        )
    }
}
