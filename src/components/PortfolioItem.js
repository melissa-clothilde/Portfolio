import React from 'react'

const PortfolioItem = ({ item }) => {
  console.log("item image", item.image)
 
  return (
    <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          <img src={item.image} alt={item.name} />
        </div>
        <div className='card-back'>
          <h1>{item.name}</h1>
          <br></br>
          <ul>
            <li>
              <span className="title-span">Code:</span> <span><a className="link-css" href={item.repo} target="_blank" rel="noopener noreferrer">{item.repo}</a></span>
            </li>
            <li>
              <span className="title-span">Deployed Version:</span> <span><a className="link-css" href={item.deployed} target="_blank" rel="noopener noreferrer">{item.deployed}</a></span>
            </li>
          </ul>
          {/* </div> */}
        </div>
      </div>
    </div>

  )
}

export default PortfolioItem;