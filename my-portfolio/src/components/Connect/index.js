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
        <img src={github} className="social" alt="GitHub" onClick="https://github.com/melissa-clothilde" />
        <img src={linkedin} className="social" alt="LinkedIn" onClick="https://linkedin.com/in/melissa-elie"/>
        <img src={stackoverflow} className="social" alt="StackOverflow" />
      </div>
    </Columns.Column>
    )
}

export default Connect;
