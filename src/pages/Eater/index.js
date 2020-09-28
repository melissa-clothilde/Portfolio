import React from 'react';
import NavBar from "../../components/NavBar";
import E1 from "../../components/images/E1.png";
import E2 from "../../components/images/E2.png";
import E3 from "../../components/images/E3.png";
import E4 from "../../components/images/E4.png";
import Foot from "../../components/Foot";
import "./style.css";

function EaterPage() {
  return (
    <div>
      <NavBar />

      <section className='large-grid'>

        <div className="title has-text-centered">Eater</div>
      
        <div className="subtitle is-6 has-text-centered">
          <p>Code: <a href="https://github.com/melissa-clothilde/Eater">https://github.com/melissa-clothilde/Eater</a> </p>
        Deployed: <a href="https://melissa-clothilde.github.io/Eater/">https://melissa-clothilde.github.io/Eater/</a></div>
        <figure className="image">
          <img src={E1} alt="Eater1" />
        </figure>
        <br></br>
        <figure className="image ">
          <img src={E2} alt="Eater2" />
        </figure>
        <br></br>
        <figure className="image ">
          <img src={E3} alt="Eater3" />
        </figure>
        <figure className="image ">
          <img src={E4} alt="Eater4" />
        </figure>
      </section>

      <Foot />
    </div>
  )
}

export default EaterPage
