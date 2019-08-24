import React from 'react';

import {
  Footer,
  FooterItem,
  FooterList,
  FooterIcon,
  FooterBottom,
  FooterRow,
} from './styles';

import linkedinIcon from '../../images/linkedin.svg';
import facebookIcon from '../../images/facebook.svg';
import instagramIcon from '../../images/instagram.svg';

export default function index() {
  return (
    <Footer className="container-full">
      <FooterRow className="container">
        <FooterItem>
          <FooterList>
            <li>
              <h4>Quem somos</h4>
            </li>
            <li>
              <h4>FAQ</h4>
            </li>
            <li>
              <h4>Ajuda</h4>
            </li>

            <li>
              <h4>Contato</h4>
            </li>
          </FooterList>
        </FooterItem>
        <FooterItem className="logo">
          <h4>KnowShare</h4>
        </FooterItem>
        <FooterItem>
          <FooterIcon
            src={linkedinIcon}
            alt=""
            srcset=""
            className="footerIcon"
          />
          <FooterIcon
            src={facebookIcon}
            alt=""
            srcset=""
            className="footerIcon"
          />
          <FooterIcon
            src={instagramIcon}
            alt=""
            srcset=""
            className="footerIcon"
          />
        </FooterItem>
      </FooterRow>
      <FooterRow>
        <FooterBottom>
          <hr />
          <p>&copy; KnowShare 2019 - Vinicius Oliveira - All rights reserved</p>
        </FooterBottom>
      </FooterRow>
    </Footer>
  );
}
