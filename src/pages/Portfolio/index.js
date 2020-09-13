import React from "react";
import Connect from "../../components/Connect";
import Foot from "../../components/Foot";
import PortfolioGrid from "../../components/PortfolioGrid";
import NavBar from "../../components/NavBar"

function Portfolio() {
  
  return (
    <div>
             <NavBar />
      <div className="container">
        <PortfolioGrid />
        <div className="connect-box">
        <Connect />
        </div>
      </div>
    <Foot />
    </div>
  );
}

export default Portfolio;
