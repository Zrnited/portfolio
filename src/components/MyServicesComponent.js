import React from 'react'

const MyServicesComponent = ({text, info}) => {
  return (
    <div className='services'>
        <h2>{text}</h2>
        <p>{info}</p>
    </div>
  )
}

export default MyServicesComponent