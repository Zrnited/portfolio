import React from 'react'


const ServicesRendered = ({pix, text, smallText}) => {
  return (
    <div>
        <img src={pix} alt="icons"/>
        <h3>{text}</h3>
        <p>{smallText}</p>
    </div>
  )
}

export default ServicesRendered