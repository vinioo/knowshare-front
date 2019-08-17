import React from 'react'
import { Link } from 'react-router-dom'
import './Button.css'

export default function ButtonFilled(props) {
  console.log(props)
    return (
        <Link to={props.linkTo} class="Button"><button className={props.purple && 'purpleText'}><p>{props.children}</p></button></Link>
    )
}
