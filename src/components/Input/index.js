import React from "react";
import "./Input.css";

const Input = () => (
  <input
    type="text"
    placeholder={this.props.placeText}
    className="Input"
    onChange={this.props.onChange}
    name={this.props.name}
  />
);

export default Input;
