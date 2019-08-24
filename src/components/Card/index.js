import React from 'react';
import { Card, CardImage, CardTitle } from './styles';

export default function index(props) {
  return (
    <>
      <Card>
        <CardImage>
          <img src={props.image} alt="" srcset="" />
        </CardImage>
        <CardTitle>
          <h4>{props.title}</h4>
          <p>{props.children}</p>
        </CardTitle>
      </Card>
    </>
  );
}
