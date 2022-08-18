import React from 'react'
import SkillsComponent from '../components/SkillsComponent'
import Php from '../Assets/Php.png'
import Javascript from '../Assets/Javascript.png'
import microsoftoffice from '../Assets/microsoftoffice.png'



const Skills = () => {
  return (
    <div>
        <SkillsComponent pix={Php} text={'PHP'}/>
        <SkillsComponent pix={Javascript} text = {'JavaScript'} style={{width:"80%"}}/>
        <SkillsComponent pix={microsoftoffice} text = {'Microsoft Office'} style={{width:"75%"}}/>
    </div>
  )
}

export default Skills