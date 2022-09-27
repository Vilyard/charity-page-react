import React from 'react'
import "../About/About.css"
import FirstSectionAbout from '../About/Sections/firstSectionAbout/firstSectionAbout.jsx'
import SecondSectionAbout from './Sections/secondSectionAbout/secondSectionAbout'
import ThirdSectionAbout from './Sections/thirdSectionAbout/thirdSectionAbout'
import FourthSectionAbout from './Sections/fourthSectionAbout/fourthSectionAbout'

const About = () => {
  return (
    <div className='about-container'>

      < FirstSectionAbout />
      < SecondSectionAbout />
      < ThirdSectionAbout />
      < FourthSectionAbout />
    </div>
  )
}

export default About