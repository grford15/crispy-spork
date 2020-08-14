import React, { Component } from 'react';
import './generator.css';

class Generator extends Component {
  render() {
    return (
      <div className="container">
        <h1 id="restaurant">Restaurant</h1>
        <button>Generate!</button>
      </div>
    );
  }
}

export default Generator;
