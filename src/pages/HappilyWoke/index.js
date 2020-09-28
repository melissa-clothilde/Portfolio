import React from 'react';
import RabbitHole from "../../components/images/RabbitHole.png";
import NavBar from "../../components/NavBar";
import Foot from "../../components/Foot";

function HappilyWokePage() {
  return (
    <div>
      <NavBar />

      <div className="container">
        <section className='large-grid'>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
<div className="title has-text-centered">Code:</div>
<div className="title has-text-centered">Deployed:</div>
          <figure className="image">
            <img src={RabbitHole} alt="RabbitHole" />
          </figure>
          <br></br>
          <figure className="image ">
            <img src={RabbitHole} alt="RabbitHole" />
          </figure>
          <br></br>
          <figure className="image ">
            <img src={RabbitHole} alt="RabbitHole" />
          </figure>

        </section>

      </div>
      <Foot />
    </div>
  )
}

export default HappilyWokePage
