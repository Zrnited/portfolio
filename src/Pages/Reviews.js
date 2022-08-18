import React from 'react'
import ReviewsComponent from '../components/ReviewsComponent'
import Testifier from '../Assets/Testifier.png'

const Reviews = () => {
  return (
    <div className='testify-details'>
        <ReviewsComponent avatar={Testifier} username={"Femi Okaseun"} comment={"Seyi gets things done. He's very passionate about what he does and he's always fun to be with."}/>

        <ReviewsComponent avatar={Testifier} username={"Paul Keno"} comment={"Seyi gets things done. He's very passionate about what he does and he's always fun to be with."}/>

        <ReviewsComponent avatar={Testifier} username={"Ojay Simeon"} comment={"Seyi gets things done. He's very passionate about what he does and he's always fun to be with."}/>

        <ReviewsComponent avatar={Testifier} username={"His Code"} comment={"Seyi gets things done. He's very passionate about what he does and he's always fun to be with."}/>
    </div>
  )
}

export default Reviews