import React, { Component } from 'react';
import './Main.css';
import profile from './Group.png';

class Main extends Component {
  render() {
    return (
      <div className="mainPage">

{/* Put general into another div to vertically center */}
        <div className="general">
          <h1>Laura Mann</h1>
          <p>Hello, I'm Laura and I'm a front-end developer.</p>

          <div className="social-icons">
            <a href="mailto:lauramann17@gamil.com" class="fas fa-envelope fa-2x"></a>
            <a href="https://www.linkedin.com/in/lauramann17/" class="fab fa-linkedin fa-2x"></a>
            <a href="https://github.com/lauramann" class="fab fa-github fa-2x"></a>
          </div>

        </div>

        <div className="images">
          <img src={profile} alt="Logo" />
        </div>

      </div>
    );
  }
}

export default Main;
