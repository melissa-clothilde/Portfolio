import React from 'react';
import portfolioArray from '../portfolioArray';
import PortfolioItem from './PortfolioItem';

function PortfolioGrid() {
  console.log("PortfolioItem", portfolioArray)
  return (
    <div>
      <section className='cards'>
        {portfolioArray.map((item) => (
          <PortfolioItem key={item.id} item={item}></PortfolioItem>
        ))}
      </section>
    </div>
  )
}

export default PortfolioGrid;
