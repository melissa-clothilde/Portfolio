import React from 'react';
import "./style.css";
import github from "../images/github.png";
import linkedin from "../images/linkedin.png";

function Connect() {
  return (

    <div id="connect">
      
      <a href="https://github.com/melissa-clothilde" target="_blank" rel="noopener noreferrer">
        <img src={github} className="social" alt="GitHub" />
      </a>
      <a href="https://linkedIn.com/in/melissa-elie" target="_blank" rel="noopener noreferrer">
        <img src={linkedin} className="social" alt="linkedIn" />
      </a>

    </div>

  )
}

export default Connect;
