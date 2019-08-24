import React from 'react';

import { Button } from './styles';
import { Link } from 'react-router-dom';

export default function ButtonFilled(props) {
  return (
    <Link to={props.linkTo} class="Button">
      <Button {...props}>
        <p>{props.children}</p>
      </Button>
    </Link>
  );
}
