import React, { Component } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default class Header extends Component {

  // Function to determine if a link should have the "current" class
  isLinkCurrent = (path) => {
    let parts = window.location.href.split("/");
    let lastPart = parts[parts.length - 1];
  
    return lastPart === path ? 'current' : '';
  };

  render() {
    return (
      <React.Fragment>
        {/* <header id="home"> */}
          <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
            <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
            <ul id="nav" className="nav">
            <li className={this.isLinkCurrent('home')}>
            <Link to="/home">Home</Link>
          </li>
          <li className={this.isLinkCurrent('collection')}>
            <Link to="/collection">Our Collection</Link>
          </li>
          <li className={this.isLinkCurrent('bio')}>
            <Link to="/bio">Thomson</Link>
          </li>
          <li className={this.isLinkCurrent('newsLetter')}>
            <Link to="/newsLetter">NewsLetter</Link>
          </li>
          <li className={this.isLinkCurrent('contact')}>
            <Link to="/contact">Contact Us</Link>
          </li>
            </ul>
          </nav>
        {/* </header> */}
      </React.Fragment>
    );
  }
}
