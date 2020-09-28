import React from 'react';
import NavBar from "../../components/NavBar";
import HW1 from "../../components/images/HW1.png";
import HW2 from "../../components/images/HW2.png";
import HW3 from "../../components/images/HW3.png";
import HW4 from "../../components/images/HW4.png";
import Foot from "../../components/Foot";
import "./style.css";

function HappilyWokePage() {
  return (
    <div>
      <NavBar />

      <section className='large-grid'>

        <div className="title has-text-centered">happily Woke</div>
      
        <div className="subtitle is-6 has-text-centered">
          <p>Code: <a href="https://github.com/melissa-clothilde/happily-woke">https://github.com/melissa-clothilde/happily-woke</a> </p>
        Deployed: <a href="https://arcane-chamber-66986.herokuapp.com/">https://arcane-chamber-66986.herokuapp.com/</a></div>
        <figure className="image">
          <img src={HW1} alt="HappilyWoke1" />
        </figure>
        <br></br>
        <figure className="image ">
          <img src={HW2} alt="HappilyWoke2" />
        </figure>
        <br></br>
        <figure className="image ">
          <img src={HW3} alt="HappilyWoke3" />
        </figure>
        <figure className="image ">
          <img src={HW4} alt="HappilyWoke4" />
        </figure>
      </section>

      <Foot />
    </div>
  )
}

export default HappilyWokePage
