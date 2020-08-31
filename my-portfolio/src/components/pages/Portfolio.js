import React from "react";
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Container, Columns } from 'react-bulma-components';
import Connect from "../Connect/index";
import Foot from "../Foot";

function Portfolio() {
  return (
    <React.Fragment>
      <Container>
        <h1 className="about">Portfolio</h1>
      </Container>
      <Container className="fist-cont">
        <Columns>
        <Columns.Column size={10}>
        </Columns.Column>
          <Connect />
        </Columns>
      </Container>
      <Foot/>
    </React.Fragment>
  );
}

export default Portfolio;
