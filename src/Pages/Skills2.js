import React from 'react'
import Skills2Component from '../components/Skills2Components'
import python from '../Assets/python.png'
import wordpress from '../Assets/wordpress.png'
import html from '../Assets/html.png'



const Skills2 = () => {
  return (
    <div>
        <Skills2Component pix={python} text = {'Python'} style={{width:"88%"}}/>
        <Skills2Component pix={wordpress} text = {'Wordpress'} style={{width:"90%"}}/>
        <Skills2Component pix={html} text = {'HTML'} style={{width:"95%"}}/>
    </div>
  )
}

export default Skills2