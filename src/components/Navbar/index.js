import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';
import ButtonOutline from '../ButtonOutline';

import styles from '../../styles/NavbarStyles';

import logo from '../../images/logo.png';

import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <div class="container-full">
        <nav>
          <div className="container navbar">
            <div>
              <Link to="" class="logo">
                <img src={logo} alt="" srcset="" />
                <h4>KnowShare.</h4>
              </Link>
            </div>
            <ul class="nav-links-left">
              <li>
                <a href="">Quem somos</a>
              </li>
              <li>
                <a href="">Como contribuir</a>
              </li>
              <li>
                <a href="">Ajuda</a>
              </li>
            </ul>
            <ul class="nav-links-right">
              <li>
                <Link to="/login" class="loginLink">
                  Login
                </Link>
              </li>
              <li>
                <ButtonOutline linkTo="/register">Cadastrar</ButtonOutline>
              </li>
            </ul>
            <div class="burger">
              <div class="line1" />
              <div class="line2" />
              <div class="line3" />
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
export default withStyles(styles)(Navbar);
