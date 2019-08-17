import React from "react";
import "./Input.css";

const Input = (props) => (
  <input
    type="text"
    placeholder={props.placeText}
    className="Input"
    onChange={props.onChange}
    name={props.name}
  />
);

export default Input;
