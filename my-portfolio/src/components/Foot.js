import React, { Component } from 'react'
import { Container, Footer, Content, Hero } from 'react-bulma-components';

export class Foot extends Component {
  render() {
    return (
      <Hero size="medium">
      <Hero.Head renderAs="header" />
      <Hero.Body className="hero-body" />
      <Hero.Footer>
        <Footer>
          <Container>
            <Content style={{ textAlign: 'center' }}>
              <p>
              &copy; Copyright 2020 Melissa Elie
              </p>
            </Content>
          </Container>
        </Footer>
      </Hero.Footer>
    </Hero>
    )
  }
}

export default Foot
