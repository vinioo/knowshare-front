import React from 'react';
import './Card.css';

export default function index(props) {
  return (
    <>
      <div className="Card">
        <div className="CardImage">
          <img src={props.image} alt="" srcset="" />
        </div>
        <div className="CardTitle">
          <h4>{props.title}</h4>
          <p>{props.children}</p>
        </div>
      </div>
    </>
  );
}
