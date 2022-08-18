import React from 'react'

const ReviewsComponent = ({avatar, username, comment}) => {
  return (
    <div className='testify-item'>
        <div className='testdiv'>
            <img className='testifier' src={avatar} alt='testifier'/>
        </div>
        <h2>{username}</h2>
        <p>{comment}</p>
    </div>
  )
}

export default ReviewsComponent