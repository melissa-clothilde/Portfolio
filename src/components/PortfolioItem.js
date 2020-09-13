import React from 'react'

const PortfolioItem = ({ item }) => {
  console.log("item", item.image)
 
  return (
    <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          <img src={item.image} alt={item.name} />
        </div>
        <div className='card-back'>
          {/* <div className='content'> */}
          <h1>{item.name}</h1>
          <br></br>
          <ul>
            <li>
              <span className="title-span">Code:</span> {item.repo}
            </li>
            <li>
              <span className="title-span">Deployed Version:</span> {item.deployed}
            </li>
          </ul>
          {/* </div> */}
        </div>
      </div>
    </div>

  )
}

export default PortfolioItem;