import React from "react";
import { Link } from "react-router-dom";
import "./ButtonOutline.css";

const ButtonOutline = (props) => (
  <Link to={props.linkTo} class="buttonOutline">
    <button type="submit" onClick={props.onClick}>
      <p>{props.children}</p>
    </button>
  </Link>
);

export default ButtonOutline;
