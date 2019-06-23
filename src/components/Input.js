import React, { Component } from 'react'
import './Input.css'

export default class Input extends Component {
    render() {
        return (
                <input type="text" placeholder={this.props.placeText} className="Input" onChange={this.props.onChange} name={this.props.name}/>
        )
    }
}
