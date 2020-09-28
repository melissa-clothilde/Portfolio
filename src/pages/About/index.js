import React from "react";
import NavBar from "../../components/NavBar"
import "./style.css";
import profile from "../../components/images/profile.jpg";
import Foot from "../../components/Foot/index";
import Connect from "../../components/Connect/index";

function About() {
  return (
    <React.Fragment>
      <NavBar />   
      <div className="columns is-centered is-vcentered">
        <div className="column">
        <figure className="image">
          <img src={profile} alt="profile" className="is-rounded profile" />
          </figure>
        </div>
          
              
        <div className="column text-col">
          <span className="subtitle">Frontend Web Developer with a background in governmental and nonprofit work within underrepresented communities. Develops and maintains robust, user-centered applications characterized by clean, responsive user interfaces. 
          <br></br><br></br>
          A problem-solver committed to civic engagement.
          </span>
        </div>
              
      </div>
      <div className="connect-box">
        <Connect />
      </div>
      <Foot />

    </React.Fragment>
  );
}

export default About;
