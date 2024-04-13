import React from 'react'

const CardBottom = () => {
  return (
    <div className='cardBottom flex justify-center'>
        <div className='innerDiv'>
            <img src='/whatsappIcon.svg' />
        </div>
        <div className='innerDiv' style={{borderRight: '1px solid #ECA33A',borderLeft: '1px solid #ECA33A'}}>
            <img src='/phoneIcon.svg' />
        </div>
        <div className='innerDiv' style={{borderRight: '1px solid #ECA33A'}}>
            <img src='/shareIcon.svg' />
        </div>
        <div className='innerDiv'>
            <img src='/emailIcon.svg' />
        </div>
    </div>
  )
}

export default CardBottom