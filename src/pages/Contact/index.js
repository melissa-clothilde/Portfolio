import React from "react";
import NavBar from "../../components/NavBar"
import Connect from "../../components/Connect";
import Foot from "../../components/Foot";
import "./style.css";

function Contact() {

  return (
    <React.Fragment>
       <NavBar />
      <div className="center">Email me at <span><a className="black-text" href="mailto:melissa.elie@gmail.com?Subject=Info%20wanted" target="_top"
        id="email-link">melissa.elie@gmail.com</a>.</span>
      </div>
      <div className="connect-box-2">
        <Connect />
      </div>
      <Foot />

    </React.Fragment>
  );
}

export default Contact;
