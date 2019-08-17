import React from 'react';
import './Footer.css';

import linkedinIcon from '../../images/linkedin.svg'
import facebookIcon from '../../images/facebook.svg'
import instagramIcon from '../../images/instagram.svg'

export default function Footer() {
  return (
    <div className="container-full footer">
      <div className="container footerRow">
        <div className="footerItem">
          <ul className="footerList">
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
          </ul>
        </div>
        <div className=" footerItem logo"><h4>KnowShare</h4></div>
        <div className=" footerItem ">
            <img src={linkedinIcon} alt="" srcset="" className="footerIcon"/>
            <img src={facebookIcon} alt="" srcset="" className="footerIcon"/>
            <img src={instagramIcon} alt="" srcset="" className="footerIcon"/>


        </div>
      </div>
      <div className="footerRow footerBottom">
          <hr/>
          <p>&copy; KnowShare  2019 - Vinicius Oliveira - All rights reserved</p>
      </div>
    </div>
  );
}
