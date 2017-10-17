import React, { Component } from 'react';
import './Nav.css';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHidden: true
    }
  }
  toggleSlider() {
    this.setState({
      isHidden: !this.state.isHidden
    });
  }
  render() {
    let sliderClass = this.state.isHidden ? null : 'showSlider';
    return (
      <div id="nav">
        <div id="two-bar" onClick={() => this.toggleSlider()}>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <div id="slider" className={sliderClass}>
          <button onClick={() => this.toggleSlider()}>X</button>
          <ul>
            <li>Home</li>
            <li>Blog</li>
            <li>About</li>
            <li>Donate</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Nav
