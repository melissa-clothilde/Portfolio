import React from 'react';
import NavBar from "../../components/NavBar";
import RH1 from "../../components/images/RH1.png";
import RH2 from "../../components/images/RH2.png";
import RH3 from "../../components/images/RH3.png";
import RH4 from "../../components/images/RH4.png";
import RH5 from "../../components/images/RH5.png";
import Foot from "../../components/Foot";
import "./style.css";

function RabbitHolePage() {
  return (
    <div>
      <NavBar />

      <section className='large-grid'>

        <div className="title has-text-centered">Rabbit Hole</div>
      
        <div className="subtitle is-6 has-text-centered">
          <p>Code: <a href="https://github.com/melissa-clothilde/Rabbit-Hole">https://github.com/melissa-clothilde/Rabbit-Hole</a> </p>
        <p>Deployed: <a href="https://discover-rabbit-hole.herokuapp.com/">https://discover-rabbit-hole.herokuapp.com/</a>
        </p>
        <br></br>
          <p>An app that adds depth to music by displaying books related to searched artists and tracks searches.</p>
          <p>Techologies used: HTML, Javascript, CSS, jQuery, Node, Express, Sequelize </p>
        </div>
        
        <figure className="image">
          <img src={RH1} alt="RabbitHole1" />
        </figure>
        <br></br>
        <figure className="image ">
          <img src={RH2} alt="RabbitHole2" />
        </figure>
        <br></br>
        <figure className="image ">
          <img src={RH3} alt="RabbitHole3" />
        </figure>
        <figure className="image ">
          <img src={RH4} alt="RabbitHole4" />
        </figure>
        <figure className="image ">
          <img src={RH5} alt="RabbitHole5" />
        </figure>
      </section>

      <Foot />
    </div>
  )
}

export default RabbitHolePage
