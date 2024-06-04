import React, {useState} from 'react'

const CardBottom = () => {  
  return (
    <div className="cardBottom flex justify-center">
      <div className="innerDiv">
        <a className="flex" href="https://wa.me/+971557969234" target="_blank">
          <img src="/whatsappIcon.svg" />
        </a>
      </div>
      <div
        className="innerDiv"
        style={{
          borderRight: '1px solid #ECA33A',
          borderLeft: '1px solid #ECA33A',
        }}
      >
        <a className="flex" href="tel:+971557969234" target="_blank">
          <img src="/phoneIcon.svg" />
        </a>
       
      </div>
      <div className="innerDiv" style={{ borderRight: '1px solid #ECA33A' }}>
            <img src="/shareIcon.svg" alt="Email Icon" />
      </div>
      <div className="innerDiv">
      <a href="mailto:farooqnasir247@gmail.com">
        <img src="/emailIcon.svg" alt="Email Icon" />
      </a>
      </div>
    </div>
  )
}

export default CardBottom
