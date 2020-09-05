import React from 'react';
import { Columns } from 'react-bulma-components';
import "./style.css";
import github from "../../images/github.png";
import linkedin from "../../images/linkedin.png";
import stackoverflow from "../../images/stackoverflow.png";

function Connect() {
  return (
    <Columns.Column size={2} className="sidebar">
      <div id="connect">
        <h2>Connect</h2>
        <a href="https://github.com/melissa-clothilde" target="_blank" rel="noopener noreferrer">
          <img src={github} className="social" alt="GitHub" />
        </a>
        <a href="https://linkedIn.com/in/melissa-elie" target="_blank" rel="noopener noreferrer">
        <img src={linkedin} className="social" alt="linkedIn" />
        </a>
        <a href="/#" target="_blank" rel="noopener noreferrer">
        <img src={stackoverflow} className="social" alt="StackOverflow" />
        </a>
      </div>
    </Columns.Column>
  )
}

export default Connect;
