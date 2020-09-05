import React, { useState, useEffect } from "react";
import 'react-bulma-components/dist/react-bulma-components.min.css';
// import { Container, Columns } from 'react-bulma-components';
// import Connect from "../../Connect/index";
// import Foot from "../../Foot/index";
import PortfolioGrid from "../../PortfolioGrid";
import portfolioArray from "../../../portfolioArray";

function Portfolio() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // effect
    return () => {
      // cleanup
      setItems(portfolioArray)
    }
  }, [items])

  return (
    <div className='container'>
      <PortfolioGrid items={items} />
    </div>
    // <React.Fragment>
    //   <Container>
    //     <h1 className="page-title">My Portfolio</h1>
    //   </Container>
    //   <Container className="fist-cont">
    //     <Columns>
    //       <Columns.Column size={10}>
    //         {portfolioItems.map(portfolioItem, index => (
    //         <PortfolioCard
    //           name= {portfolioItem.name}
    //           key={portfolioItem.name}
    //           id={index}
    //           image={portfolioItem.image}
    //           repo={portfolioItem.repo}
    //           deployed={portfolioItem.deployed}
    //         />
    //       ))}
    //     </Columns.Column>
    //       <Connect />
    //     </Columns>
    //   </Container>
    //   <Foot />
    // </React.Fragment>
  );
}

export default Portfolio;
