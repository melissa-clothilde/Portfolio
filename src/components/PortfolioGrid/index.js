import React from 'react';
// import PortfolioItem from '../PortfolioItem';
import happilyWoke from '../images/happilyWoke.png';
import RabbitHole from '../images/RabbitHole.png';
import Eater from '../images/Eater.png';

function PortfolioGrid() {
  return (
    <div>
      <section className='cards'>
        <figure class="image ">
          <a href="/happilyWoke"><img src={happilyWoke} alt="happilyWoke"/>
          </a>
        </figure>
        <figure class="image ">
        <a href="/RabbitHole"><img src={RabbitHole} alt="RabbitHole"/>
        </a>        
        </figure>
        <figure class="image ">
        <a href="/Eater"><img src={Eater} alt="Eater"/>
        </a>        
        </figure>
        
      </section>
    </div>
  )
}

export default PortfolioGrid;
