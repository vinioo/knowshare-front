import React from 'react'
import { Link } from 'react-router-dom'
import './Button.css'

export default function ButtonFilled(props) {
    return (
        <Link to={props.linkTo} class="Button"><button><p>{props.children}</p></button></Link>
    )
}
