import React from 'react'


const SkillsComponent = ({pix, text, style}) => {
  return (
      <div className='skill-div'>
              <div className='skill-info'>
                <div className='skill-icon'>
                    <img className='skill-logo' src={pix} alt='php'/>
                </div>
                
                <div className='skill-details'>
                  <h3>{text}</h3>
                  <div className='span1'>
                    <span className='span2' style={style}></span>
                  </div>
                </div>
              </div>
    </div>
  )
}

export default SkillsComponent