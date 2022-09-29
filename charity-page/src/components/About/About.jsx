import React from 'react'
import "../About/About.css"
import FirstSectionAbout from '../About/Sections/firstSectionAbout/firstSectionAbout.jsx'
import SecondSectionAbout from './Sections/secondSectionAbout/secondSectionAbout'
import ThirdSectionAbout from './Sections/thirdSectionAbout/thirdSectionAbout'
import FourthSectionAbout from './Sections/fourthSectionAbout/fourthSectionAbout'
import FifthSectionAbout from './Sections/fifthSectionAbout/fifthSectionAbout'
import SixthSectionAbout from './Sections/sixthSectionAbout/sixthSectionAbout'

const About = () => {
  return (
    <div className='about-container'>

      < FirstSectionAbout />
      < SecondSectionAbout />
      < ThirdSectionAbout />
      < FourthSectionAbout />
      < FifthSectionAbout />
      < SixthSectionAbout />
    </div>
  )
}

export default About