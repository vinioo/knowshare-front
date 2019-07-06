import React from "react";
import { Link } from "react-router-dom";
import "./ButtonOutline.css";

const ButtonOutline = () => (
  <Link to={this.props.linkTo} class="buttonOutline">
    <button type="submit" onClick={this.props.onClick}>
      <p>{this.props.content}</p>
    </button>
  </Link>
);

export default ButtonOutline;
