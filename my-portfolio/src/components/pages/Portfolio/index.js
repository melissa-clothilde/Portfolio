import React, { useState } from "react";
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Container, Columns } from 'react-bulma-components';
import Connect from "../../Connect/index";
import Foot from "../../Foot/index";
import RabbitHole from "../../../images/RabbitHole.png";
import Burger from "../../../images/Burger.png";


function Portfolio() {
  const [item, setItem] = useState(
    portfolioItems
    //   {
    //     name: "",
    //     image: { },
    //     repo: "",
    //     deployed: ""
    // }
  );

  const portfolioItems = [
    {
      id: "0",
      name: "Rabbit Hole",
      image: { RabbitHole },
      repo: "https://github.com/maquispe/Project-2",
      deployed: "https://discover-rabbit-hole.herokuapp.com/"
    },
    {
      id: "1",
      name: "Eat-Da-Burger",
      image: { Burger },
      repo: "https://github.com/melissa-clothilde/mv",
      deployed: "https://radiant-temple-58111.herokuapp.com/"
    }
  ];

  return (
    <React.Fragment>
      <Container>
        <h1 className="page-title">My Portfolio</h1>
      </Container>
      <Container className="fist-cont">
        <Columns>
          <Columns.Column size={10}>
            {portfolioItems.map(portfolioItem, index => (
            <PortfolioCard
              name= {portfolioItem.name}
              key={portfolioItem.name}
              id={index}
              image={portfolioItem.image}
              repo={portfolioItem.repo}
              deployed={portfolioItem.deployed}
            />
          ))}
        </Columns.Column>
          <Connect />
        </Columns>
      </Container>
      <Foot />
    </React.Fragment>
  );
}

export default Portfolio;
