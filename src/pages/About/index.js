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
      <div className="section">
      <div className="container cont-pad">

        <div className="columns">
          <div className="column">
            <div className="box prof-box ">
              <img src={profile} alt="profile" className="profile" />
            </div>
          </div>
          <div className="column">
            <div className="rows">
              
                <div className="box para">Frontend Web Developer with a background in governmental and nonprofit work within underrepresented communities. Develops and maintains robust, user-centered applications characterized by clean, responsive user interfaces. 
            
                An effective and curious problem-solver committed to incorporating civic engagement in daily work.
                </div>
              
              
                <div className="connect-box">
                  <Connect />
                 </div>
            
            </div>
          </div>
        </div>
        
      </div>

      </div>


      <Foot />

    </React.Fragment>
  );
}

export default About;
