import React from 'react'
import twitter from '../Assets/twitter.png'
import linkedIn from '../Assets/linkedIn.png'

const LinksComponent = () => {
  return (
    <div class="navlinks">
            <div class="logodiv">
              <a href="www.linkedIn.com/seyionifade/">
              <img src={linkedIn} alt="logo" class="logo"/>
              </a>
            </div>
            <div class="logodiv">
              <a href="www.twitter.com/seyionifade/">
              <img src={twitter} alt="logo" class="logo"/>
              </a>
            </div>
    </div>
  )
}

export default LinksComponent