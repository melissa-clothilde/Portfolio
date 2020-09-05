import React from 'react'
import PortfolioItem from './PortfolioItem'

function PortfolioGrid({ items }) {
  return (
      <section className='cards'>
      {items.map((item) => (
        <PortfolioItem key={item.char_id} item={item}></PortfolioItem>
      ))}
    </section>
    
  )
}

export default PortfolioGrid;
