import React from 'react'

const PortfolioItem = ({ item }) => {
  return (
    <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          <img src={item.img} alt='' />
        </div>
        <div className='card-back'>
          <h1>{item.name}</h1>
          <ul>
            <li>
              <strong>Name:</strong> {item.name}
            </li>
            <li>
              <strong>Code:</strong> {item.repo}
            </li>
            <li>
              <strong>Deployed:</strong> {item.deployed}
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default PortfolioItem;