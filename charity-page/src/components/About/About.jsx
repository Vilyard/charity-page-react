import React from 'react'
import "../About/About.css"
import FirstSectionAbout from '../About/Sections/firstSectionAbout/firstSectionAbout.jsx'
import SecondSectionAbout from './Sections/secondSectionAbout/secondSectionAbout'

const About = () => {
  return (
    <div className='about-container'>

      < FirstSectionAbout />
      < SecondSectionAbout />

    </div>
  )
}

export default About