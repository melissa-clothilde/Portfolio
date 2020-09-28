import React from "react";
import NavBar from "../../components/NavBar"
import "./style.css";
import profile from "../../components/images/profile.jpg";
import Foot from "../../components/Foot/index";
import Connect from "../../components/Connect/index";

function About() {
  return (
    <div>
      <NavBar />   
      <div className="columns is-centered is-vcentered">
        <div className="column max-width">
        <figure className="image">
          <img src={profile} alt="profile" className="is-rounded profile" />
          </figure>
        </div>
          
              
        <div className="column text-col">
          <span className="subtitle box">Frontend Web Developer with a background in governmental and nonprofit work within underrepresented communities. Develops and maintains robust, user-centered applications characterized by clean, responsive user interfaces. A problem-solver committed to civic engagement.
          </span>
        </div>
              
      </div>
      <div className="connect-box">
        <Connect />
      </div>
      <Foot />

    </div>
  );
}

export default About;
