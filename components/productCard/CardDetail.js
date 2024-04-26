import React from 'react'

const CardDetail = ({ bedrooms, bathrooms, price, img, description, area }) => {
  return (
    <div className="CardSlider">
      <img src={img} className=" object-cover" />
      <div className="cardDetail">
        <div className="detailHeader">
          <p>{description}</p>
        </div>
        <div className="cardDetailInner">
          <div className="flex justify-around">
            <div className="iconBox">
              <img
                className="w-8 h-8 md:w-14 md:h-14 "
                alt="none"
                src="/bedroomIcon.svg"
              />
              <h1>Bedroom {bedrooms}</h1>
            </div>
            <div className="iconBox">
              <img
                className="w-8 h-8 md:w-14 md:h-14 "
                alt="none"
                src="/bathIcon.svg"
              />
              <h1>Bath {bathrooms}</h1>
            </div>
          </div>
          <div className="flex justify-around">
            <div className="iconBox">
              <img
                className="w-8 h-8 md:w-14 md:h-14 "
                alt="none"
                src="/sqrft3.svg"
              />
              <h1>{area}</h1>
            </div>
            <div className="iconBox">
              <img
                className="w-8 h-8 md:w-14 md:h-14 "
                alt="none"
                src="/dollarIcon.svg"
              />
              <h1>{price}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardDetail
