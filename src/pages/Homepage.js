import React, { Component } from 'react';
import Navbar from '../components/Navbar/';
import HomePanel from '../components/HomePanel';
import HomeBody from '../components/Homebody';
import HomeBodyContent from '../components/HomebodyContent';
import Footer from '../components/Footer';

import './Homepage.css';

export default class Homepage extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <HomePanel />
        </div>
        <HomeBody />
        <HomeBodyContent />
        <Footer />
      </div>
    );
  }
}
