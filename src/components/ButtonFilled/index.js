import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './ButtonFilled.css'

export default function ButtonFilled(props) {
    return (
        <Link to={props.linkTo} class="ButtonFilled"><button className={props.shadow && 'shadow'}><p>{props.children}</p></button></Link>
    )
}
