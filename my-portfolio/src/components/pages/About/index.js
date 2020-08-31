import React from "react";
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Container, Columns } from 'react-bulma-components';
import "./About.css";
import profile from "../../../images/profile.jpg";
import Foot from "../../Foot/index";
import Connect from "../../Connect/index";

function About() {
  return (
    <React.Fragment>
      <Container>
      <h1 className="page-title">About Me</h1>
      </Container>
      <Container className="fist-cont">
        <Columns>
          <Columns.Column size={3}>
            <img src={profile} alt="profile" className="profile" />
          </Columns.Column>
          <Columns.Column size={7}>
            <p>
              Nunc pharetra finibus est at efficitur. Praesent sed congue diam. Integer gravida dui
              mauris, ut interdum nunc egestas sed. Aenean sed mollis diam. Nunc aliquet risus ac finibus
              porta. Nam quis arcu non lectus tincidunt fermentum. Suspendisse aliquet orci porta quam
              semper imperdiet. 
              Praesent euismod mi justo, faucibus scelerisque risus cursus in. Se
         </p>
          </Columns.Column>

          <Connect />
        </Columns>
      </Container>
      <Foot />
        
    </React.Fragment>
  );
}

export default About;
